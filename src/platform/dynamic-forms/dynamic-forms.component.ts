import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ContentChildren,
  TemplateRef,
  QueryList,
  AfterContentInit,
  OnDestroy,
} from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

import { TdDynamicFormsService, ITdDynamicElementConfig } from './services/dynamic-forms.service';
import { TdDynamicFormsErrorTemplateDirective } from './dynamic-element.component';

import { timer, Subject, Observable } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'td-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdDynamicFormsComponent implements AfterContentInit, OnDestroy {
  private _renderedElements: ITdDynamicElementConfig[] = [];
  private _elements: ITdDynamicElementConfig[];
  private _templateMap: Map<string, TemplateRef<any>> = new Map<string, TemplateRef<any>>();
  private _destroy$: Subject<any> = new Subject();
  private _destroyControl$: Subject<string> = new Subject();

  @ContentChildren(TdDynamicFormsErrorTemplateDirective, { descendants: true }) _errorTemplates: QueryList<
    TdDynamicFormsErrorTemplateDirective
  >;
  dynamicForm: FormGroup;

  /**
   * elements: ITdDynamicElementConfig[]
   * JS Object that will render the elements depending on its config.
   * [name] property is required.
   */
  @Input('elements')
  set elements(elements: ITdDynamicElementConfig[]) {
    if (elements) {
      this._elements = elements;
    } else {
      this._elements = [];
    }
    this._rerenderElements();
  }
  get elements(): ITdDynamicElementConfig[] {
    return this._renderedElements;
  }

  /**
   * Getter property for dynamic [FormGroup].
   */
  get form(): FormGroup {
    return this.dynamicForm;
  }

  /**
   * Getter property for [valid] of dynamic [FormGroup].
   */
  get valid(): boolean {
    if (this.dynamicForm) {
      return this.dynamicForm.valid;
    }
    return false;
  }

  /**
   * Getter property for [value] of dynamic [FormGroup].
   */
  get value(): any {
    if (this.dynamicForm) {
      return this.dynamicForm.value;
    }
    return {};
  }

  /**
   * Getter property for [errors] of dynamic [FormGroup].
   */
  get errors(): { [name: string]: any } {
    if (this.dynamicForm) {
      const errors: { [name: string]: any } = {};
      for (const name of Object.keys(this.dynamicForm.controls)) {
        errors[name] = this.dynamicForm.controls[name].errors;
      }
      return errors;
    }
    return {};
  }

  /**
   * Getter property for [controls] of dynamic [FormGroup].
   */
  get controls(): { [key: string]: AbstractControl } {
    if (this.dynamicForm) {
      return this.dynamicForm.controls;
    }
    return {};
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _dynamicFormsService: TdDynamicFormsService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {
    this.dynamicForm = this._formBuilder.group({});
  }

  ngAfterContentInit(): void {
    this._updateErrorTemplates();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
    this._destroyControl$.complete();
  }

  /**
   * Refreshes the form and rerenders all validator/element modifications.
   */
  refresh(): void {
    this._rerenderElements();
    this._updateErrorTemplates();
  }

  /**
   * Getter method for error template references
   */
  getErrorTemplateRef(name: string): TemplateRef<any> {
    return this._templateMap.get(name);
  }

  /**
   * Loads error templates and sets them in a map for faster access.
   */
  private _updateErrorTemplates(): void {
    this._templateMap = new Map<string, TemplateRef<any>>();
    for (const errorTemplate of this._errorTemplates.toArray()) {
      this._templateMap.set(errorTemplate.tdDynamicFormsError, errorTemplate.templateRef);
    }
  }

  private _rerenderElements(): void {
    this._clearRemovedElements();
    this._renderedElements = [];
    const duplicates: string[] = [];
    this._elements.forEach((elem: ITdDynamicElementConfig) => {
      this._dynamicFormsService.validateDynamicElementName(elem.name);
      if (duplicates.indexOf(elem.name) > -1) {
        throw new Error(`Dynamic element name: "${elem.name}" is duplicated`);
      }
      duplicates.push(elem.name);
      const dynamicElement: AbstractControl = this.dynamicForm.get(elem.name);
      if (!dynamicElement) {
        this.dynamicForm.addControl(elem.name, this._dynamicFormsService.createFormControl(elem));
        this._subscribeToControlStatusChanges(elem.name);
      } else {
        dynamicElement.setValue(elem.default);
        dynamicElement.markAsPristine();
        dynamicElement.markAsUntouched();
        if (elem.disabled) {
          dynamicElement.disable();
        } else {
          dynamicElement.enable();
        }
        dynamicElement.setValidators(this._dynamicFormsService.createValidators(elem));
      }
      // copy objects so they are only changes when calling this method
      this._renderedElements.push(Object.assign({}, elem));
    });
    // call a change detection since the whole form might change
    this._changeDetectorRef.detectChanges();
    timer()
      .toPromise()
      .then(() => {
        // call a markForCheck so elements are rendered correctly in OnPush
        this._changeDetectorRef.markForCheck();
      });
  }

  private _clearRemovedElements(): void {
    this._renderedElements = this._renderedElements.filter(
      (renderedElement: ITdDynamicElementConfig) =>
        !this._elements.some((element: ITdDynamicElementConfig) => element.name === renderedElement.name),
    );
    // remove elements that were removed from the array
    this._renderedElements.forEach((elem: ITdDynamicElementConfig) => {
      this._destroyControl$.next(elem.name);
      this.dynamicForm.removeControl(elem.name);
    });
  }

  // Updates component when manually adding errors to controls
  private _subscribeToControlStatusChanges(elementName: string): void {
    const control: AbstractControl = this.controls[elementName];

    const controlDestroyed$: Observable<any> = this._destroyControl$.pipe(
      filter((destroyedElementName: string) => destroyedElementName === elementName),
    );

    control.statusChanges.pipe(takeUntil(this._destroy$), takeUntil(controlDestroyed$)).subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }
}

import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

import { TdDynamicFormsService, ITdDynamicElementConfig } from './services/dynamic-forms.service';

@Component({
  selector: 'td-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
})
export class TdDynamicFormsComponent {

  private _prevElements: ITdDynamicElementConfig[] = [];
  private _elements: ITdDynamicElementConfig[];
  dynamicForm: FormGroup;

  /**
   * elements: ITdDynamicElementConfig[]
   * JS Object that will render the elements depending on its config.
   * [name] property is required.
   */
  @Input('elements')
  set elements(elements: ITdDynamicElementConfig[]){
    if (elements) {
      this._elements = elements;
    } else {
      this._elements = [];
    }
    this._rerenderElements();
  }
  get elements(): ITdDynamicElementConfig[] {
    return this._elements;
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
      let errors: {[name: string]: any} = {};
      for (let name in this.dynamicForm.controls) {
        errors[name] = this.dynamicForm.controls[name].errors;
      }
      return errors;
    }
    return {};
  }

  /**
   * Getter property for [controls] of dynamic [FormGroup].
   */
  get controls(): {[key: string]: AbstractControl} {
    if (this.dynamicForm) {
      return this.dynamicForm.controls;
    }
    return {};
  }

  constructor(private _formBuilder: FormBuilder,
              private _dynamicFormsService: TdDynamicFormsService,
              private _changeDetectorRef: ChangeDetectorRef) {
    this.dynamicForm = this._formBuilder.group({});
  }

  update(): void {
    this._rerenderElements();
  }

  private _rerenderElements(): void {
    this._clearRemovedElements();
    let duplicates: string[] = [];
    this._elements.forEach((elem: ITdDynamicElementConfig) => {
      this._dynamicFormsService.validateDynamicElementName(elem.name);
      if (duplicates.indexOf(elem.name) > -1) {
        throw new Error(`Dynamic element name: "${elem.name}" is duplicated`);
      }
      duplicates.push(elem.name);
      if (!this.dynamicForm.get(elem.name)) {
        this.dynamicForm.addControl(elem.name, this._dynamicFormsService.createFormControl(elem));
      } else {
        this.dynamicForm.get(elem.name).setValidators(this._dynamicFormsService.createValidators(elem));
      }
    });
    this._prevElements = Object.assign([], this.elements);
    this._changeDetectorRef.detectChanges();
  }

  private _clearRemovedElements(): void {
    for (let i: number = 0; i < this._prevElements.length; i++) {
      for (let j: number = 0; j < this._elements.length; j++) {
        if (this._prevElements[i] === this._elements[j]) {
          delete this._prevElements[i];
          break;
        }
      }
    }
    this._prevElements.forEach((elem: ITdDynamicElementConfig) => {
      this.dynamicForm.removeControl(elem.name);
    });
  }
}

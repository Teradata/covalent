import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

import { TdDynamicFormsService, ITdDynamicElementConfig } from './services/dynamic-forms.service';

@Component({
  selector: 'td-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
})
export class TdDynamicFormsComponent {

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
      if (this._elements) {
        this._elements.forEach((elem: ITdDynamicElementConfig) => {
          this.dynamicForm.removeControl(elem.name);
        });
      }
      let duplicates: string[] = [];
      elements.forEach((elem: ITdDynamicElementConfig) => {
        this._dynamicFormsService.validateDynamicElementName(elem.name);
        if (duplicates.indexOf(elem.name) > -1) {
          throw new Error(`Dynamic element name: "${elem.name}" is duplicated`);
        }
        duplicates.push(elem.name);
        this.dynamicForm.registerControl(elem.name, this._dynamicFormsService.createFormControl(elem));
      });
      this._elements = elements;
      this._changeDetectorRef.detectChanges();
    }
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
  get errors(): {[name: string]: any} {
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
}

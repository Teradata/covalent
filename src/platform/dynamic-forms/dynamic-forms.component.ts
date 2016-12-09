import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DynamicFormsService, IDynamicElementConfig } from './services/dynamic-forms.service';

@Component({
  selector: 'td-dynamic-forms',
  templateUrl: 'dynamic-forms.component.html',
  providers: [ DynamicFormsService ],
})
export class TdDynamicFormsComponent {

  private _elements: IDynamicElementConfig[];

  dynamicForm: FormGroup;

  @Input('elements')
  set elements(elements: IDynamicElementConfig[]){
    if (elements) {
      if (this._elements) {
        this._elements.forEach((elem: IDynamicElementConfig) => {
          this.dynamicForm.removeControl(elem.name);
        });
      }
      elements.forEach((elem: IDynamicElementConfig) => {
        this.dynamicForm.registerControl(elem.name, this._dynamicFormsService.createFormControl(elem));
      });
      this._elements = elements;
      this._changeDetectorRef.detectChanges();
    }
  }
  get elements(): IDynamicElementConfig[] {
    return this._elements;
  }

  get form(): FormGroup {
    return this.dynamicForm;
  }

  get valid(): boolean {
    if (this.dynamicForm) {
      return this.dynamicForm.valid;
    }
    return false;
  }

  get value(): any {
    if (this.dynamicForm) {
      return this.dynamicForm.value;
    }
    return {};
  }

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

  get controls(): any {
    if (this.dynamicForm) {
      return this.dynamicForm.controls;
    }
    return {};
  }

  constructor(private _formBuilder: FormBuilder,
              private _dynamicFormsService: DynamicFormsService,
              private _changeDetectorRef: ChangeDetectorRef) {
    this.dynamicForm = this._formBuilder.group({});
  }
}

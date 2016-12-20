import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { TdDynamicFormsService, ITdDynamicElementConfig } from './services/dynamic-forms.service';

@Component({
  selector: 'td-dynamic-forms',
  templateUrl: 'dynamic-forms.component.html',
  providers: [ TdDynamicFormsService ],
})
export class TdDynamicFormsComponent {

  private _elements: ITdDynamicElementConfig[];

  dynamicForm: FormGroup;

  @Input('elements')
  set elements(elements: ITdDynamicElementConfig[]){
    if (elements) {
      if (this._elements) {
        this._elements.forEach((elem: ITdDynamicElementConfig) => {
          this.dynamicForm.removeControl(elem.name);
        });
      }
      elements.forEach((elem: ITdDynamicElementConfig) => {
        this.dynamicForm.registerControl(elem.name, this._dynamicFormsService.createFormControl(elem));
      });
      this._elements = elements;
      this._changeDetectorRef.detectChanges();
    }
  }
  get elements(): ITdDynamicElementConfig[] {
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
              private _dynamicFormsService: TdDynamicFormsService,
              private _changeDetectorRef: ChangeDetectorRef) {
    this.dynamicForm = this._formBuilder.group({});
  }
}

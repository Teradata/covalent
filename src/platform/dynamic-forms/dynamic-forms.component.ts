import { Component, Input, ChangeDetectorRef, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, FormArray } from '@angular/forms';

import { TdDynamicFormsService, ITdDynamicElementConfig, ITdFormGroup } from './services/dynamic-forms.service';
import { FormArrayUtils } from './services/form-array-utils';
import has = Reflect.has;

export enum constant {
  FORM_ARRAY = <any>'formArray',
}

@Component({
  selector: 'td-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
})
export class TdDynamicFormsComponent implements DoCheck {

  // dirty check
  private _elementsLength: number = 0;
  private _formArrayUtils: FormArrayUtils;

  dynamicForm: FormGroup;
  elementConfigs: { [key: string ]: ITdDynamicElementConfig } = {};

  /**
   * elements: ITdDynamicElementConfig[]
   * JS Object that will render the elements depending on its config.
   * [name] property is required.
   */
  @Input('elements') elements: ITdDynamicElementConfig[] = [];

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
      return this._formArrayUtils.getValue();
    }
    return {};
  }

  /**
   * Getter property for [errors] of dynamic [FormGroup].
   */
  get errors(): { [name: string]: any } {
    if (this.dynamicForm) {
      return this._formArrayUtils.getErrors();
    }
    return {};
  }

  /**
   * Getter property for [controls] of dynamic [FormGroup].
   */
  get controls(): { [key: string]: AbstractControl } {
    if (this.dynamicForm) {
      return this._formArrayUtils.getControls();
    }
    return {};
  }

  constructor(private _formBuilder: FormBuilder,
              private _dynamicFormsService: TdDynamicFormsService,
              private _changeDetectorRef: ChangeDetectorRef) {
    this.dynamicForm = this._formBuilder.group({
      formArray: this._formBuilder.array([]),
    });

    // Not use constructor because FormArray should not be an instance variable.
    this._formArrayUtils = new FormArrayUtils();
    this._formArrayUtils.formArray = <FormArray>this.dynamicForm.controls[ constant.FORM_ARRAY ];
  }

  ngDoCheck(): void {

    if (!this.elements) {
      return;
    }

    // manual dirty check
    if (this.elements.length === this._elementsLength) {
      this.compareControls();
    } else {
      let doAdd: boolean = this.elements.length > this._elementsLength;

      // set pristine
      this._elementsLength = this.elements.length;

      if (doAdd) {
        this.pushControls();
      } else {
        this.removeControls();
      }
    }

  }

  pushControls(): void {

    let duplicates: string[] = [];
    this.elements.forEach((elem: ITdDynamicElementConfig) => {
      this._dynamicFormsService.validateDynamicElementName(elem.name);
      if (duplicates.indexOf(elem.name) > -1) {
        throw new Error(`Dynamic element name: "${elem.name}" is duplicated`);
      }
      duplicates.push(elem.name);

      if (!this._formArrayUtils.contains(elem.name)) {

        // tslint:disable-next-line
        this.elementConfigs[ elem.name ] = elem;

        // Let FormGroup API create the control
        // tslint:disable-next-line
        (<FormArray>this.dynamicForm.controls[ constant.FORM_ARRAY ]).push(this.createFormGroup(elem));
      }
    });

    this._changeDetectorRef.detectChanges();

  }

  createFormGroup(elem: ITdDynamicElementConfig): FormGroup {
    let group: any = {};
    elem.default = elem.default || '';

    // group[ elem.name ] = [ defaultValue, validators ];
    group[ elem.name ] = this._dynamicFormsService.createFormControl(elem);

    let newGroup: FormGroup = this._formBuilder.group(group);
    (<ITdFormGroup>newGroup).tdElementConfig = elem;

    return newGroup;
  }

  removeControls(): void {
    // tslint:disable-next-line
    let arrayControl: FormArray = <FormArray>this.dynamicForm.controls[ constant.FORM_ARRAY ];

    let removeControlsByName: string[] = this._formArrayUtils.getControlNamesToRemoveByElements(this.elements);

    removeControlsByName.forEach((name: string) => {

      // remove ITdDynamicElementConfig reference
      delete this.elementConfigs[ name ];

      // Need to get index every iteration
      // since remove control re-indexes array.
      let indexInFormArray: number = this._formArrayUtils.indexOf(name);
      arrayControl.removeAt(indexInFormArray);
    });

    this._changeDetectorRef.detectChanges();
  }

  compareControls(): void {

    let hasChanged: any = [];

    this.elements.forEach((elem: ITdDynamicElementConfig, index: number) => {
      if (elem !== this.elementConfigs[ elem.name ]) {
        hasChanged.push({
          index: index,
          elem: elem,
        });

        this.elementConfigs[ elem.name ] = elem;
      }
    });

    if (hasChanged.length) {
      while (hasChanged.length) {
        let changedElem: any = hasChanged.shift();

        // remove old FormGroup
        (<FormArray>this.dynamicForm.controls[ constant.FORM_ARRAY ]).removeAt(changedElem.index);

        // create new FormGroup
        let newGroup: FormGroup = this.createFormGroup(changedElem.elem);

        // insert new FormGroup
        (<FormArray>this.dynamicForm.controls[ constant.FORM_ARRAY ]).insert(changedElem.index, newGroup);
      }
    }
  }
}

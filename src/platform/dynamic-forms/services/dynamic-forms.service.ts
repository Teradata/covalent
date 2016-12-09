import { Injectable } from '@angular/core';
import { Validators, ValidatorFn, FormControl } from '@angular/forms';

import { TdMaxValidator } from '@covalent/core';
import { TdMinValidator } from '@covalent/core';
import { TdNumberRequiredValidator } from '@covalent/core';

import { TdDynamicInputComponent } from '../dynamic-elements/dynamic-input/dynamic-input.component';
import { TdDynamicSlideToggleComponent } from '../dynamic-elements/dynamic-slide-toggle/dynamic-slide-toggle.component';

export enum DynamicElement {
  Text = <any>'text',
  Boolean = <any>'boolean',
  Date = <any>'date',
  Number = <any>'number',
}

export interface IDynamicElementConfig {
    label?: string;
    name: string;
    type: DynamicElement;
    required?: boolean;
    min?: any;
    max?: any;
    default?: any;
}

@Injectable()
export class DynamicFormsService {

  getElementType(element: DynamicElement): any {
    switch (element) {
      case DynamicElement.Text:
      case DynamicElement.Number:
      case DynamicElement.Date:
        return TdDynamicInputComponent;
      case DynamicElement.Boolean:
        return TdDynamicSlideToggleComponent;
      default:
        throw `Error: type ${element} does not exist.`;
    }
  }

  getElementFlex(element: DynamicElement): any {
    switch (element) {
      case DynamicElement.Text:
      case DynamicElement.Number:
        return 45;
      case DynamicElement.Date:
        return 20;
      case DynamicElement.Boolean:
        return 20;
      default:
        throw `Error: type ${element} does not exist.`;
    }
  }

  createFormControl(config: IDynamicElementConfig): FormControl {
    let validator: ValidatorFn = this.createValidators(config);
    return new FormControl(config.default, validator);
  }

  createValidators(config: IDynamicElementConfig): ValidatorFn {
    let validator: ValidatorFn;
    if (config.required) {
      validator = config.type === DynamicElement.Number ? TdNumberRequiredValidator.validate : Validators.required;
    }
    if (config.max || config.max === 0) {
      validator = Validators.compose([validator, TdMaxValidator.validate(config.max)]);
    }
    if (config.min || config.min === 0) {
      validator = Validators.compose([validator, TdMinValidator.validate(config.min)]);
    }
    return validator;
  }
}

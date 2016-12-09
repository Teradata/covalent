import { Injectable } from '@angular/core';
import { Validators, ValidatorFn, FormControl } from '@angular/forms';

import { TdMaxValidator } from '@covalent/core';
import { TdMinValidator } from '@covalent/core';
import { TdNumberRequiredValidator } from '@covalent/core';

import { TdDynamicInputComponent } from '../dynamic-elements/dynamic-input/dynamic-input.component';
import { TdDynamicSlideToggleComponent } from '../dynamic-elements/dynamic-slide-toggle/dynamic-slide-toggle.component';

export enum DynamicType {
  Text = <any>'text',
  Boolean = <any>'boolean',
  Number = <any>'number',
}

export enum DynamicElement {
  Input = <any>'input',
  Slider = <any>'slider',
  TextArea = <any>'text-area',
  SlideToggle = <any>'slide-toggle',
  Checkbox = <any>'checkbox',
  ButtonToggleGroup = <any>'button-toggle-group',
  ButtonToggle = <any>'button-toggle',
  RadioGroup = <any>'radio-group',
  Radio = <any>'radio-group',
  Select = <any>'select',
}

export interface IDynamicElementConfig {
    label?: string;
    name: string;
    type: DynamicType | DynamicElement;
    required?: boolean;
    min?: any;
    max?: any;
    default?: any;
}

@Injectable()
export class DynamicFormsService {

  getDynamicElement(element: DynamicElement | DynamicType): any {
    switch (element) {
      case DynamicType.Text:
      case DynamicType.Number:
      case DynamicElement.Input:
        return TdDynamicInputComponent;
      case DynamicType.Boolean:
      case DynamicElement.SlideToggle:
        return TdDynamicSlideToggleComponent;
      case DynamicElement.Checkbox:
      case DynamicElement.ButtonToggle:
      case DynamicElement.TextArea:
      case DynamicElement.Slider:
      case DynamicElement.Select:
      default:
        throw `Error: type ${element} does not exist.`;
    }
  }

  getDefaultElementFlex(element: DynamicElement | DynamicType): any {
    switch (element) {
      case DynamicType.Text:
      case DynamicType.Number:
      case DynamicElement.Input:
        return 45;
      case DynamicType.Boolean:
      case DynamicElement.SlideToggle:
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
      validator = config.type === DynamicType.Number ? TdNumberRequiredValidator.validate : Validators.required;
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

import { Injectable } from '@angular/core';
import { Validators, ValidatorFn, FormControl } from '@angular/forms';

import { TdMaxValidator, TdMinValidator, TdNumberRequiredValidator } from '../../core';

import { TdDynamicInputComponent } from '../dynamic-elements/dynamic-input/dynamic-input.component';
import { TdDynamicSlideToggleComponent } from '../dynamic-elements/dynamic-slide-toggle/dynamic-slide-toggle.component';
import { TdDynamicCheckboxComponent } from '../dynamic-elements/dynamic-checkbox/dynamic-checkbox.component';
import { TdDynamicSliderComponent } from '../dynamic-elements/dynamic-slider/dynamic-slider.component';

export enum TdDynamicType {
  Text = <any>'text',
  Boolean = <any>'boolean',
  Number = <any>'number',
}

export enum TdDynamicElement {
  Input = <any>'input',
  Slider = <any>'slider',
  SlideToggle = <any>'slide-toggle',
  Checkbox = <any>'checkbox',
}

export interface ITdDynamicElementConfig {
  label?: string;
  name: string;
  type: TdDynamicType | TdDynamicElement;
  required?: boolean;
  min?: any;
  max?: any;
  default?: any;
}

export const DYNAMIC_ELEMENT_NAME_REGEX: RegExp = /^[a-zA-Z]+[a-zA-Z0-9-_]*$/;

@Injectable()
export class TdDynamicFormsService {

  /**
   * Method to validate if the [name] is a proper element name.
   * Throws error if name is not valid.
   */
  validateDynamicElementName(name: string): void {
    if (!DYNAMIC_ELEMENT_NAME_REGEX.test(name)) {
      throw `Dynamic element name: "${name}" is not valid.`;
    }
  }

  /**
   * Gets component to be rendered depending on [TdDynamicElement | TdDynamicType]
   * Throws error if it does not exists or not supported.
   */
  getDynamicElement(element: TdDynamicElement | TdDynamicType): any {
    switch (element) {
      case TdDynamicType.Text:
      case TdDynamicType.Number:
      case TdDynamicElement.Input:
        return TdDynamicInputComponent;
      case TdDynamicType.Boolean:
      case TdDynamicElement.SlideToggle:
        return TdDynamicSlideToggleComponent;
      case TdDynamicElement.Checkbox:
        return TdDynamicCheckboxComponent;
      case TdDynamicElement.Slider:
        return TdDynamicSliderComponent;
      default:
        throw `Error: type ${element} does not exist or not supported.`;
    }
  }

  /**
   * Gets default flex for element depending on [TdDynamicElement | TdDynamicType].
   * Throws error if it does not exists or not supported.
   */
  getDefaultElementFlex(element: TdDynamicElement | TdDynamicType): any {
    switch (element) {
      case TdDynamicType.Text:
      case TdDynamicType.Number:
      case TdDynamicElement.Slider:
      case TdDynamicElement.Input:
        return 45;
      case TdDynamicType.Boolean:
      case TdDynamicElement.Checkbox:
      case TdDynamicElement.SlideToggle:
        return 20;
      default:
        throw `Error: type ${element} does not exist or not supported.`;
    }
  }

  /**
   * Creates form control for element depending [ITdDynamicElementConfig] properties.
   */
  createFormControl(config: ITdDynamicElementConfig): FormControl {
    let validator: ValidatorFn = this.createValidators(config);
    return new FormControl(config.default, validator);
  }

  /**
   * Creates form validationdepending [ITdDynamicElementConfig] properties.
   */
  createValidators(config: ITdDynamicElementConfig): ValidatorFn {
    let validator: ValidatorFn;
    if (config.required) {
      validator = config.type === TdDynamicType.Number ? TdNumberRequiredValidator.validate : Validators.required;
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

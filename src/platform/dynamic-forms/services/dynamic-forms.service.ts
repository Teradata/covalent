import { Injectable, Provider, SkipSelf, Optional } from '@angular/core';
import { Validators, ValidatorFn, FormControl } from '@angular/forms';

import { CovalentValidators } from '../../core';

import { TdDynamicInputComponent } from '../dynamic-elements/dynamic-input/dynamic-input.component';
import { TdDynamicTextareaComponent } from '../dynamic-elements/dynamic-textarea/dynamic-textarea.component';
import { TdDynamicSlideToggleComponent } from '../dynamic-elements/dynamic-slide-toggle/dynamic-slide-toggle.component';
import { TdDynamicCheckboxComponent } from '../dynamic-elements/dynamic-checkbox/dynamic-checkbox.component';
import { TdDynamicSliderComponent } from '../dynamic-elements/dynamic-slider/dynamic-slider.component';
import { TdDynamicSelectComponent } from '../dynamic-elements/dynamic-select/dynamic-select.component';

export enum TdDynamicType {
  Text = <any>'text',
  Boolean = <any>'boolean',
  Number = <any>'number',
  Array = <any>'array',
}

export enum TdDynamicElement {
  Input = <any>'input',
  Password = <any>'password',
  Textarea = <any>'textarea',
  Slider = <any>'slider',
  SlideToggle = <any>'slide-toggle',
  Checkbox = <any>'checkbox',
  Select = <any>'select',
}

export interface ITdDynamicElementConfig {
  label?: string;
  name: string;
  type: TdDynamicType | TdDynamicElement;
  required?: boolean;
  min?: any;
  max?: any;
  selections?: any[];
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
      throw new Error(`Dynamic element name: "${name}" is not valid.`);
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
      case TdDynamicElement.Password:
        return TdDynamicInputComponent;
      case TdDynamicElement.Textarea:
        return TdDynamicTextareaComponent;
      case TdDynamicType.Boolean:
      case TdDynamicElement.SlideToggle:
        return TdDynamicSlideToggleComponent;
      case TdDynamicElement.Checkbox:
        return TdDynamicCheckboxComponent;
      case TdDynamicElement.Slider:
        return TdDynamicSliderComponent;
      case TdDynamicType.Array:
      case TdDynamicElement.Select:
        return TdDynamicSelectComponent;
      default:
        throw new Error(`Error: type ${element} does not exist or not supported.`);
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
      case TdDynamicElement.Password:
      case TdDynamicType.Array:
      case TdDynamicElement.Select:
        return 45;
      case TdDynamicElement.Textarea:
        return 95;
      case TdDynamicType.Boolean:
      case TdDynamicElement.Checkbox:
      case TdDynamicElement.SlideToggle:
        return 20;
      default:
        throw new Error(`Error: type ${element} does not exist or not supported.`);
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
      validator = Validators.required;
    }
    if (config.max || config.max === 0) {
      validator = Validators.compose([validator, CovalentValidators.max(config.max)]);
    }
    if (config.min || config.min === 0) {
      validator = Validators.compose([validator, CovalentValidators.min(config.min)]);
    }
    return validator;
  }
}

export function DYNAMIC_FORMS_PROVIDER_FACTORY(
    parent: TdDynamicFormsService): TdDynamicFormsService {
  return parent || new TdDynamicFormsService();
}

export const DYNAMIC_FORMS_PROVIDER: Provider = {
  // If there is already a service available, use that. Otherwise, provide a new one.
  provide: TdDynamicFormsService,
  deps: [[new Optional(), new SkipSelf(), TdDynamicFormsService]],
  useFactory: DYNAMIC_FORMS_PROVIDER_FACTORY,
};

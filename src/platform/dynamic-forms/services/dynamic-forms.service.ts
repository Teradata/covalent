import { Injectable, Provider, SkipSelf, Optional } from '@angular/core';
import { Validators, ValidatorFn, FormControl, AbstractControl } from '@angular/forms';

import { TdDynamicInputComponent } from '../dynamic-elements/dynamic-input/dynamic-input.component';
import { TdDynamicFileInputComponent } from '../dynamic-elements/dynamic-file-input/dynamic-file-input.component';
import { TdDynamicTextareaComponent } from '../dynamic-elements/dynamic-textarea/dynamic-textarea.component';
import { TdDynamicSlideToggleComponent } from '../dynamic-elements/dynamic-slide-toggle/dynamic-slide-toggle.component';
import { TdDynamicCheckboxComponent } from '../dynamic-elements/dynamic-checkbox/dynamic-checkbox.component';
import { TdDynamicSliderComponent } from '../dynamic-elements/dynamic-slider/dynamic-slider.component';
import { TdDynamicSelectComponent } from '../dynamic-elements/dynamic-select/dynamic-select.component';

import { tdValidators, ITdCustomValidators } from '../validators/dynamic-forms.validators';

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
  FileInput = <any>'file-input',
}

export interface ITdCustomValidate {
  name: string;
  message: string;

  // return boolean on a value
  predicateFn(value: any): boolean ;
}

export interface ITdCustomError {
  [validationKey: string]: { message: string };
}

export interface ITdDynamicElementConfig extends ITdCustomValidators {
  label?: string;
  name: string;
  type: TdDynamicType | TdDynamicElement;
  required?: boolean;
  min?: any;
  max?: any;
  selections?: any[];
  default?: any;
  flex?: number;
  customValidators?: (ITdCustomValidate | ValidatorFn)[];
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
      case TdDynamicElement.FileInput:
        return TdDynamicFileInputComponent;
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
      case TdDynamicElement.FileInput:
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
      validator = Validators.compose([validator, Validators.max(parseFloat(config.max))]);
    }
    if (config.min || config.min === 0) {
      validator = Validators.compose([validator, Validators.min(parseFloat(config.min))]);
    }

    // Find and add covalent custom validators
    let configKeys: string[] = Object.keys(config);
    configKeys.forEach((key: string) => {
      if (tdValidators.hasOwnProperty(key)) {
        validator = Validators.compose([validator, <ValidatorFn>tdValidators[key]]);
      }
    });

    // Add provided custom validators from config
    if (config.customValidators) {
      config.customValidators.forEach((customValidator: ITdCustomValidate | ValidatorFn) => {

        // Custom validator is a function of type ValidatorFn
        if (typeof customValidator === 'function') {
          validator = Validators.compose([validator, <ValidatorFn>customValidator]);
        } else if (customValidator.hasOwnProperty('name')) {

          // Custom Validator is a config object of interface ITdCustomValidate
          // Create a ValidatorFn based on config.
          let customValidatorFn: ValidatorFn = (control: AbstractControl): { [key: string]: any } => {
              let isValid: boolean = (<ITdCustomValidate>customValidator).predicateFn(control.value);

              let error: any = {};
              error[customValidator.name] = {
                message: (<ITdCustomValidate>customValidator).message,
              };

              return !isValid ? error : undefined;
          };

          validator = Validators.compose([validator, customValidatorFn]);
        }
      });
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

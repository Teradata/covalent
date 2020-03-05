import { Component, ViewChild } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import {
  TdDynamicFormsComponent,
  ITdDynamicElementConfig,
  TdDynamicElement,
  TdDynamicType,
} from '@covalent/dynamic-forms';

@Component({
  selector: 'dynamic-forms-demo-custom-validation',
  styleUrls: ['./dynamic-forms-demo-custom-validation.component.scss'],
  templateUrl: './dynamic-forms-demo-custom-validation.component.html',
})
export class DynamicFormsDemoCustomValidationComponent {
  @ViewChild('manualValidateForm', { static: true }) manualValidateForm: TdDynamicFormsComponent;
  customValidationElements: ITdDynamicElementConfig[] = [
    {
      name: 'evenElement',
      label: 'Even Number',
      type: TdDynamicType.Number,
      validators: [
        {
          validator: (control: AbstractControl) => {
            const isValid: boolean = (!control.value && control.value !== 0) || control.value % 2 === 0;
            return !isValid ? { even: true } : undefined;
          },
        },
      ],
    },
    {
      name: 'oddInRangeElement',
      label: 'Odd Number Between 8 and 20',
      type: TdDynamicType.Number,
      min: 8,
      max: 20,
      validators: [
        {
          validator: (control: AbstractControl) => {
            const isValid: boolean = (!control.value && control.value !== 0) || control.value % 2 !== 0;
            return !isValid ? { odd: true } : undefined;
          },
        },
      ],
    },
  ];

  multipleValidatorTypes: ITdDynamicElementConfig[] = [
    {
      name: 'passwordElement',
      label: 'Password',
      type: TdDynamicElement.Password,
      required: true,
      validators: [
        {
          validator: (control: AbstractControl) => {
            const isValid: boolean = /\d/i.test(control.value);
            return !isValid ? { oneNumber: true } : undefined;
          },
        },
        {
          validator: (control: AbstractControl) => {
            const isValid: boolean = control.value && control.value.length >= 8 && control.value.length <= 20;
            return !isValid ? { length: true } : undefined;
          },
        },
        {
          validator: (control: AbstractControl) => {
            const validCharacters: string[] = ['!', '@', '#', '$', '%'];
            const isValid: boolean = new RegExp('[' + validCharacters.join('').toString() + ']', 'g').test(
              control.value,
            );
            return !isValid ? { oneSpecialChar: true } : undefined;
          },
        },
      ],
    },
  ];

  angularValidators: ITdDynamicElementConfig[] = [
    {
      name: 'hexColorElement',
      label: 'Hexidecimal Color',
      type: TdDynamicType.Text,
      validators: [
        {
          validator: Validators.pattern(/^#[A-Fa-f0-9]{6}$/),
        },
      ],
    },
  ];

  manualValidatorElement: ITdDynamicElementConfig[] = [
    {
      name: 'vowelsElement',
      label: 'Vowels only',
      type: TdDynamicType.Text,
      required: true,
    },
  ];

  submitManualValidator(): void {
    const key: string = 'vowelsElement';
    const control: AbstractControl = this.manualValidateForm.controls[key];
    if (control.value.match(/[^aeiou]/)) {
      this.manualValidateForm.controls[key].setErrors({
        consonants: 'Only vowel characters. Do not use any consonants.',
      });
    }
  }
}

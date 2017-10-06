import { Component, HostBinding } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { TdCollapseAnimation } from '@covalent/core';
import { slideInDownAnimation } from '../../../app.animations';

import {
  ITdDynamicElementConfig,
  ITdDynamicElementValidator,
  TdDynamicElement,
  TdDynamicFormsComponent,
  TdDynamicType,
} from '@covalent/dynamic-forms';

@Component({
  selector: 'dynamic-forms-demo',
  styleUrls: ['./dynamic-forms.component.scss'],
  templateUrl: './dynamic-forms.component.html',
  animations: [
    slideInDownAnimation,
    TdCollapseAnimation(),
  ],
})
export class DynamicFormsDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  textElements: ITdDynamicElementConfig[] = [{
    name: 'input',
    type: TdDynamicElement.Input,
    required: false,
    flex: 50,
  }, {
    name: 'required-input',
    label: 'Input Label',
    type: TdDynamicElement.Input,
    required: true,
    flex: 50,
  }, {
    name: 'text-length',
    label: 'Text Length',
    type: TdDynamicElement.Input,
    minLength: 4,
    maxLength: 12,
    flex: 50,
  }, {
    name: 'text',
    type: TdDynamicType.Text,
    required: false,
    default: 'Default',
    flex: 50,
  }, {
    name: 'textarea',
    type: TdDynamicElement.Textarea,
    required: false,
  }, {
    name: 'required-password',
    label: 'Password Label',
    type: TdDynamicElement.Password,
    required: true,
  }];

  numberElements: ITdDynamicElementConfig[] = [{
    name: 'number',
    label: 'Number',
    type: TdDynamicType.Number,
    required: true,
    min: 18,
    max: 70,
  }, {
    name: 'slider',
    type: TdDynamicElement.Slider,
    min: 18,
    max: 70,
  }];

  booleanElements: ITdDynamicElementConfig[] = [{
    name: 'boolean',
    label: 'Boolean Label',
    type: TdDynamicType.Boolean,
    default: false,
  }, {
    name: 'slide-toggle',
    type: TdDynamicElement.SlideToggle,
    default: true,
  }, {
    name: 'checkbox',
    type: TdDynamicElement.Checkbox,
  }];

  arrayElements: ITdDynamicElementConfig[] = [{
    name: 'array',
    type: TdDynamicType.Array,
    selections: ['Test1', 'Test2', 'Test3', 'Test4'],
    default: 'Test1',
  }, {
    name: 'required-select',
    type: TdDynamicElement.Select,
    selections: ['Test1', 'Test2', 'Test3', 'Test4'],
    required: true,
  }, {
    name: 'value-label-select',
    type: TdDynamicElement.Select,
    selections: [
      {label: 'Test1', value: 1},
      {label: 'Test2', value: 2},
      {label: 'Test3', value: 3},
      {label: 'Test4', value: 4}],
    required: true,
  }];

  fileElements: ITdDynamicElementConfig[] = [{
    name: 'file-input',
    label: 'Browse a file',
    type: TdDynamicElement.FileInput,
  }];

  dynamicElements: ITdDynamicElementConfig[] = [{
    name: 'element-0',
    type: TdDynamicType.Text,
    required: true,
    flex: 80,
  }, {
    name: 'element-1',
    type: TdDynamicType.Number,
    required: false,
    max: 30,
    flex: 20,
  }];

  elementOptions: any[] = [
    TdDynamicElement.Input,
    TdDynamicType.Number,
    TdDynamicElement.Password,
    TdDynamicElement.Textarea,
    TdDynamicElement.Slider,
    TdDynamicElement.Checkbox,
    TdDynamicElement.SlideToggle,
    TdDynamicElement.FileInput,
  ];

  showDynamicCode: boolean = false;

  type: any;

  count: number = 2;

  customValidationElements: ITdDynamicElementConfig[] = [{
    name: 'evenElement',
    label: 'Even Number',
    type: TdDynamicType.Number,
    validators: [{
      validator: (control: AbstractControl) => {
        let isValid: boolean = (!control.value && control.value !== 0) || ((control.value % 2 ) === 0);
        return !isValid ? {even: true} : undefined;
      },
    }],
  }, {
    name: 'oddInRangeElement',
    label: 'Odd Number Between 8 and 20',
    type: TdDynamicType.Number,
    min: 8,
    max: 20,
    validators: [{
      validator: (control: AbstractControl) => {
        let isValid: boolean = (!control.value && control.value !== 0) || ((control.value % 2) !== 0);
        return !isValid ? {odd: true} : undefined;
      },
    }],
  }];

  multipleValidatorTypes: ITdDynamicElementConfig[] = [{
    name: 'passwordElement',
    label: 'Password',
    type: TdDynamicElement.Password,
    required: true,
    validators: [{
      validator: (control: AbstractControl) => {
        let isValid: boolean = (/\d/i.test(control.value));
        return !isValid ? {oneNumber: true} : undefined;
      },
    }, {
      validator: (control: AbstractControl) => {
        let isValid: boolean = control.value && (control.value.length >= 8) && (control.value.length <= 20);
        return !isValid ? {length: true} : undefined;
      },
    }, {
      validator: (control: AbstractControl) => {
        let validCharacters: string[] = ['!', '@', '#', '$', '%'];
        let isValid: boolean = new RegExp('[' + validCharacters.join('').toString() + ']', 'g').test(control.value);
        return !isValid ? {oneSpecialChar: true} : undefined;
      },
    }],
  }];

  angularValidators: ITdDynamicElementConfig[] = [{
    name: 'hexColorElement',
    label: 'Hexidecimal Color',
    type: TdDynamicType.Text,
    validators: [{
      validator: Validators.pattern(/^#[A-Fa-f0-9]{6}$/),
    }],
  }];

  isMinMaxSupported(type: TdDynamicElement | TdDynamicType): boolean {
    return type === TdDynamicElement.Slider || type === TdDynamicType.Number;
  }

  isMinMaxLengthSupported(type: TdDynamicElement | TdDynamicType): boolean {
    return type === TdDynamicElement.Input || type === TdDynamicType.Text;
  }

  addElement(): void {
    if (this.type) {
      this.dynamicElements.push({
        name: 'element-' + this.count++,
        type: this.type,
        required: false,
      });
      this.type = undefined;
    }
  }

  deleteElement(index: number): void {
    this.dynamicElements.splice(index, 1);
  }
}

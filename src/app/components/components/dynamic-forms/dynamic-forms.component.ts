import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../../app.animations';
import { TdDynamicType, ITdDynamicElementConfig, TdDynamicElement } from '@covalent/dynamic-forms';

@Component({
  selector: 'dynamic-forms-demo',
  styleUrls: [ './dynamic-forms.component.scss' ],
  templateUrl: './dynamic-forms.component.html',
  animations: [slideInDownAnimation],
})
export class DynamicFormsDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  dynamicFormsAttrs: any[] = [{
    description: `JS Object that will render the elements depending on its config.
                  [name] property is required.`,
    name: 'elements',
    type: 'ITdDynamicElementConfig[]',
  }, {
    description: `Getter property for dynamic [FormGroup].`,
    name: 'form',
    type: 'get(): FormGroup',
  }, {
    description: `Getter property for [valid] of dynamic [FormGroup].`,
    name: 'valid',
    type: 'get(): boolean',
  }, {
    description: `Getter property for [value] of dynamic [FormGroup].`,
    name: 'value',
    type: 'get(): any',
  }, {
    description: `Getter property for [errors] of dynamic [FormGroup].`,
    name: 'errors',
    type: 'get(): {[name: string]: any}',
  }, {
    description: `Getter property for [controls] of dynamic [FormGroup].`,
    name: 'controls',
    type: 'get(): {[key: string]: AbstractControl}',
  }];

  textElements: ITdDynamicElementConfig[] = [{
    name: 'input',
    type: TdDynamicElement.Input,
    required: false,
  }, {
    name: 'required-input',
    label: 'Input Label',
    type: TdDynamicElement.Input,
    required: true,
  }, {
    name: 'textarea',
    type: TdDynamicElement.Textarea,
    required: false,
  }, {
    name: 'text',
    type: TdDynamicType.Text,
    required: false,
    default: 'Default',
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
  }];

  fileElements: ITdDynamicElementConfig[] = [{
    name: 'file-input',
    label: 'Browse a file',
    type: TdDynamicElement.FileInput,
  }];
}

import { Component } from '@angular/core';
import { TdDynamicType, ITdDynamicElementConfig, TdDynamicElement } from '@covalent/dynamic-forms';

@Component({
  selector: 'dynamic-forms-demo',
  styleUrls: [ 'dynamic-forms.component.scss' ],
  templateUrl: 'dynamic-forms.component.html',
})
export class DynamicFormsDemoComponent {

  textElements: ITdDynamicElementConfig[] = [{
    name: 'input-without-label',
    type: TdDynamicElement.Input,
    required: false,
  }, {
    name: 'input-with-label',
    label: 'Input Label',
    type: TdDynamicElement.Input,
    required: true,
  }, {
    name: 'text-with-default',
    type: TdDynamicType.Text,
    required: false,
    default: 'Default',
  }];

  numberElements: ITdDynamicElementConfig[] = [{
    name: 'number',
    label: 'Number Label',
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
}

import { Component } from '@angular/core';
import { TdDynamicType, ITdDynamicElementConfig, TdDynamicElement } from '@covalent/dynamic-forms';

@Component({
  selector: 'dynamic-forms-demo',
  styleUrls: [ 'dynamic-forms.component.scss' ],
  templateUrl: 'dynamic-forms.component.html',
})
export class DynamicFormsDemoComponent {

  elements: ITdDynamicElementConfig[] = [{
    name: 'first_name',
    label: 'First Name',
    type: TdDynamicType.Text,
    required: true,
  }, {
    name: 'last_name',
    type: TdDynamicType.Text,
    required: false,
    default: 'Lucis',
  }, {
    name: 'age',
    type: TdDynamicType.Number,
    required: false,
    min: 18,
    max: 70,
  }, {
    name: 'age_slider',
    type: TdDynamicElement.Slider,
    required: false,
    min: 18,
    max: 70,
  }, {
    name: 'on_it',
    label: 'On It Boolean?',
    type: TdDynamicType.Boolean,
    default: true,
  }, {
    name: 'on_it_slide_toggle',
    label: 'On It Slide Toggle?',
    type: TdDynamicElement.SlideToggle,
    default: true,
  }, {
    name: 'on_it_checkbox',
    label: 'On It Check?',
    type: TdDynamicElement.Checkbox,
    default: true,
  }];
}

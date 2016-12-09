import { Component } from '@angular/core';
import { DynamicElement, IDynamicElementConfig, DynamicType } from '@covalent/dynamic-forms';

@Component({
  selector: 'dynamic-forms-demo',
  styleUrls: [ 'dynamic-forms.component.scss' ],
  templateUrl: 'dynamic-forms.component.html',
})
export class DynamicFormsDemoComponent {

  elements: IDynamicElementConfig[] = [{
    name: 'first_name',
    label: 'First Name',
    type: DynamicType.Text,
    required: true,
  }, {
    name: 'last_name',
    type: DynamicType.Text,
    required: false,
    default: 'Lucis',
  }, {
    name: 'age',
    type: DynamicType.Number,
    required: false,
    min: 18,
    max: 70,
  }, {
    name: 'on_it',
    label: 'On It?',
    type: DynamicType.Boolean,
    default: true,
  }];
}

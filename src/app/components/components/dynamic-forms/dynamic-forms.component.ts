import { Component } from '@angular/core';
import { DynamicElement, IDynamicElementConfig } from '@covalent/dynamic-forms';

@Component({
  selector: 'dynamic-forms-demo',
  styleUrls: [ 'dynamic-forms.component.scss' ],
  templateUrl: 'dynamic-forms.component.html',
})
export class DynamicFormsDemoComponent {

  elements: IDynamicElementConfig[] = [{
    name: 'first_name',
    label: 'First Name',
    type: DynamicElement.Text,
    required: true,
  }, {
    name: 'last_name',
    type: DynamicElement.Text,
    required: false,
    default: 'Lucis',
  }, {
    name: 'age',
    type: DynamicElement.Number,
    required: false,
    min: 18,
    max: 70,
  }, {
    name: 'on_it',
    label: 'On It?',
    type: DynamicElement.Boolean,
    default: true,
  }];
}

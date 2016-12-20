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
    name: 'on_it',
    label: 'On It?',
    type: TdDynamicType.Boolean,
    default: true,
  }];
}

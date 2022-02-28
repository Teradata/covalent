import { Component } from '@angular/core';
import {
  ITdDynamicElementConfig,
  TdDynamicElement,
  TdDynamicType,
} from '@covalent/dynamic-forms';

@Component({
  selector: 'dynamic-forms-demo-boolean',
  styleUrls: ['./dynamic-forms-demo-boolean.component.scss'],
  templateUrl: './dynamic-forms-demo-boolean.component.html',
})
export class DynamicFormsDemoBooleanComponent {
  booleanElements: ITdDynamicElementConfig[] = [
    {
      name: 'boolean',
      label: 'Boolean Label',
      type: TdDynamicType.Boolean,
      hint: 'this is a boolean',
      default: false,
    },
    {
      name: 'slideToggle',
      type: TdDynamicElement.SlideToggle,
      hint: 'this is a slide toggle',
      default: true,
    },
    {
      name: 'checkbox',
      type: TdDynamicElement.Checkbox,
      hint: 'this is a checkbox',
    },
  ];
}

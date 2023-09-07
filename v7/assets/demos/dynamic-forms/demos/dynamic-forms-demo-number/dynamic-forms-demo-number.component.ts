import { Component } from '@angular/core';
import {
  ITdDynamicElementConfig,
  TdDynamicElement,
  TdDynamicType,
} from '@covalent/dynamic-forms';

@Component({
  selector: 'dynamic-forms-demo-number',
  styleUrls: ['./dynamic-forms-demo-number.component.scss'],
  templateUrl: './dynamic-forms-demo-number.component.html',
})
export class DynamicFormsDemoNumberComponent {
  numberElements: ITdDynamicElementConfig[] = [
    {
      name: 'number',
      label: 'Number',
      type: TdDynamicType.Number,
      required: true,
      min: 18,
      max: 70,
    },
    {
      name: 'slider',
      type: TdDynamicElement.Slider,
      hint: 'this is a slider hint',
      min: 18,
      max: 70,
    },
  ];
}

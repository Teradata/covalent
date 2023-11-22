import { Component } from '@angular/core';
import {
  ITdDynamicElementConfig,
  TdDynamicElement,
  TdDynamicType,
} from '@covalent/dynamic-forms';

@Component({
  selector: 'dynamic-forms-demo-array',
  styleUrls: ['./dynamic-forms-demo-array.component.scss'],
  templateUrl: './dynamic-forms-demo-array.component.html',
})
export class DynamicFormsDemoArrayComponent {
  arrayElements: ITdDynamicElementConfig[] = [
    {
      name: 'array',
      type: TdDynamicType.Array,
      selections: ['Test1', 'Test2', 'Test3', 'Test4'],
      default: 'Test1',
    },
    {
      name: 'requiredSelect',
      type: TdDynamicElement.Select,
      selections: ['Test1', 'Test2', 'Test3', 'Test4'],
      required: true,
    },
    {
      name: 'requiredMultipleSelect',
      type: TdDynamicElement.Select,
      multiple: true,
      selections: ['Test1', 'Test2', 'Test3', 'Test4'],
      required: true,
    },
    {
      name: 'valueLabelSelect',
      hint: 'this is a select hint',
      type: TdDynamicElement.Select,
      selections: [
        { label: 'Test1', value: 1 },
        { label: 'Test2', value: 2 },
        { label: 'Test3', value: 3 },
        { label: 'Test4', value: 4 },
      ],
      required: true,
    },
  ];
}

import { Component } from '@angular/core';
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType } from '@covalent/dynamic-forms';

@Component({
  selector: 'dynamic-forms-demo-date',
  styleUrls: ['./dynamic-forms-demo-date.component.scss'],
  templateUrl: './dynamic-forms-demo-date.component.html',
  preserveWhitespaces: true,
})
export class DynamicFormsDemoDateComponent {
  dateElements: ITdDynamicElementConfig[] = [
    {
      name: 'date-input',
      label: 'Select a date',
      hint: 'this is a datepicker hint',
      type: TdDynamicElement.Datepicker,
      min: new Date(2018, 1, 1).setHours(0, 0, 0, 0),
    },
  ];
}

import { Component, ViewChild } from '@angular/core';
import {
  ITdDynamicElementConfig,
  TdDynamicElement,
  TdDynamicFormsComponent,
} from '@covalent/dynamic-forms';

@Component({
  selector: 'multi-select-demo',
  styleUrls: ['./multiselect.component.scss'],
  templateUrl: './multiselect.component.html',
})
export class MultiSelectDemoComponent {
  elements: ITdDynamicElementConfig[] = [
    {
      type: TdDynamicElement.Select,
      name: 'multifield',
      label: 'Multiselect',
      selections: ['A', 'B', 'C', 'D'],
      flex: 50,
    },
    {
      type: TdDynamicElement.Select,
      name: 'multifield2',
      label: 'Multiselect',
      selections: {
        multi: true,
        labels: ['A', 'B', 'C'],
      },
      flex: 50,
    },
    {
      type: TdDynamicElement.Select,
      name: 'multifield3',
      label: 'Multiselect',
      selections: {
        multi: false,
        labels: ['A', 'B', 'C'],
      },
      flex: 50,
    },
    {
      type: TdDynamicElement.Select,
      name: 'multifield4',
      label: 'Multiselect',
      selections: {
        labels: [
          {
            label: 'A',
            value: 10,
          },
          {
            label: 'B',
            value: 1,
          },
          {
            label: 'C',
            value: 2,
          },
          {
            label: 'D',
            value: 3,
          },
        ],
      },
      flex: 50,
    },
  ];

  @ViewChild(TdDynamicFormsComponent) public form: TdDynamicFormsComponent;

  public submit(): void {
    console.log(this.form.controls); // tslint:disable-line
    this.form.refresh();
  }
}

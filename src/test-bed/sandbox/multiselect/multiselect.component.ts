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
      label: 'No Multiselect',
      selections: ['A', 'B', 'C', 'D'],
      flex: 50,
    },
    {
      type: TdDynamicElement.Select,
      name: 'multifield2',
      label: 'Multiselect',
      multiple: true,
      selections: ['A', 'B', 'C'],
      flex: 50,
    },
    {
      type: TdDynamicElement.Select,
      name: 'multifield3',
      label: 'Multiselect Alt',
      multiple: true,
      selections: ['A', 'B', 'C'],
      default: ['A', 'C'],
      flex: 50,
    },
  ];

  @ViewChild(TdDynamicFormsComponent) public form: TdDynamicFormsComponent;

  public submit(): void {
    this.form.refresh();
  }
}

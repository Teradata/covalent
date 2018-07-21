import { Component, ViewChild } from '@angular/core';
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicFormsComponent } from '@covalent/dynamic-forms';

@Component({
  selector: 'multi-select-demo',
  styleUrls: [ './multiselect.component.scss' ],
  templateUrl: './multiselect.component.html',
})
export class MultiSelectDemoComponent {
  elements: ITdDynamicElementConfig[] = [
    {
      type: TdDynamicElement.Multiselect,
      name: 'multifield',
      label: 'Multiselect',
      selections: ['A', 'B', 'C'],
      flex: 50,
    },
  ];

  @ViewChild(TdDynamicFormsComponent) public form: TdDynamicFormsComponent;

  public submit(): void {
    console.log(this.form.value); // tslint:disable-line
  }
}

import { Component, TemplateRef } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ITdDynamicElementConfig } from '@covalent/dynamic-forms';

@Component({
  selector: 'td-dynamic-input-test',
  template: `
    <td-chips [items]="selections" [formControl]="control"></td-chips>
    <div *ngIf="errorMessageTemplate && control?.errors" class="tc-red-600" [style.font-size.%]="'70'">
      <ng-template
        [ngTemplateOutlet]="errorMessageTemplate"
        [ngTemplateOutletContext]="{ control: control, errors: control?.errors }"
      ></ng-template>
    </div>
  `,
})
export class TdTestDynamicComponent {
  control: FormControl;
  selections: string[] = [];
  errorMessageTemplate: TemplateRef<any>;
}

@Component({
  selector: 'dynamic-forms-demo-custom-elements',
  styleUrls: ['./dynamic-forms-demo-custom-elements.component.scss'],
  templateUrl: './dynamic-forms-demo-custom-elements.component.html',
})
export class DynamicFormsDemoCustomElementsComponent {
  customElements: ITdDynamicElementConfig[] = [
    {
      name: 'custom',
      type: TdTestDynamicComponent,
      default: ['list1'],
      selections: ['list1', 'list2', 'list3'],
      flex: 100,
      validators: [
        {
          validator: (control: AbstractControl) => {
            const isValid: boolean = control.value.length <= 2;
            return !isValid ? { invalidChips: true } : undefined;
          },
        },
      ],
    },
  ];
}

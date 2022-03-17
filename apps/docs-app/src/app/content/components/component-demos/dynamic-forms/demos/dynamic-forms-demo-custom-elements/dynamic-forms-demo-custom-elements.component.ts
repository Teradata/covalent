import { Component, TemplateRef } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ITdDynamicElementConfig } from '@covalent/dynamic-forms';

@Component({
  selector: 'td-dynamic-input-test',
  template: `
    <td-code-editor
      [style.height.px]="300"
      [formControl]="control"
      ngDefaultControl
    ></td-code-editor>
    <div *ngIf="errorMessageTemplate && control?.errors" class="tc-red-600">
      <ng-template
        [ngTemplateOutlet]="errorMessageTemplate"
        [ngTemplateOutletContext]="{
          control: control,
          errors: control?.errors
        }"
      ></ng-template>
    </div>
  `,
})
export class TdTestDynamicComponent {
  control!: FormControl;
  selections: string[] = [];
  errorMessageTemplate!: TemplateRef<any>;
  // This value will be set via the customConfig property
  placeholder!: string;
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
      default: 'SELECT * from dynamic.element',
      flex: 100,
      validators: [
        {
          validator: (control: AbstractControl) => {
            const isValid: boolean = control.value?.length;
            return !isValid ? { required: true } : null;
          },
        },
      ],
      customConfig: {
        // This is a property unique to the custom component
        // and will be applied on instantiation of the component
        placeholder: 'Lists',
      },
    },
  ];
}

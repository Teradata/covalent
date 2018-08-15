# td-dynamic-forms

## API Summary

#### Inputs

+ elements: ITdDynamicElementConfig[]
  + JS Object that will render the elements depending on its config.
  + [name] property is required.

#### Properties (Read only)

+ form: FormGroup
  + Getter property for dynamic [FormGroup].
+ valid: boolean
  + Getter property for [valid] of dynamic [FormGroup].
+ value: any
  + Getter property for [value] of dynamic [FormGroup].
+ errors: {[name: string]: any}
  + Getter property for [errors] of dynamic [FormGroup].
+ controls: {[key: string]: AbstractControl}
  + Getter property for [controls] of dynamic [FormGroup].

#### Methods

+ refresh: function
  + Refreshes the form and rerenders all validator/element modifications

## Setup

Import the [CovalentDynamicFormsModule] in your NgModule:

```typescript
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
@NgModule({
  imports: [
    CovalentDynamicFormsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

`td-dynamic-forms` element generates a form dynamically

Pass an array of javascript objects that implement [ITdDynamicElementConfig] with the information to be rendered to the [elements] attribute.

```typescript
export interface ITdDynamicElementConfig {
  label?: string;
  name: string;
  hint?: string;
  type: TdDynamicType | TdDynamicElement | Type<any>;
  required?: boolean;
  disabled?: boolean;
  min?: any;
  max?: any;
  minLength?: any;
  maxLength?: any;
  selections?: any[] | { value: any, label: string }[];
  multiple?: boolean;
  default?: any;
  flex?: number;
  validators?: ITdDynamicElementValidator[];
}
```

NOTE: For custom types, you need to implement a `[control]` property and use it in your underlying element.

Example for HTML usage:

```html
<td-dynamic-forms [elements]="elements">
  <ng-template let-element ngFor [ngForOf]="elements">
    <ng-template let-control="control" [tdDynamicFormsError]="element.name">
      <span *ngIf="control.touched || !control.pristine">
        <span *ngIf="control.hasError('required')">Required</span>
        <span *ngIf="control.hasError('min')">Min value: {{element.min}}</span>
        <span *ngIf="control.hasError('max')">Max value: {{element.max}}</span>
        <span *ngIf="control.hasError('minlength')">Min length value: {{element.minLength}}</span>
        <span *ngIf="control.hasError('maxlength')">Max length value: {{element.minLength}}</span>
      </span>
    </ng-template>
  </ng-template>
</td-dynamic-forms>
```

```typescript
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType } from '@covalent/dynamic-forms';
...
/* CUSTOM TYPE */
  template: `<label>{{label}}</label>
              <input [formControl]="control">
              <div *ngIf="errorMessageTemplate && control?.errors"
                  class="tc-red-600"
                  [style.font-size.%]="'70'">
                <ng-template
                  [ngTemplateOutlet]="errorMessageTemplate"
                  [ngTemplateOutletContext]="{control: control, errors: control?.errors}">
                </ng-template>
              </div>`,
})
export class DynamicCustomComponent {
  /* control property needed to properly bind the underlying element */
  control: FormControl;

  /* map any of the properties you passed in the config */
  label: string;

  /* map the error message template and use it anywhere you need to */
  errorMessageTemplate: TemplateRef<any>;
}
...
})
export class Demo {
  elements: ITdDynamicElementConfig[] = [{
    name: 'input',
    hint: 'hint',
    type: TdDynamicElement.Input,
    required: true,
  }, {
    name: 'textLength',
    label: 'Text Length',
    type: TdDynamicElement.Input,
    minLength: 4,
    maxLength: 12,
  }, {
    name: 'number',
    type: TdDynamicType.Number,
    min: 10,
    max: 80,
  }, {
    name: 'slider',
    label: 'Label',
    type: TdDynamicElement.Slider,
    required: true,
  }, {
    name: 'boolean',
    type: TdDynamicType.Boolean,
    default: false,
    disabled: true,
  }, {
    name: 'select',
    type: TdDynamicElement.Select,
    required: true,
    multiple: false,
    selections: ['A','B','C'],
    default: 'A',
  }, {
    name: 'file-input',
    label: 'Label',
    type: TdDynamicElement.FileInput,
  }, {
    name: 'datepicker',
    label: 'Date',
    type: TdDynamicElement.Datepicker,
  }, {
    name: 'custom',
    label: 'Custom',
    type: DynamicCustomComponent,
    required: true,
  }];
}
```

Note: To use the datepicker you need to provide an implementation of `DateAdapter`.. click [here] for more information on the material datepicker(https://material.angular.io/components/datepicker/overview#choosing-a-date-implementation-and-date-format-settings)

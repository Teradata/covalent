# td-dynamic-forms

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | 650--- |
| `elements?` | `ITdDynamicElementConfig[]` | JS Object that will render the elements depending on its config. [name] property is required.
| `form` | `get(): FormGroup` | Getter property for dynamic [FormGroup].
| `valid` | `get(): boolean` | Getter property for [valid] of dynamic [FormGroup].
| `value` | `get(): any` | Getter property for [value] of dynamic [FormGroup].
| `errors` | `get(): {[name: string]: any}` | Getter property for [errors] of dynamic [FormGroup].
| `controls` | `get(): {[key: string]: AbstractControl}` | Getter property for [controls] of dynamic [FormGroup].
| `refresh` | `function` |  Refreshes the form and rerenders all validator/element modifications.


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
  type: TdDynamicType | TdDynamicElement;
  required?: boolean;
  min?: any;
  max?: any;
  minLength?: string;
  maxLength?: string;
  selections?: any[];
  default?: any;
  validators?: ITdDynamicElementValidator[];
}
```

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
})
export class Demo {
  elements: ITdDynamicElementConfig[] = [{
    name: 'input',
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
  }, {
    name: 'select',
    type: TdDynamicElement.Select,
    required: true,
    selections: ['A','B','C']
    default: 'A',
  }, {
    name: 'file-input',
    label: 'Label',
    type: TdDynamicElement.FileInput,
  }];
}
```

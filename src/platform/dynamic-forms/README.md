# td-dynamic-forms

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `elements?` | `ITdDynamicElementConfig[]` | JS Object that will render the elements depending on its config. [name] property is required.
| `form` | `get(): FormGroup` | Getter property for dynamic [FormGroup].
| `valid` | `get(): boolean` | Getter property for [valid] of dynamic [FormGroup].
| `value` | `get(): any` | Getter property for [value] of dynamic [FormGroup].
| `errors` | `get(): {[name: string]: any}` | Getter property for [errors] of dynamic [FormGroup].
| `controls` | `get(): {[key: string]: AbstractControl}` | Getter property for [controls] of dynamic [FormGroup].


## Setup

Import the [CovalentDynamicFormsModule] using the forRoot() method in your NgModule:

```typescript
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
@NgModule({
  imports: [
    CovalentDynamicFormsModule.forRoot(),
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
  selections?: any[];
  default?: any;
}
```

Example for HTML usage:

```html
<td-dynamic-forms [elements]="elements">
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
  }];
}
```

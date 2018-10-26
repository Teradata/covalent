# td-tab-select

`td-tab-select` element generates a tab group component that behaves like a `mat-select`.

## API Summary

#### Inputs

+ value?: any
  + Sets the value of the component.
+ disabled?: boolean
  + Sets disabled state of the component.
+ disabledRipple?: boolean
  + Disables ripple effect on component.
+ stretchTabs?: boolean
  + Makes the tabs stretch to fit the parent container.
+ color?: ThemePalette
  + Color of the tab group.
+ backgroundColor?: ThemePalette
  + Background color of the tab group.

#### Events

+ valueChange: function(value: any)
  + Event that emits whenever the raw value of the select changes.
  + This is here primarily to facilitate the two-way binding for the `value` input.

# td-tab-option

`td-tab-option` element generates a tab component to which a value can be binded to.

## API Summary

#### Inputs

+ value?: any
  + Bind a value to the component.
+ disabled?: boolean
  + Sets disabled state of the component.

## Setup

Import the [CovalentTabSelectModule] in your NgModule:

```typescript
import { CovalentTabSelectModule } from '@covalent/core/tab-select';
@NgModule({
  imports: [
    CovalentTabSelectModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example without forms:

```html
<td-tab-select [(value)]="myValue">
  <td-tab-option [value]="1">Label 1</td-tab-option>
  <td-tab-option [value]="2">Label 2</td-tab-option>
  <td-tab-option [value]="3">Label 3</td-tab-option>
</td-tab-select>
```

Example with forms:

```html
<td-tab-select [(ngModel)]="myValue">
  <td-tab-option [value]="1">Label 1</td-tab-option>
  <td-tab-option [value]="2">Label 2</td-tab-option>
  <td-tab-option [value]="3">Label 3</td-tab-option>
</td-tab-select>
```

Example with all inputs/outputs: 

```html
<td-tab-select [value]="myValue"
                [backgroundColor]="'primary'"
                [color]="'accent'"
                [disabled]="false"
                [disabledRipple]="false"
                [stretchTabs]="true"
                (valueChange)="myValue = $event">
  <td-tab-option [value]="1" [disabled]="false">Label 1</td-tab-option>
  <td-tab-option [value]="2">Label 2</td-tab-option>
  <td-tab-option [value]="3" [disabled]="true">Label 3</td-tab-option>
</td-tab-select>
```

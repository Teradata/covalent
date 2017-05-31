# td-chips

`td-chips` element generates a list of strings or objects as chips.

Add the [items] attribute to enable the autocomplete with a list, and [requireMatch] to not allow custom values.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `color?` | `'primary' | 'accent' | 'warn'` | color for the input and focus state of the chips. Defaults to 'primary'
| `items?` | `any[]` | Renders the `md-autocomplete` with the provided list to display as options.
| `requireMatch?` | `boolean` | Blocks custom inputs and only allows selections from the autocomplete list.
| `stacked?` | `boolean` | Set stacked or horizontal chips depending on value. Defaults to false.
| `placeholder?` | `string` | Placeholder for the autocomplete input.
| `chipAddition` | `boolean` | Disables the ability to add chips. When setting readOnly as true, this will be overriden. Defaults to true.
| `chipRemoval` | `boolean` | Disables the ability to remove chips. If it doesn't exist chipRemoval defaults to true. readyOnly must be false for this option to work.
| `debounce` | `string` | Debounce timeout between keypresses. Defaults to 200.
| `add?` | `function` | Method to be executed when a chip is added. Sends chip value as event.
| `remove?` | `function` | Method to be executed when a chip is removed. Sends chip value as event.
| `inputChange?` | `function` | Method to be executed when the value in the autocomplete input changes. Sends string value as event.

## Setup

Import the [CovalentChipsModule] in your NgModule:

```typescript
import { CovalentChipsModule } from '@covalent/core';
@NgModule({
  imports: [
    CovalentChipsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example for HTML usage:

```html
<td-chips placeholder="placeholder"
          color="primary"
          [items]="items"
          [(ngModel)]="model"
          [readOnly]="readOnly" 
          [chipAddition]="chipAddition"
          [chipRemoval]="chipRemoval"
          (add)="addEvent($event)"
          (remove)="removeEvent($event)"
          (inputChange)="inputChange($event)"
          requireMatch
          stacked>
  <ng-template td-basic-chip let-chip="chip">
    {{chip}}
  </ng-template>
  <ng-template td-autocomplete-option let-option="option">
    {{option}}
  </ng-template>
  // anything below it
</td-chips>  
```

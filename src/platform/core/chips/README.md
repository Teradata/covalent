# td-chips

`td-chips` element generates a list of strings or objects as chips.

Add the [items] attribute to enable the autocomplete with a list, and [requireMatch] to not allow custom values.

Leverage the templates to create your own chip or contact chip.

## API Summary

#### Inputs

+ color?: 'primary' | 'accent' | 'warn'
  + color for the input and focus state of the chips. Defaults to 'primary'
+ items?: any[]
  + Renders the `mat-autocomplete` with the provided list to display as options.
+ requireMatch?: boolean
  + Blocks custom inputs and only allows selections from the autocomplete list.
+ stacked?: boolean
  + Set stacked or horizontal chips depending on value. Defaults to false.
+ inputPosition?: before | after
  + Set input position before or after the chips. Defaults to 'after'.
+ placeholder?: string
  + Placeholder for the autocomplete input.
+ required?: boolean
  + Mandates at least one chip to be available in the component. Appends * to the placeholder text.
  + It does not prevent the deletion of last chip but instead sets the input field to warn state
  + Defaults to false
+ disabled?: boolean
  + Sets disabled state and disabled addition/removal of chips.
+ chipAddition?: boolean
  + Enables the ability to add chips. When setting disabled as true, this will be overriden.
+ chipRemoval?: boolean
  + Enables the ability to remove chips. When setting disabled as true, this will be overriden.
+ debounce?: number
  + Debounce timeout between keypresses. Defaults to 200.
+ compareWith? function
  + Function used to check whether a chip value already exists.
  + Defaults to strict equality comparison ===

#### Events

+ add?: function
  + Method to be executed when a chip is added. Sends chip value as event.
+ remove?: function
  + Method to be executed when a chip is removed. Sends chip value as event.
+ chipBlur?: function
  + Method to be executed when a chip is blurred. Sends chip value as event.
+ chipFocus?: function
  + Method to be executed when a chip is focused. Sends chip value as event.
+ inputChange?: function
  + Method to be executed when the value in the autocomplete input changes. Sends string value as event.

## Setup

Import the [CovalentChipsModule] in your NgModule:

```typescript
import { CovalentChipsModule } from '@covalent/core/chips';
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
<td-chips placeholder="placeholder" required
          color="primary"
          [items]="items"
          [inputPosition]="'before'"
          [(ngModel)]="model"
          [disabled]="disabled"
          [chipAddition]="chipAddition"
          [chipRemoval]="chipRemoval"
          [compareWith]="compareWith"
          (add)="addEvent($event)"
          (remove)="removeEvent($event)"
          (chipBlur)="handleChipBlur($event)"
          (chipFocus)="handleChipFocus($event)"
          (inputChange)="inputChange($event)"
          requireMatch
          stacked>
  <ng-template td-chip let-chip="chip">
    <div td-chip-avatar>A</div> {{chip}}
  </ng-template>
  <ng-template td-autocomplete-option let-option="option">
    {{option}}
  </ng-template>
  // anything below it
</td-chips>
```

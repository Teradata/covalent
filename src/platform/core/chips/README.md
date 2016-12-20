# td-chips

`td-chips` element generates a list of strings as chips.

Add the [items] attribute to enable the autocomplete with a search list, and [requireMatch] to validated the input against the provided search list.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `items?` | `string[]` | Enables Autocompletion with the provided list of search strings.
| `readOnly` | `boolean` | Disables the chip input and removal.
| `requireMatch?` | `boolean` | Validates input against the provided search list before adding it to the model. If it doesnt exist, it cancels the event.
| `placeholder?` | `string` | Placeholder for the autocomplete input.
| `add?` | `function` | Method to be executed when string is added as chip through the autocomplete. Sends chip value as event.
| `remove?` | `function` | Method to be executed when string is removed as chip with the "remove" button. Sends chip value as event.

## Setup

Import the [CovalentChipsModule] using the forRoot() method in your NgModule:

```typescript
import { CovalentChipsModule } from '@covalent/core';
@NgModule({
  imports: [
    CovalentChipsModule.forRoot(), // or CovalentCoreModule.forRoot() (included inside of it)
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example for HTML usage:

 ```html
<td-chips placeholder="placeholder" [items]="items" [(ngModel)]="model" [readOnly]="readOnly" (add)="addEvent($event)" (remove)="removeEvent($event)" requireMatch>
</td-chips>  
 ```
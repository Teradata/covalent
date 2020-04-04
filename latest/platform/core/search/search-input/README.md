# TdSearchInputComponent: td-search-input

`td-search-input` element to generate a search input with its animated cancel button.

## API Summary

#### Inputs

+ debounce?: number
  + Debounce timeout between keypresses. Defaults to 400.
+ placeholder?: string
  + Placeholder for the underlying input component.
+ showUnderline?: boolean
  + Sets if the input underline should be visible. Defaults to 'false'.
+ clearIcon?: string
  + The icon used to clear the search input. Defaults to 'cancel' icon.
+ appearance?: MatFormFieldAppearance
  + Appearance style for the underlying input component.

#### Events

+ searchDebounce: function
  + Event emitted after the [debounce] timeout.
  + Emits a [string].
+ search: function
  + Event emitted after the key enter has been pressed.
  + Emits a [string].
+ clear: function
  + Event emitted after the clear icon has been clicked.
  + Emits [void].
+ blur: function
  + Event emitted after the blur event has been called in underlying input.
  + Emits [void].

#### Methods

+ focus: function
  + Method to focus to underlying input.
+ clearSearch: function
  + Method to clear the underlying input. 

## Setup

Import the [CovalentSearchModule] in your NgModule:

```typescript
import { CovalentSearchModule } from '@covalent/core/search';
@NgModule({
  imports: [
    CovalentSearchModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example for HTML usage:

```html
    <td-search-input appearance="legacy|standard|fill|outline" placeholder="Search here" [(ngModel)]="searchInputTerm" [showUnderline]="false|true" [debounce]="500" (searchDebounce)="searchInputTerm = $event" (search)="searchInputTerm = $event" (clear)="searchInputTerm = ''">
    </td-search-input>
```

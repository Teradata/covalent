# TdSearchBoxComponent: td-search-box

`td-search-box` element to generate a search box with animations.

## API Summary

#### Inputs

+ backIcon?: string
  + The icon used to close the search toggle, only shown when [alwaysVisible] is false. Defaults to 'search' icon.
+ searchIcon?: string
  + The icon used to open/focus the search toggle. Defaults to 'search' icon.
+ clearIcon?: string
  + The icon used to clear the search input. Defaults to 'cancel' icon.
+ showUnderline?: boolean
  + Sets if the input underline should be visible. Defaults to 'false'.
+ debounce?: number
  + Debounce timeout between keypresses. Defaults to 400.
+ alwaysVisible?: boolean
  + Sets if the input should always be visible. Defaults to 'false'.
+ placeholder?: string
  + Placeholder for the underlying input component.

#### Events

+ searchDebounce?: string
  + Event emitted after the [debounce] timeout.
  + Emits a [string].
+ search?: string
  + Event emitted after the key enter has been pressed.
  + Emits a [string].
+ clear?: string
  + Event emitted after the clear icon has been clicked.
  + Emits [void].
+ blur: function
  + Event emitted after the blur event has been called in underlying input.
  + Emits [void].

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
  <td-search-box backIcon="arrow_back" placeholder="Search here" [(ngModel)]="searchInputTerm" [showUnderline]="false|true" [debounce]="500" [alwaysVisible]="false|true" (searchDebounce)="searchInputTerm = $event" (search)="searchInputTerm = $event" (clear)="searchInputTerm = ''" (blur)="onBlurEvent()">
  </td-search-box>
```

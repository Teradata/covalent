# td-search-input

`td-search-input` element to generate a search input with its animated cancel button.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `debounce?` | `number` | Debounce timeout between keypresses. Defaults to 400.
| `placeholder?` | `string` | Placeholder for the underlying input component.
| `showUnderline?` | `boolean` | Sets if the input underline should be visible. Defaults to 'false'.
| `searchDebounce` | `function($event)` | Event emitted after the [debounce] timeout.
| `search` | `function($event)` | Event emitted after the key enter has been pressed.
| `clear?` | `function` | Event emitted after the clear icon has been clicked.

## Usage

Example for HTML usage:

 ```html
<td-search-input placeholder="Search here" [showUnderline]="false|true" [debounce]="500" (searchDebounce)="searchInputTerm = $event" (search)="searchInputTerm = $event" (clear)="searchInputTerm = ''">
</td-search-input>
 ```

# td-search-box

`td-search-box` element to generate a search box with animations.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `debounce?` | `number` | Debounce timeout between keypresses. Defaults to 400.
| `placeholder?` | `string` | Placeholder for the underlying input component.
| `backIcon?` | `string` | The icon used to close the search toggle, only shown when [alwaysVisible] is false. Defaults to 'search' icon.
| `showUnderline?` | `boolean` | Sets if the input underline should be visible. Defaults to 'false'.
| `alwaysVisible?` | `boolean` | Sets if the input should always be visible. Defaults to 'false'.
| `searchDebounce` | `function($event)` | Event emitted after the [debounce] timeout.
| `search` | `function($event)` | Event emitted after the key enter has been pressed.
| `clear?` | `function` | Event emitted after the clear icon has been clicked.

## Usage

Example for HTML usage:

 ```html
<td-search-box placeholder="Search here" [showUnderline]="false|true" [debounce]="500" [alwaysVisible]="false|true" (searchDebounce)="searchInputTerm = $event" (search)="searchInputTerm = $event" (clear)="searchInputTerm = ''">
</td-search-box>
 ```

## Setup

Import the [CovalentSearchModule] using the forRoot() method in your NgModule:

```typescript
import { CovalentSearchModule } from '@covalent/core';
@NgModule({
  imports: [
    CovalentSearchModule.forRoot(), // or CovalentCoreModule.forRoot() (included inside of it)
    ...
  ],
  ...
})
export class MyModule {}
```

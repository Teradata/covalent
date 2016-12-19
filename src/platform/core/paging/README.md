# td-paging-bar

`td-paging-bar` element generates a paging bar.

The `(change)` event throws an event with the following interface:

```typscript
export interface IPageChangeEvent {
  page: number;
  maxPage: number;
  pageSize: number;
  total: number;
  fromRow: number;
  toRow: number;
}
```

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `pageSizes?` | `number[]` | Array that populates page size menu. Defaults to [50, 100, 200, 500, 1000].
| `pageSize?` | `number` | Selected page size for the pagination. Defaults to first element of the [pageSizes] array.
| `firstLast?` | `boolean` | Shows or hides the first and last page buttons of the paging bar. Defaults to 'false'
| `pageSizeAll?` | `boolean` | Shows or hides the 'all' menu item in the page size menu. Defaults to 'false'
| `total` | `number` | Total rows for the pagination.
| `change` | `function($event: IPageChangeEvent)` | Method to be executed when page size changes or any button is clicked in the paging bar.
| `navigateToPage` | `function(page: number): boolean` | Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.

## Setup

Import the [CovalentPagingModule] using the forRoot() method in your NgModule:

```typescript
import { CovalentPagingModule } from '@covalent/core';
@NgModule({
  imports: [
    CovalentPagingModule.forRoot(), // or CovalentCoreModule.forRoot() (included inside of it)
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example for HTML usage:

 ```html
<td-paging-bar [firstLast]="true|false" [pageSizeAll]="true|false" [pageSizes]="[100,200,500,1000,2000]" [pageSize]="100" [total]="1345" (change)="change($event)">
</td-paging-bar>  
 ```

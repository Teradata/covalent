# td-paging-bar

`td-paging-bar` element generates a paging bar.

The `(change)` event throws an event with the following interface:

```typescript
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
| --- | --- | 650--- |
| `initialPage` | `number` | Sets starting page for the paging bar. Defaults to 1.
| `pageLinkCount?` | `number` | Amount of page navigation links for the paging bar. Defaults to 0.
| `firstLast?` | `boolean` | Shows or hides the first and last page buttons of the paging bar. Defaults to 'false'
| `pageSize?` | `number` | Selected page size for the pagination. Defaults to 50.
| `total` | `number` | Total rows for the pagination.
| `change` | `function($event: IPageChangeEvent)` | Method to be executed when page size changes or any button is clicked in the paging bar.
| `navigateToPage` | `function(page: number): boolean` | Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.

## Setup

Import the [CovalentPagingModule] in your NgModule:

```typescript
import { CovalentPagingModule } from '@covalent/core';
@NgModule({
  imports: [
    CovalentPagingModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example with page links for navigation:

```html
<td-paging-bar #pagingBar
                [pageLinkCount]="5"
                [pageSize]="100"
                [total]="1345"
                (change)="change($event)">
  {{pagingBar.range}} <span hide-xs>of {{pagingBar.total}}</span>
</td-paging-bar>
```

Example with material select for dynamic page sizes:

```html
<td-paging-bar #pagingBar
                [pageSize]="pageSize"
                [total]="1345"
                (change)="change($event)">
  <span hide-xs>Rows per page:</span>
  <mat-select [style.width.px]="50" [(ngModel)]="pageSize">
    <mat-option *ngFor="let size of [50,100,200,500,100]" [value]="size">
      {{size}}
    </mat-option>
  </mat-select>
  {{pagingBar.range}} <span hide-xs>of {{pagingBar.total}}</span>
</td-paging-bar>
```

Example with material input for navigation: 

```html
<td-paging-bar #pagingBar
                [pageSize]="100"
                [total]="1345"
                (change)="change($event)">
  <p hide-xs>Go to:</p>
  <mat-form-field>
    <input #goToInput
            matInput
            type="number"
            [min]="1"
            [max]="pagingBar.maxPage"
            [value]="pagingBar.page"
            (blur)="goToInput.value = pagingBar.page"
            (keyup.enter)="pagingBar.navigateToPage(goToInput.value); goToInput.value = pagingBar.page"/>
  </mat-form-field>
  {{pagingBar.range}} <span hide-xs>of {{pagingBar.total}}</span>
  
</td-paging-bar>
```

Example with dynamic page sizes, input and page links for navigation:

```html
<td-paging-bar #pagingBar
                [firstLast]="true"
                [pageLinkCount]="5"
                [pageSize]="pageSize"
                [total]="1345"
                (change)="change($event)">
  <span hide-xs>Rows per page:</span>
  <mat-select [style.width.px]="50" [(ngModel)]="pageSize">
    <mat-option *ngFor="let size of [50,100,200,500,100]" [value]="size">
      {{size}}
    </mat-option>
  </mat-select>
  <p hide-xs>Go to:</p>
  <mat-form-field>
    <input #goToInput
            matInput
            type="number"
            [min]="1"
            [max]="pagingBar.maxPage"
            [value]="pagingBar.page"
            (blur)="goToInput.value = pagingBar.page"
            (keyup.enter)="pagingBar.navigateToPage(goToInput.value); goToInput.value = pagingBar.page"/>
  </mat-form-field>
  {{pagingBar.range}} <span hide-xs>of {{pagingBar.total}}</span>
</td-paging-bar>
```

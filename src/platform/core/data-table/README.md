# td-data-table

`td-data-table` element generates a data driven table layout sorting events.

Use [tdDataTableTemplate] directive for template support which gives context access to [value], [row] and [column].

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `data` | `any[]` | Rows of data to be displayed.
| `columns` | `ITdDataTableColumn[]` | List of columns to be displayed.
| `selectable?` | `boolean` | Enables row selection events, hover and selected row states.
| `multiple?` | `boolean` | Enables multiple row selection. [selectable] needs to be enabled.
| `sortable?` | `boolean` | Enables sorting events, sort icons and active column states.
| `sortBy?` | `string` | Sets the active sort column. [sortable] needs to be enabled.
| `sortOrder?` | TdDataTableSortingOrder | Sets the sort order of the [sortBy] column. [sortable] needs to be enabled. Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
| `compareWith` | `function(row, model)` | Allows custom comparison between row and model to see if row is selected or not.
| `sortChange` | `function` | Event emitted when the column headers are clicked. [sortable] needs to be enabled. Emits an [ITdDataTableSortEvent] implemented object.
| `rowSelect` | `function` | Event emitted when a row is selected/deselected. [selectable] needs to be enabled. Emits an [ITdDataTableSelectEvent] implemented object.
| `selectAll` | `function` | Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled. Emits an [ITdDataTableSelectAllEvent] implemented object.
| `refresh` | `function` |  Refreshes data table and rerenders [data] and [columns]

## Setup

Import the [CovalentDataTableModule] in your NgModule:

```typescript
import { CovalentDataTableModule } from '@covalent/core';
@NgModule({
  imports: [
    CovalentDataTableModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example for HTML usage:

```html
<td-data-table
  [data]="data"
  [columns]="columns"
  [selectable]="true|false"
  [multiple]="true|false"
  [sortable]="true|false"
  [sortBy]="sortBy"
  [sortOrder]="'ASC'|'DESC'"
  [compareWith]="compareWith"
  (sortChange)="sortEvent($event)"
  (rowSelect)="selectEvent($event)"
  (selectAll)="selectAllEvent($event)">
  <ng-template tdDataTableTemplate="columnName" let-value="value" let-row="row" let-column="column">
    <div layout="row">
      <span flex>{{value}}</span> // or <span flex>{{row[column]}}</span>
      <md-icon>star</md-icon>
    </div>
  </ng-template>
</td-data-table>
```

```typescript
import { ITdDataTableColumn } from '@covalent/core';
...
})
export class Demo {
  private data: any[] = [
    { sku: '1452-2', item: 'Pork Chops', price: 32.11 },
    { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
  ];
  private columns: ITdDataTableColumn[] = [
    { name: 'sku', label: 'SKU #', tooltip: 'Stock Keeping Unit', sortable: true },
    { name: 'item', label: 'Item name' },
    { name: 'price', label 'Price (US$)', numeric: true, format: v => v.toFixed(2) },
  ];
  compareWith(row: any: model: any): boolean {
    return row.id === model.id; // or any property you want to compare by.
  }
}
```

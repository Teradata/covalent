# td-data-table

`td-data-table` element generates a data driven table layout sorting events.

Use [tdDataTableTemplate] directive for template support which gives context access to [value], [row] and [column].

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | 650--- |
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

The `ITdDataTableColumn` interface for columns has the following contract:

```typescript
export interface ITdDataTableColumn {
  name: string;
  label: string;
  tooltip?: string; // used to add a tooltip into the column header
  numeric?: boolean; // used to right align elements if they are numeric
  format?: (value: any) => any; // used to format the cell values
  nested?: boolean; // when this is true, the `.` characters will be taken as key separators for nested values
  sortable?: boolean; // used to make a particular column sortable
  hidden?: boolean; // used to hide the column in the data table on the fly
  filter?: boolean;
  width?: ITdDataTableColumnWidth | number; // used to configure the widths of the columns, if omitted it will fill the rest of the space
}

export interface ITdDataTableColumnWidth {
  min?: number;
  max?: number;
}
```

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
      <mat-icon>star</mat-icon>
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
    { name: 'item', label: 'Item name', width: 200 },
    { name: 'price', label 'Price (US$)', numeric: true, format: v => v.toFixed(2), width: { min: 100, max: 400 } },
  ];
  compareWith(row: any: model: any): boolean {
    return row.id === model.id; // or any property you want to compare by.
  }
}
```

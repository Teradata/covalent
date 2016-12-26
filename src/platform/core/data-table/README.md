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
| `sortChange` | `function` | Event emitted when the column headers are clicked. [sortable] needs to be enabled. Emits an [ITdDataTableSortEvent] implemented object.
| `rowSelect` | `function` | Event emitted when a row is selected/deselected. [selectable] needs to be enabled. Emits an [ITdDataTableSelectEvent] implemented object.
| `selectAll` | `function` | Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled. Emits an [ITdDataTableSelectAllEvent] implemented object.
| `refresh` | `function` |  Refreshes data table and rerenders [data] and [columns]

## Setup

Import the [CovalentDataTableModule] using the forRoot() method in your NgModule:

```typescript
import { CovalentDataTableModule } from '@covalent/core';
@NgModule({
  imports: [
    CovalentDataTableModule.forRoot(), // or CovalentCoreModule.forRoot() (included inside of it)
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
  (sortChange)="sortEvent($event)"
  (rowSelect)="selectEvent($event)"
  (selectAll)="selectAllEvent($event)">
  <template tdDataTableTemplate="columnName" let-value="value" let-row="row" let-column="column">
    <div layout="row">
      <span flex>{{value}}</span> // or <span flex>{{row[column]}}</span>
      <md-icon>star</md-icon>
    </div>
  </template>
</td-data-table>
 ```

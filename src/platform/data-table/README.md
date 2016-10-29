# td-data-table

`td-data-table` element generates a data driven table layout sorting events.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `data` | `any[]` | Rows of data to be displayed.
| `columns` | `ITdDataTableColumn[]` | List of columns to be displayed.
| `rowSelection?` | `boolean` | Adds a checkbox column and allows the user to select rows.
| `multiple?` | `boolean` | Toggles between multiple or single row selection.
| `sortable?` | `boolean` | Enables sort by column and (sortChange) events.
| `sortBy?` | `string` | Name of the column to be shown as active sort column.
| `sortOrder?` | `'ASC' | 'DESC'` | Sorting order for active [sortBy] column. Defaults to 'ASC'
| `sortChange` | `function` | Event emitted when the column headers are clicked. [sortable] needs to be enabled. Emits an [ITdDataTableSortEvent] implemented object.

## Setup

Import the [CovalentDataTableModule] using the forRoot() method in your NgModule:

```typescript
import { CovalentDataTableModule } from '@covalent/data-table';
@NgModule({
  imports: [
    CovalentDataTableModule.forRoot(),
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
  [rowSelection]="true|false"
  [multiple]="true|false"
  [sortable]="true|false"
  [sortBy]="sortBy"
  [sortOrder]="'ASC'|'DESC'"
  (sortChange)="sortEvent($event)">
</td-data-table>
 ```

# td-data-table

`td-data-table` element generates a data driven table layout with search, sorting and pagination.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `data` | `any[]` | Rows of data to be displayed
| `columns` | `ITdDataTableColumn[]` | List of columns to be displayed
| `title?` | `string` | If present will display a title before the table
| `pagination?` | `boolean` | Enables pagination
| `pageSize?` | `number` | Number of rows per page, when omitted defaults to 10
| `sorting?` | `boolean` | Enables sorting by column
| `sortBy?` | `string` | Name of the column to use for sorting
| `sortOrder?` | `'ASC' | 'DESC'` | Sorting order - ascending or descending
| `search?` | `boolean` | Enables search
| `rowSelection?` | `boolean` | Adds a checkbox column to allow user to select rows
| `multiple?` | `boolean` | Toggles between multiple or single row selection

## Setup

Import the [CovalentDataTableModule] using the forRoot() method in your NgModule:

```typescript
import { CovalentDataTableModule } from '@covalent/chips';
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
  sortBy="age"
  sortOrder="DESC"
  pagination="true"
  pageSize="5"
  search="true">
</td-data-table>
 ```

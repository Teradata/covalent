# td-data-table

`td-data-table` element generates a data driven table layout with search, sorting and pagination.

## API Summary

Table Properties:

| Name | Type | Description |
| --- | --- | --- |
| `title?` | `string` | If defined, will display a title before the table
| `data` | `any[]` | Rows of data to be displayed
| `columns` | `ITdDataTableColumn[]` | List of columns to be displayed
| `pagination?` | `boolean` | Enables pagination, default false
| `pageSize?` | `number` | Number of rows per page, default 10
| `rowSelection?` | `boolean` | Adds a checkbox column to allow user to select rows, default false
| `multiSelect?` | `boolean` | Toggles between multiple or single row selection, default true
| `search?` | `boolean` | Enables search, default false
| `initialSortColumn?` | `string` | Name of sortable column for initial ordering of table, default is first sortable column defined
| `sortOrder?` | `'ASC'` | `'DESC'` | Initial sorting order - ascending or descending


Column Properties

| Name | Type | Description |
|--- | --- | --- |
| `name` | `string` | Field name in data row
| `label` | `string` | Label to display in column header
| `tooltip?` | `string` | Tooltip text to display on mouse hover
| `numeric?` | `boolean` | Indicates if data to be displayed is numeric, data is formatted if sorting, default false
| `format?` | `{ (value: any): any }` | Format to be applied to the column
| `sortable?` | `boolean` | Indicates table is sortable by this column, default false

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
export class MyModule {
  columns: any[] = [
    { name: 'name',  label: 'Dessert (100g serving)', tooltip: 'Common food name', sortable: true },
    { name: 'type', label: 'Type', sortable: true },
    { name: 'calories', label: 'Calories', numeric: true, format: NUMBER_FORMAT, sortable: true },
    { name: 'fat', label: 'Fat (g)', numeric: true, format: DECIMAL_FORMAT },
    { name: 'carbs', label: 'Carbs (g)', numeric: true, format: NUMBER_FORMAT },
    { name: 'protein', label: 'Protein (g)', numeric: true, format: DECIMAL_FORMAT },
    { name: 'sodium', label: 'Sodium (mg)', numeric: true, format: NUMBER_FORMAT },
    { name: 'calcium', label: 'Calcium (%)', numeric: true, format: NUMBER_FORMAT },
    { name: 'iron', label: 'Iron (%)', numeric: true, format: NUMBER_FORMAT },
  ];

  data: any[] = [
      {
        'name': 'Frozen yogurt',
        'type': 'Ice cream',
        'calories': { 'value': 159.0 },
        'fat': { 'value': 6.0 },
        'carbs': { 'value': 24.0 },
        'protein': { 'value': 4.0 },
        'sodium': { 'value': 87.0 },
        'calcium': { 'value': 14.0 },
        'iron': { 'value': 1.0 },
      }, {
        'name': 'Ice cream sandwich',
        'type': 'Ice cream',
        'calories': { 'value': 237.0 },
        'fat': { 'value': 9.0 },
        'carbs': { 'value': 37.0 },
        'protein': { 'value': 4.3 },
        'sodium': { 'value': 129.0 },
        'calcium': { 'value': 8.0 },
        'iron': { 'value': 1.0 },
      }, {
        'name': 'Eclair',
        'type': 'Pastry',
        'calories': { 'value':  262.0 },
        'fat': { 'value': 16.0 },
        'carbs': { 'value': 24.0 },
        'protein': { 'value':  6.0 },
        'sodium': { 'value': 337.0 },
        'calcium': { 'value':  6.0 },
        'iron': { 'value': 7.0 },
      }];
}
```

## Usage

Example for HTML usage:

 ```html
<td-data-table
  [data]="data"
  [columns]="columns"
  pagination="true"
  pageSize="5"
  rowSelection="true"          
  multiSelect="false"          
  search="true"
  initialSortColumn="calories"
  sortOrder="ASC">
</td-data-table>
 ```

# td-data-table

`td-data-table` element generates a data driven table layout with search, sorting and pagination.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `data` | `any[]` | Enables Autocompletion with the provided list of search strings.
| `columns` | `ITdDataTableColumn[]` | Disables the chip input and removal.
| `title?` | `string` | Validates input against the provided search list before adding it to the model. If it doesnt exist, it cancels the event.
| `pagination?` | `boolean` | Placeholder for the autocomplete input.
| `pageSize?` | `number` | Method to be executed when string is added as chip through the autocomplete. Sends chip value as event.
| `sorting?` | `boolean` | Method to be executed when string is removed as chip with the "remove" button. Sends chip value as event.
| `sortBy?` | `string` | Method to be executed when string is removed as chip with the "remove" button. Sends chip value as event.
| `sortOrder?` | `'ASC' | 'DESC'` | Method to be executed when string is removed as chip with the "remove" button. Sends chip value as event.
| `search?` | `boolean` | Method to be executed when string is removed as chip with the "remove" button. Sends chip value as event.
| `rowSelection?` | `boolean` | Method to be executed when string is removed as chip with the "remove" button. Sends chip value as event.
| `multiple?` | `boolean` | Method to be executed when string is removed as chip with the "remove" button. Sends chip value as event.

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
  search="true"
></td-data-table>
 ```

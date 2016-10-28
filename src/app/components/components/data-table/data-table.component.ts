import { Component } from '@angular/core';

import { TdDataTableSortingOrder } from '../../../../platform/data-table';

const NUMBER_FORMAT: any = (v: {value: number}) => v.value;
const DECIMAL_FORMAT: any = (v: {value: number}) => v.value.toFixed(2);

@Component({
  selector: 'data-table-demo',
  styleUrls: ['data-table.component.scss'],
  templateUrl: 'data-table.component.html',
})
export class DataTableDemoComponent {

  dataTableAttrs: Object[] = [{
    description: `Rows of data to be displayed`,
    name: 'data',
    type: 'any[]',
  }, {
    description: `List of columns to be displayed`,
    name: 'columns?',
    type: 'ITdDataTableColumn[]',
  }, {
    description: `If present will display a title before the table`,
    name: 'title?',
    type: 'string',
  }, {
    description: `Enables pagination`,
    name: 'pagination?',
    type: 'boolean',
  }, {
    description: `Number of rows per page, when omitted defaults to 10`,
    name: 'pageSize?',
    type: 'number',
  }, {
    description: `Enables sorting by column`,
    name: 'sorting?',
    type: 'boolean',
  }, {
    description: `Name of the column to use for sorting`,
    name: 'sortBy?',
    type: 'string',
  }, {
    description: `Sorting order - ascending or descending`,
    name: 'sortOrder?',
    type: `'ASC' | 'DESC'`,
  }, {
    description: `Enables search`,
    name: 'search?',
    type: `boolean`,
  }, {
    description: `Adds a checkbox column to allow user to select rows`,
    name: 'rowSelection?',
    type: 'boolean',
  }, {
    description: `Toggles between multiple or single row selection`,
    name: 'multiple?',
    type: 'boolean',
  }];

  columns: any[] = [
    { name: 'name',  label: 'Dessert (100g serving)' },
    { name: 'type', label: 'Type' },
    { name: 'icons', label: 'Icon'},
    { name: 'calories', label: 'Calories', numeric: true, format: NUMBER_FORMAT },
    { name: 'fat', label: 'Fat (g)', numeric: true, format: DECIMAL_FORMAT },
    { name: 'carbs', label: 'Carbs (g)', numeric: true, format: NUMBER_FORMAT },
    { name: 'protein', label: 'Protein (g)', numeric: true, format: DECIMAL_FORMAT },
    { name: 'sodium', label: 'Sodium (mg)', numeric: true, format: NUMBER_FORMAT },
    { name: 'calcium', label: 'Calcium (%)', numeric: true, format: NUMBER_FORMAT },
    { name: 'iron', label: 'Iron (%)', numeric: true, format: NUMBER_FORMAT },
    { name: 'actions', label: 'Actions'},
  ];

  sorting: boolean = true;
  pagination: boolean = true;
  pageSize: number = 5;

  data: any[] = [
      {
        'name': 'Frozen yogurt',
        'icons': 'add',
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
        'icons': 'cancel',
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
        'icons': 'person',
        'type': 'Pastry',
        'calories': { 'value':  262.0 },
        'fat': { 'value': 16.0 },
        'carbs': { 'value': 24.0 },
        'protein': { 'value':  6.0 },
        'sodium': { 'value': 337.0 },
        'calcium': { 'value':  6.0 },
        'iron': { 'value': 7.0 },
      }, {
        'name': 'Cupcake',
        'icons': 'person',
        'type': 'Pastry',
        'calories': { 'value':  305.0 },
        'fat': { 'value': 3.7 },
        'carbs': { 'value': 67.0 },
        'protein': { 'value': 4.3 },
        'sodium': { 'value': 413.0 },
        'calcium': { 'value': 3.0 },
        'iron': { 'value': 8.0 },
      }, {
        'name': 'Jelly bean',
        'icons': 'people',
        'type': 'Candy',
        'calories': { 'value':  375.0 },
        'fat': { 'value': 0.0 },
        'carbs': { 'value': 94.0 },
        'protein': { 'value': 0.0 },
        'sodium': { 'value': 50.0 },
        'calcium': { 'value': 0.0 },
        'iron': { 'value': 0.0 },
      }, {
        'name': 'Lollipop',
        'icons': 'people',
        'type': 'Candy',
        'calories': { 'value': 392.0 },
        'fat': { 'value': 0.2 },
        'carbs': { 'value': 98.0 },
        'protein': { 'value': 0.0 },
        'sodium': { 'value': 38.0 },
        'calcium': { 'value': 0.0 },
        'iron': { 'value': 2.0 },
      }, {
        'name': 'Honeycomb',
        'icons': 'add',
        'type': 'Other',
        'calories': { 'value': 408.0 },
        'fat': { 'value': 3.2 },
        'carbs': { 'value': 87.0 },
        'protein': { 'value': 6.5 },
        'sodium': { 'value': 562.0 },
        'calcium': { 'value': 0.0 },
        'iron': { 'value': 45.0 },
      }, {
        'name': 'Donut',
        'icons': 'timer',
        'type': 'Pastry',
        'calories': { 'value': 452.0 },
        'fat': { 'value': 25.0 },
        'carbs': { 'value': 51.0 },
        'protein': { 'value': 4.9 },
        'sodium': { 'value': 326.0 },
        'calcium': { 'value': 2.0 },
        'iron': { 'value': 22.0 },
      }, {
        'name': 'KitKat',
        'icons': 'timer',
        'type': 'Candy',
        'calories': { 'value': 518.0 },
        'fat': { 'value': 26.0 },
        'carbs': { 'value': 65.0 },
        'protein': { 'value': 7.0 },
        'sodium': { 'value': 54.0 },
        'calcium': { 'value': 12.0 },
        'iron': { 'value': 6.0 },
      },
    ];

  sortBy: string = 'name';
  sortOrder: string = 'ASC';

  rowSelection: boolean = false;
  multiple: boolean = true;

  toggleRowSelection(): void {
    this.rowSelection = !this.rowSelection;
  }

  toggleRowSelectionMultiple(): void {
    this.multiple = !this.multiple;
  }

  toggleSorting(): void {
    this.sorting = !this.sorting;
  }

  toggleSortBy(): void {
    const columns: any[] = this.columns.map((c: any) => c.name);
    const idx: number = columns.indexOf(this.sortBy);
    if (idx < columns.length - 1) {
      this.sortBy = columns[idx + 1];
    } else {
      this.sortBy = columns[0];
    }
  }

  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'ASC' ? 'DESC' : 'ASC';
  }

  areTooltipsOn(): boolean {
    return this.columns[0].hasOwnProperty('tooltip');
  }

  toggleTooltips(): void {
    if (this.columns[0].tooltip) {
      this.columns.forEach((c: any) => delete c.tooltip);
    } else {
      this.columns.forEach((c: any) => c.tooltip = `This is ${c.label}!`);
    }
  }

  togglePagination(): void {
    this.pagination = !this.pagination;
  }

  togglePageSize(): void {
    this.pageSize += 5;
    if (this.pageSize > 15) {
      this.pageSize = 5;
    }
  }

  sortChanged(changes: any): void {
    const { column, order }: any = changes;

    this.sortBy = column.name;
    this.sortOrder = order === TdDataTableSortingOrder.Ascending ? 'ASC' : 'DESC';
  }
}

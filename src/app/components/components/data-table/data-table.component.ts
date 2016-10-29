import { Component, OnInit } from '@angular/core';

import { TdDataTableSortingOrder, TdDataTableService, ITdDataTableSortEvent } from '../../../../platform/data-table';
import { IPageChangeEvent } from '../../../../platform/paging';

const NUMBER_FORMAT: any = (v: number) => v;
const DECIMAL_FORMAT: any = (v: number) => v.toFixed(2);

@Component({
  selector: 'data-table-demo',
  styleUrls: ['data-table.component.scss'],
  templateUrl: 'data-table.component.html',
})
export class DataTableDemoComponent implements OnInit {

  dataTableAttrs: Object[] = [{
    description: `Rows of data to be displayed`,
    name: 'data',
    type: 'any[]',
  }, {
    description: `List of columns to be displayed`,
    name: 'columns?',
    type: 'ITdDataTableColumn[]',
  }, {
    description: `Adds a checkbox column and allows the user to select rows.`,
    name: 'rowSelection?',
    type: 'boolean',
  }, {
    description: `Toggles between multiple or single row selection`,
    name: 'multiple?',
    type: 'boolean',
  }, {
    description: `Enables sort by column and (sortChange) events.`,
    name: 'sortable?',
    type: 'boolean',
  }, {
    description: `Name of the column to be shown as active sort column.`,
    name: 'sortBy?',
    type: 'string',
  }, {
    description: `Sorting order for active [sortBy] column. Defaults to 'ASC'`,
    name: 'sortOrder?',
    type: `'ASC' | 'DESC'`,
  }, {
    description: `Event emitted when the column headers are clicked. [sortable] needs to be enabled.
                  Emits an [ITdDataTableSortEvent] implemented object.`,
    name: 'sortChange',
    type: `function()`,
  }];

  columns: any[] = [
    { name: 'name',  label: 'Dessert (100g serving)' },
    { name: 'type', label: 'Type' },
    { name: 'calories', label: 'Calories', numeric: true, format: NUMBER_FORMAT },
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
        'calories': 159.0,
        'fat': 6.0,
        'carbs': 24.0,
        'protein': 4.0,
        'sodium': 87.0,
        'calcium': 14.0,
        'iron': 1.0,
      }, {
        'name': 'Ice cream sandwich',
        'type': 'Ice cream',
        'calories': 237.0,
        'fat': 9.0,
        'carbs': 37.0,
        'protein': 4.3,
        'sodium': 129.0,
        'calcium': 8.0,
        'iron': 1.0,
      }, {
        'name': 'Eclair',
        'type': 'Pastry',
        'calories':  262.0,
        'fat': 16.0,
        'carbs': 24.0,
        'protein':  6.0,
        'sodium': 337.0,
        'calcium':  6.0,
        'iron': 7.0,
      }, {
        'name': 'Cupcake',
        'type': 'Pastry',
        'calories':  305.0,
        'fat': 3.7,
        'carbs': 67.0,
        'protein': 4.3,
        'sodium': 413.0,
        'calcium': 3.0,
        'iron': 8.0,
      }, {
        'name': 'Jelly bean',
        'type': 'Candy',
        'calories':  375.0,
        'fat': 0.0,
        'carbs': 94.0,
        'protein': 0.0,
        'sodium': 50.0,
        'calcium': 0.0,
        'iron': 0.0,
      }, {
        'name': 'Lollipop',
        'type': 'Candy',
        'calories': 392.0,
        'fat': 0.2,
        'carbs': 98.0,
        'protein': 0.0,
        'sodium': 38.0,
        'calcium': 0.0,
        'iron': 2.0,
      }, {
        'name': 'Honeycomb',
        'type': 'Other',
        'calories': 408.0,
        'fat': 3.2,
        'carbs': 87.0,
        'protein': 6.5,
        'sodium': 562.0,
        'calcium': 0.0,
        'iron': 45.0,
      }, {
        'name': 'Donut',
        'type': 'Pastry',
        'calories': 452.0,
        'fat': 25.0,
        'carbs': 51.0,
        'protein': 4.9,
        'sodium': 326.0,
        'calcium': 2.0,
        'iron': 22.0,
      }, {
        'name': 'KitKat',
        'type': 'Candy',
        'calories': 518.0,
        'fat': 26.0,
        'carbs': 65.0,
        'protein': 7.0,
        'sodium': 54.0,
        'calcium': 12.0,
        'iron': 6.0,
      },
    ];
  sortable: boolean = true;
  rowSelection: boolean = false;
  multiple: boolean = true;

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;

  searchTerm: string = '';
  fromRow: number = 1;
  toRow: number = 5;
  sortBy: string = 'name';
  sortOrder: string = 'DESC';

  constructor(private _dataTableService: TdDataTableService) {}

  ngOnInit(): void {
    this.filter();
  }

  sort(sortEvent: ITdDataTableSortEvent): void {
    this.sortBy = sortEvent.column.name;
    this.sortOrder = sortEvent.order === TdDataTableSortingOrder.Ascending ? 'ASC' : 'DESC';
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.toRow = pagingEvent.toRow;
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.data;
    newData = this._dataTableService.filterData(newData, this.searchTerm, true);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder === 'ASC' ? 'ASC' : 'DESC');
    newData = this._dataTableService.pageData(newData, this.fromRow, this.toRow);
    this.filteredData = newData;
  }

  toggleRowSelection(): void {
    this.rowSelection = !this.rowSelection;
  }

  toggleRowSelectionMultiple(): void {
    this.multiple = !this.multiple;
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
}

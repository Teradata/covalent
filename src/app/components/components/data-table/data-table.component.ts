import { Component, OnInit, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

import {
  TdDataTableSortingOrder, TdDataTableService, TdDataTableComponent,
  ITdDataTableSortChangeEvent, ITdDataTableColumn
} from '../../../../platform/core';
import { IPageChangeEvent } from '../../../../platform/core';
import { TdDialogService } from '../../../../platform/core';

const NUMBER_FORMAT: (v: any) => any = (v: number) => v;
const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);

@Component({
  selector: 'data-table-demo',
  styleUrls: ['./data-table.component.scss'],
  templateUrl: './data-table.component.html',
  animations: [slideInDownAnimation],
})
export class DataTableDemoComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  cellAttrs: Object[] = [{
    description: `Makes cell follow the numeric data-table specs. Defaults to 'false'`,
    name: 'numeric',
    type: `boolean`,
  }];

  columnAttrs: Object[] = [{
    description: `Sets unique column [name] for [sortable] events.`,
    name: 'name',
    type: `string`,
  }, {
    description: `Enables sorting events, sort icons and active column states. Defaults to 'false'`,
    name: 'sortable',
    type: `boolean`,
  }, {
    description: `Sets the sort order of column. Defaults to 'ASC' or TdDataTableSortingOrder.Ascending`,
    name: 'sortOrder',
    type: `['ASC' | 'DESC'] or TdDataTableSortingOrder`,
  }, {
    description: `Whether the column should be hidden or not. Defaults to 'false'`,
    name: 'hidden',
    type: `boolean`,
  }, {
    description: `When set to false this column will be excluded from searches using the filterData method.`,
    name: 'filter?',
    type: 'boolean',
  }, {
    description: `Sets column to active state when 'true'. Defaults to 'false'`,
    name: 'active',
    type: `boolean`,
  }, {
    description: `Makes cell follow the numeric data-table specs. Defaults to 'false'`,
    name: 'numeric',
    type: `boolean`,
  }, {
    description: `Event emitted when the column headers are clicked. [sortable] needs to be enabled.
                  Emits an [ITdDataTableSortChangeEvent] implemented object.`,
    name: 'sortChange',
    type: `function`,
  }];

  serviceAttrs: Object[] = [{
    description: `Searches [data] parameter for [searchTerm] matches and returns a new array with them. 
                  Any column names passed in with [nonSearchAbleColumns] will be excluded in the search.`,
    name: 'filterData',
    type: `function(data: any[], searchTerm: string, ignoreCase: boolean, nonSearchAbleColumns: string[])`,
  }, {
    description: `Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.`,
    name: 'sortData',
    type: `function(data: any[], sortBy: string, sortOrder: TdDataTableSortingOrder): any[]`,
  }, {
    description: `Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].`,
    name: 'pageData',
    type: `function(data: any[], fromRow: number, toRow: number): any[]`,
  }];

  columns: ITdDataTableColumn[] = [
    { name: 'name', label: 'Dessert (100g serving)', sortable: true },
    { name: 'type', label: 'Type', filter: true },
    { name: 'calories', label: 'Calories', numeric: true, format: NUMBER_FORMAT, sortable: true, hidden: false },
    { name: 'fat', label: 'Fat (g)', numeric: true, format: DECIMAL_FORMAT, sortable: true },
    { name: 'carbs', label: 'Carbs (g)', numeric: true, format: NUMBER_FORMAT },
    { name: 'protein', label: 'Protein (g)', numeric: true, format: DECIMAL_FORMAT },
    { name: 'sodium', label: 'Sodium (mg)', numeric: true, format: NUMBER_FORMAT },
    { name: 'calcium', label: 'Calcium (%)', numeric: true, format: NUMBER_FORMAT },
    { name: 'iron', label: 'Iron (%)', numeric: true, format: NUMBER_FORMAT },
  ];

  data: any[] = [
    {
      'id': 1,
      'name': 'Frozen yogurt',
      'type': 'Ice cream',
      'calories': 159.0,
      'fat': 6.0,
      'carbs': 24.0,
      'protein': 4.0,
      'sodium': 87.0,
      'calcium': 14.0,
      'iron': 1.0,
      'comments': 'I love froyo!',
    }, {
      'id': 2,
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
      'id': 3,
      'name': 'Eclair',
      'type': 'Pastry',
      'calories': 262.0,
      'fat': 16.0,
      'carbs': 24.0,
      'protein': 6.0,
      'sodium': 337.0,
      'calcium': 6.0,
      'iron': 7.0,
    }, {
      'id': 4,
      'name': 'Cupcake',
      'type': 'Pastry',
      'calories': 305.0,
      'fat': 3.7,
      'carbs': 67.0,
      'protein': 4.3,
      'sodium': 413.0,
      'calcium': 3.0,
      'iron': 8.0,
    }, {
      'id': 5,
      'name': 'Jelly bean',
      'type': 'Candy',
      'calories': 375.0,
      'fat': 0.0,
      'carbs': 94.0,
      'protein': 0.0,
      'sodium': 50.0,
      'calcium': 0.0,
      'iron': 0.0,
    }, {
      'id': 6,
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
      'id': 7,
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
      'id': 8,
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
      'id': 9,
      'name': 'KitKat',
      'type': 'Candy',
      'calories': 518.0,
      'fat': 26.0,
      'carbs': 65.0,
      'protein': 7.0,
      'sodium': 54.0,
      'calcium': 12.0,
      'iron': 6.0,
    }, {
      'id': 10,
      'name': 'Chocolate',
      'type': 'Candy',
      'calories': 518.0,
      'fat': 26.0,
      'carbs': 65.0,
      'protein': 7.0,
      'sodium': 54.0,
      'calcium': 12.0,
      'iron': 6.0,
    }, {
      'id': 11,
      'name': 'Chamoy',
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

  nestedColumnsExample: ITdDataTableColumn[] = [
    { name: 'value', label: 'Single Value', sortable: true },
    { name: 'score', label: 'Sort on second Level', sortable: true, nestedSortBy: 'score.nested.value' },
    { name: 'predicted', label: 'One Level with multiple properies/keys', sortable: true, nestedSortBy: 'predicted.value' },
    { name: 'predicted.nested.nested', label: 'Three Levels', sortable: true, nestedSortBy: 'predicted.nested.nested.value' },
  ];

  nestedDataExample = [
    { "value": 78,
      'score': {
        'value': 8,
        'level': 'One level',
        'nested': {
          'value': 2,
          'level': 'Two levels',
          'nested': {
            'value' : 88,
            'level' : 'Three levels'
          }
        }
      },
      'predicted': {
        'value': 10,
        'level': 'One Level',
        'nested': {
          'value': 8,
          'level': 'Two Levels',
        'nested':
        {
          'value': 10,
          'level': 'Three levels',
          'nested': {
            'value' : 2,
            'level' : 'Four levels'
          }
        }}
      }
    },
    { "value": 34,
      'score': {
        'value': 23,
        'level': 'One level',
        'nested': {
          'value': 1,
          'level': 'Two levels',
          'nested': {
            'value' : 3,
            'level': 'Three levels'
          }
        }
      },
      'predicted': {
        'value': 45,
        'level': 'One Level',
        'nested': {
          'value': 4,
          'level': 'Two levels',
        'nested':
        {
          'value': 6,
          'level': 'Three levels',
          'nested': {
            'value' : 75,
            'level' : 'Four levels'
          }
        }}
      }
    },
        {
      "value": 55,
      'score': {
        'value': 10,
        'level': 'One level',
        'nested': {
          'value': 4,
          'level': 'Two levels',
            'nested': {
            'value' : 20,
            'level': 'Three levels'
          }
        }
      },
      'predicted': {
        'value': 22,
        'level': 'One Level',
        'nested': {
          'value': 13,
          'level': 'Two Levels',
        'nested':
        {
          'value': 96,
          'level': 'Three levels',
          'nested': {
            'value' : 14,
            'level' : 'Four levels'
          }
        }}
      }
    },
    {
      "value": 34,
      'score': {
        'value': 6,
        'level': 'One level',
        'nested': {
          'value': 89,
          'level': 'Two levels',
            'nested': {
            'value' : 44,
            'level': 'Three levels'
          }
        }
      },
      'predicted': {
        'value': 12,
        'level': 'One Level',
        'nested': {
          'value': 3,
          'level': 'Two Levels',
          'nested':
        {
          'value': 26,
          'level': 'Three levels',
          'nested': {
            'value' : 1,
            'level' : 'Four levels'
          }
        }}
      }
    }
  ];

  basicData: any[] = this.data.slice(0, 4);
  selectable: boolean = true;
  clickable: boolean = false;
  multiple: boolean = true;
  filterColumn: boolean = true;
  filteredData: any[] = this.data;
  nestedFilteredData: any[] = this.nestedDataExample;
  filteredTotal: number = this.data.length;
  selectedRows: any[] = [];

  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 5;
  sortBy: string = 'name';
  nestedSortBy: string = 'value';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(private _dataTableService: TdDataTableService,
    private _dialogService: TdDialogService) { }

  openPrompt(row: any, name: string): void {
    this._dialogService.openPrompt({
      message: 'Enter comment?',
      value: row[name],
    }).afterClosed().subscribe((value: any) => {
      if (value !== undefined) {
        row[name] = value;
      }
    });
  }

  ngOnInit(): void {
    this.filter();
    let sortNestedEvent: ITdDataTableSortChangeEvent = {name: 'value', order: this.sortOrder, sortBy: 'value' }
    this.nestedSort(sortNestedEvent);
  }

  nestedSort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.nestedSortBy = sortEvent.sortBy;
    this.sortOrder = sortEvent.order;
    this.nestedFilter();
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  nestedFilter(): void {
    let newData: any[] = this.nestedDataExample;
    let excludedColumns: string[] = this.nestedColumnsExample
      .filter((column: ITdDataTableColumn) => {
        return ((column.filter === undefined && column.hidden === true) ||
          (column.filter !== undefined && column.filter === false));
      }).map((column: ITdDataTableColumn) => {
        return column.nestedSortBy;
      });
    newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
    newData = this._dataTableService.sortData(newData, this.nestedSortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.nestedDataExample = newData;
    this.nestedFilteredData = newData;
  }

  filter(): void {
    let newData: any[] = this.data;
    let excludedColumns: string[] = this.columns
      .filter((column: ITdDataTableColumn) => {
        return ((column.filter === undefined && column.hidden === true) ||
          (column.filter !== undefined && column.filter === false));
      }).map((column: ITdDataTableColumn) => {
        return column.nestedSortBy;
      });
    newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }

  toggleTooltips(): void {
    if (this.columns[0].tooltip) {
      this.columns.forEach((c: any) => delete c.tooltip);
    } else {
      this.columns.forEach((c: any) => c.tooltip = `This is ${c.label}!`);
    }
  }

  showAlert(event: any): void {
    this._dialogService.openAlert({
      message: 'You clicked on row: ' + event.row.name,
    });
  }
}

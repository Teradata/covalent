import { Component, OnInit, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

import { TdDataTableSortingOrder, TdDataTableService, TdDataTableComponent,
         ITdDataTableSortChangeEvent, ITdDataTableColumn } from '../../../../platform/core';
import { IPageChangeEvent } from '../../../../platform/core';
import { TdDialogService } from '../../../../platform/core';

import { InternalDocsService } from '../../../services';

import { toPromise } from 'rxjs/operator/toPromise';

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

  configWidthColumns: ITdDataTableColumn[] = [
    { name: 'first_name',  label: 'First name', width: 150 },
    { name: 'last_name', label: 'Last name', width: { min: 150, max: 250 } },
    { name: 'gender', label: 'Gender'},
    { name: 'email', label: 'Email', width: 250},
    { name: 'img', label: '', width: 100},
  ];

  columns: ITdDataTableColumn[] = [
    { name: 'first_name',  label: 'First Name', sortable: true, width: 150 },
    { name: 'last_name', label: 'Last Name', filter: true, sortable: false },
    { name: 'gender', label: 'Gender', hidden: false },
    { name: 'email', label: 'Email', sortable: true, width: 250 },
    { name: 'balance', label: 'Balance', numeric: true, format: DECIMAL_FORMAT },
  ];

  data: any[];
  basicData: any[];
  selectable: boolean = true;
  clickable: boolean = false;
  multiple: boolean = true;
  filterColumn: boolean = true;

  filteredData: any[];
  filteredTotal: number ;
  selectedRows: any[] = [];

  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 50;
  sortBy: string = 'first_name';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(private _dataTableService: TdDataTableService,
              private _internalDocsService: InternalDocsService,
              private _dialogService: TdDialogService) {}

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

  async ngOnInit(): Promise<void> {
    this.data = await toPromise.call(this._internalDocsService.queryData());
    this.basicData = this.data.slice(0, 10);
    this.filter();
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

  filter(): void {
    let newData: any[] = this.data;
    let excludedColumns: string[] = this.columns
    .filter((column: ITdDataTableColumn) => {
      return ((column.filter === undefined && column.hidden === true) || 
              (column.filter !== undefined && column.filter === false));
    }).map((column: ITdDataTableColumn) => {
      return column.name;
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
      message: 'You clicked on row: ' + event.row.first_name + ' ' + event.row.last_name,
    });
  }
}

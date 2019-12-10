import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';

import {
  TdDataTableSortingOrder,
  TdDataTableService,
  TdDataTableComponent,
  ITdDataTableSortChangeEvent,
  ITdDataTableColumn,
  TdPagingBarComponent,
} from '../../../../../../../platform/core';
import { IPageChangeEvent } from '../../../../../../../platform/core';
import { TdDialogService } from '../../../../../../../platform/core';

import { InternalDocsService } from '../../../../../../services';

const NUMBER_FORMAT: (v: any) => any = (v: number) => v;
const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);

@Component({
  selector: 'data-table-demo-basic',
  styleUrls: ['./data-table-demo-basic.component.scss'],
  templateUrl: './data-table-demo-basic.component.html',
  preserveWhitespaces: true,
})
export class DataTableDemoBasicComponent implements OnInit {
  @ViewChild(TdPagingBarComponent, { static: true }) pagingBar: TdPagingBarComponent;

  cellAttrs: object[] = [
    {
      description: `Makes cell follow the numeric data-table specs. Defaults to 'false'`,
      name: 'numeric',
      type: `boolean`,
    },
    {
      description: `Aligns cell text/content to desired position. Defaults to 'start'. Overrides numeric property`,
      name: 'align',
      type: `'start' | 'center' | 'end'`,
    },
  ];

  columnAttrs: object[] = [
    {
      description: `Sets unique column [name] for [sortable] events.`,
      name: 'name',
      type: `string`,
    },
    {
      description: `Enables sorting events, sort icons and active column states. Defaults to 'false'`,
      name: 'sortable',
      type: `boolean`,
    },
    {
      description: `Sets the sort order of column. Defaults to 'ASC' or TdDataTableSortingOrder.Ascending`,
      name: 'sortOrder',
      type: `['ASC' | 'DESC'] or TdDataTableSortingOrder`,
    },
    {
      description: `Whether the column should be hidden or not. Defaults to 'false'`,
      name: 'hidden',
      type: `boolean`,
    },
    {
      description: `When set to false this column will be excluded from searches using the filterData method.`,
      name: 'filter?',
      type: 'boolean',
    },
    {
      description: `Sets column to active state when 'true'. Defaults to 'false'`,
      name: 'active',
      type: `boolean`,
    },
    {
      description: `Makes cell follow the numeric data-table specs. Defaults to 'false'`,
      name: 'numeric',
      type: `boolean`,
    },
    {
      description: `Event emitted when the column headers are clicked. [sortable] needs to be enabled.
                  Emits an [ITdDataTableSortChangeEvent] implemented object.`,
      name: 'sortChange',
      type: `function`,
    },
  ];

  serviceAttrs: object[] = [
    {
      description: `Searches [data] parameter for [searchTerm] matches and returns a new array with them.
                  Any column names passed in with [nonSearchAbleColumns] will be excluded in the search.`,
      name: 'filterData',
      type: `function(data: any[], searchTerm: string, ignoreCase: boolean, nonSearchAbleColumns: string[])`,
    },
    {
      description: `Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.`,
      name: 'sortData',
      type: `function(data: any[], sortBy: string, sortOrder: TdDataTableSortingOrder): any[]`,
    },
    {
      description: `Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].`,
      name: 'pageData',
      type: `function(data: any[], fromRow: number, toRow: number): any[]`,
    },
  ];

  configWidthColumns: ITdDataTableColumn[] = [
    { name: 'first_name', label: 'First name', width: 150 },
    { name: 'last_name', label: 'Last name', width: { min: 150, max: 250 } },
    { name: 'email', label: 'Email', width: 250 },
    { name: 'img', label: '', width: 100 },
  ];

  columns: ITdDataTableColumn[] = [
    { name: 'first_name', label: 'First Name', sortable: true, width: 150 },
    { name: 'last_name', label: 'Last Name', filter: true, sortable: false },
    { name: 'email', label: 'Email', sortable: true, width: 250 },
    { name: 'balance', label: 'Balance', numeric: true, format: DECIMAL_FORMAT },
  ];

  dateColumns: ITdDataTableColumn[] = [
    { name: 'date', label: 'Date', sortable: true, width: 275 },
    { name: 'first_name', label: 'First Name', sortable: false, width: 150 },
    { name: 'last_name', label: 'Last Name', filter: true, sortable: false },
  ];

  data: any[];
  basicData: any[];
  dateSortData: any[];
  atomicData: any[];
  selectable: boolean = true;
  clickable: boolean = false;
  multiple: boolean = true;
  resizableColumns: boolean = false;
  filterColumn: boolean = true;

  filteredData: any[];
  filteredTotal: number;
  selectedRows: any[] = [];

  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 50;
  sortBy: string = 'first_name';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
  dateSortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
  atomicSortBy: string = 'date';
  atomicSortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(
    private _dataTableService: TdDataTableService,
    private _internalDocsService: InternalDocsService,
    private _dialogService: TdDialogService,
  ) {}

  openPrompt(row: any, name: string): void {
    this._dialogService
      .openPrompt({
        message: 'Enter comment?',
        value: row[name],
      })
      .afterClosed()
      .subscribe((value: any) => {
        if (value !== undefined) {
          row[name] = value;
        }
      });
  }

  async ngOnInit(): Promise<void> {
    this.data = await this._internalDocsService.queryData().toPromise();
    this.basicData = this.data.slice(0, 10);
    this.filter();

    this.dateSortData = this.data.slice(0, 5);
    this.dateSortData = this.dateSortData.map((row: any) => {
      const randomDate: Date = new Date(
        new Date(2012, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2012, 0, 1).getTime()),
      );
      row.date = randomDate;
      return row;
    });

    this.atomicData = [].concat(this.dateSortData);
    this.filterDateData();
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  sortDates(sortEvent: ITdDataTableSortChangeEvent): void {
    this.dateSortOrder = sortEvent.order;
    this.filterDateData();
  }

  sortAtomic(sortEvent: ITdDataTableSortChangeEvent): void {
    this.atomicSortOrder =
      this.atomicSortOrder === TdDataTableSortingOrder.Ascending
        ? TdDataTableSortingOrder.Descending
        : TdDataTableSortingOrder.Ascending;
    this.atomicSortBy = sortEvent.name;
    this.filterAtomicData();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.pagingBar.navigateToPage(1);
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
    const excludedColumns: string[] = this.columns
      .filter((column: ITdDataTableColumn) => {
        return (
          (column.filter === undefined && column.hidden === true) ||
          (column.filter !== undefined && column.filter === false)
        );
      })
      .map((column: ITdDataTableColumn) => {
        return column.name;
      });
    newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }

  filterDateData(): void {
    this.dateSortData = Array.from(this.dateSortData); // Change the array reference to trigger OnPush
    this.dateSortData.sort((a: any, b: any) => {
      let direction: number = 0;
      if (this.dateSortOrder === TdDataTableSortingOrder.Descending) {
        direction = 1;
      } else if (this.dateSortOrder === TdDataTableSortingOrder.Ascending) {
        direction = -1;
      }
      if (a.date < b.date) {
        return direction;
      } else if (a.date > b.date) {
        return -direction;
      } else {
        return direction;
      }
    });
  }

  filterAtomicData(): void {
    this.atomicData = Array.from(this.atomicData); // Change the array reference to trigger OnPush
    this.atomicData.sort((a: any, b: any) => {
      let direction: number = 0;
      if (this.atomicSortOrder === TdDataTableSortingOrder.Descending) {
        direction = 1;
      } else if (this.atomicSortOrder === TdDataTableSortingOrder.Ascending) {
        direction = -1;
      }
      if (a[this.atomicSortBy] < b[this.atomicSortBy]) {
        return direction;
      } else if (a[this.atomicSortBy] > b[this.atomicSortBy]) {
        return -direction;
      } else {
        return direction;
      }
    });
  }

  toggleTooltips(): void {
    if (this.columns[0].tooltip) {
      this.columns.forEach((c: any) => delete c.tooltip);
    } else {
      this.columns.forEach((c: any) => (c.tooltip = `This is ${c.label}!`));
    }
  }

  showAlert(event: any): void {
    this._dialogService.openAlert({
      message: 'You clicked on row: ' + event.row.first_name + ' ' + event.row.last_name,
    });
  }
}

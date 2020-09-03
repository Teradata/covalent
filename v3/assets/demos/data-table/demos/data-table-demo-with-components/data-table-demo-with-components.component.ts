import { Component, OnInit, ViewChild } from '@angular/core';

import { InternalDocsService } from '../../../../../../services';
import { TdPagingBarComponent, IPageChangeEvent } from '../../../../../../../platform/core/paging';
import {
  ITdDataTableColumn,
  TdDataTableSortingOrder,
  TdDataTableService,
  ITdDataTableSortChangeEvent,
} from '../../../../../../../platform/core/data-table';
import { TdDialogService } from '../../../../../../../platform/core/dialogs';

const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);

@Component({
  selector: 'data-table-demo-with-components',
  styleUrls: ['./data-table-demo-with-components.component.scss'],
  templateUrl: './data-table-demo-with-components.component.html',
})
export class DataTableDemoWithComponentsComponent implements OnInit {
  @ViewChild(TdPagingBarComponent, { static: true }) pagingBar: TdPagingBarComponent;

  columns: ITdDataTableColumn[] = [
    { name: 'first_name', label: 'First Name', sortable: true, filter: false, width: 150 },
    { name: 'last_name', label: 'Last Name', sortable: false },
    { name: 'email', label: 'Email', sortable: true, width: 250 },
    { name: 'balance', label: 'Balance', numeric: true, format: DECIMAL_FORMAT },
  ];

  data: any[];
  basicData: any[];
  selectable: boolean = true;
  clickable: boolean = false;
  multiple: boolean = true;
  resizableColumns: boolean = false;

  filteredData: any[];
  filteredTotal: number;
  selectedRows: any[] = [];

  filterTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 50;
  sortBy: string = 'first_name';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(
    private _dataTableService: TdDataTableService,
    private _internalDocsService: InternalDocsService,
    private _dialogService: TdDialogService,
  ) {}

  ngOnInit(): void {
    this.data = this._internalDocsService.getData();
    this.basicData = this.data.slice(0, 10);
    this.refreshTable();
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.refreshTable();
  }

  filter(filterTerm: string): void {
    this.filterTerm = filterTerm;
    this.pagingBar.navigateToPage(1);
    this.refreshTable();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.refreshTable();
  }

  refreshTable(): void {
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
    newData = this._dataTableService.filterData(newData, this.filterTerm, true, excludedColumns);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }

  showAlert(event: any): void {
    this._dialogService.openAlert({
      message: 'You clicked on row: ' + event.row.first_name + ' ' + event.row.last_name,
    });
  }
}

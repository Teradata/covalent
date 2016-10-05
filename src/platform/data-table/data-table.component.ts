import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList, Renderer } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdInput } from '@angular/material';
import 'rxjs/add/operator/debounceTime';

import * as _ from "lodash";

export enum TdDataTableSortingOrder {
  Ascending, Descending
};

export interface TdDataTableColumn { 
  name: string, 
  label: string 
};

export interface TdDataTableSortChanged {
  column: TdDataTableColumn,
  order: TdDataTableSortingOrder
};

@Component({
  selector: 'td-data-table',
  styleUrls: [ 'data-table.component.scss' ],
  templateUrl: 'data-table.component.html',
})
export class TdDataTableComponent implements OnInit {

  /** internal attributes */
  private _data: any[];
  private _visibleData: any[];
  private _columns: TdDataTableColumn[];
  private _rowSelection: boolean;
  private _rowSelectionField: string = 'selected';
  private _multiple: boolean = true;
  private _search: boolean = false;
  private _hasData: boolean = false;
  private _initialized: boolean = false;

  /** pagination */
  private _pageSize: number = 0;
  private _currentPage: number = 0;
  private _totalPages: number = 0;
  private _hasPagination: boolean = false;

  /** sorting */
  private _sorting: boolean = false;
  private _sortBy: TdDataTableColumn;
  private _sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  private _sortByColumnName: string;
  private _ascending = TdDataTableSortingOrder.Ascending; 
  private _descending = TdDataTableSortingOrder.Descending; 

  /** search by term */
  private _searchVisible: boolean = false;
  private _searchTerm: string = '';
  private _searchTermControl: FormControl = new FormControl();

  @ViewChildren(MdInput) _searchTermInput: QueryList<MdInput>;

  /** events */
  @Output() sortChanged: EventEmitter<TdDataTableSortChanged> = new EventEmitter<TdDataTableSortChanged>();

  /** td-data-table element attributes */
  @Input('title') _title: string;

  @Input('data')
  set data(data: any[]) {
    this._data = data;
    this.resetPagination();
  }

  @Input('pageSize')
  set pageSize(size: string | number) {
    if (typeof size === 'string') {
      this._pageSize = parseInt(size, 10);
    } else {
      this._pageSize = size;
    }
    this.hasPagination = true;
    this.resetPagination();
  }

  @Input('rowSelectionField')
  set rowSelectionField(field: string) {
    this._rowSelectionField = field;
  }

  @Input('rowSelection')
  set rowSelection(selection: string | boolean) {
    const settingAsString: boolean = typeof selection === 'string'
      && selection !== 'true' && selection !== 'false';

    if (settingAsString) {
      this._rowSelection = true;
      this._rowSelectionField = '' + selection;
    } else {
      this._rowSelection = selection !== '' ? (selection === 'true' || selection === true) : true;
    }
  }

  @Input('multiple')
  set multiple(multiple: string | boolean) {
    this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
  }

  @Input('search')
  set search(search: string | boolean) {
    this._search = search !== '' ? (search === 'true' || search === true) : true;
  }

  @Input('columns')
  set columns(cols: TdDataTableColumn[]) {
    this._columns = cols;
  }
  get columns(): TdDataTableColumn[] {
    if (this._columns) {
      return this._columns;
    }

    if (!this._data) {
      return [];
    }

    this._columns = [];
    this._data.forEach((row: any) => {
      Object.keys(row).forEach((k: string) => {
        if (!this._columns.find((c: any) => c.name === k)) {
          this._columns.push({ name: k, label: k });
        }
      });
    });

    return this._columns;
  }

  @Input('sorting')
  set sorting(sorting: string | boolean) {
    this._sorting = sorting !== '' ? (sorting === 'true' || sorting === true) : true;
  }

  @Input('sortBy') 
  set sortBy(columnName: string) {
    if (!columnName) {
      return;
    }
    this._sortByColumnName = columnName;
    this._sorting = true;
    this.filterData();
  }

  @Input('sortOrder')
  set sortOrder(order: string) {
    if (order.toUpperCase() === 'DESC') {
      this._sortOrder = TdDataTableSortingOrder.Descending;
      this.notifySortChanged();
    } else if (order.toUpperCase() === '' || order.toUpperCase() === 'ASC') {
      this._sortOrder = TdDataTableSortingOrder.Ascending;
      this.notifySortChanged();
    } else {
      throw '[sortOrder] must be empty, ASC or DESC';
    }
  }

  set hasPagination(pagination: boolean) {
    this._hasPagination = pagination;
  }
  get hasPagination(): boolean {
    return this._hasPagination;
  }

  get hasData(): boolean {
    return this._hasData;
  }

  constructor(private renderer: Renderer) {}

  ngOnInit(): void {
    this._searchTermControl.valueChanges
      .debounceTime(250)
      .subscribe(this.searchTermChanged.bind(this));
  }

  ngAfterViewInit(): void {
    this._initialized = true;
    this.filterData();
  }

  areAllSelected(): boolean {
    const match: string =
      this._data.find((d: any) => !d[this._rowSelectionField]);
    return typeof match === 'undefined';
  }

  selectAll(checked: boolean): void {
    this._data.forEach((d: any) => d[this._rowSelectionField] = checked);
  }

  select(row: any, checked: boolean): void {
    // clears all the fields for the dataset
    if (!this._multiple) {
      this.selectAll(false);
    }

    // toggles the selection field
    row[this._rowSelectionField] = checked;
  }

  toggleSearch(): void {
    this._searchVisible = !this._searchVisible;

    if (this._searchVisible) {
      setTimeout(this.focusOnSearch.bind(this));
    } else {
      setTimeout(this.clearSearch.bind(this));
    }
  }

  focusOnSearch(): void {
    this._searchTermInput.first.focus();
  }

  clearSearch(): void {
    this._searchTermControl.setValue('');
  }

  setSorting(column: TdDataTableColumn): void {
    if (this._sortBy === column) {
      this._sortOrder = this._sortOrder === TdDataTableSortingOrder.Ascending ?
        TdDataTableSortingOrder.Descending : TdDataTableSortingOrder.Ascending  
    } else {
      this._sortBy = column;
      this.notifySortChanged();
    }
    this.filterData();
  }

  notifySortChanged(): void {
    this.sortChanged.next({ column: this._sortBy, order: this._sortOrder });
  }

  nextPage(): void {
    if (this._currentPage < this._totalPages) {
      this._currentPage = this._currentPage + 1;
      this.filterData();
    }
  }

  prevPage(): void {
    this._currentPage = Math.max(this._currentPage - 1, 1);
    this.filterData();
  }

  private searchTermChanged(value: string): void {
    this._searchTerm = value;
    this.resetPagination();
  }

  private resetPagination(): void {
    this._currentPage = 1;
    this._totalPages = 0;

    this.filterData();
  }

  private filterData(): void {
    this._visibleData = this._data;

    if (!this._initialized) {
      return;
    }

    let filter: string = this._searchTerm.toLowerCase();
    if (filter) {
      this._visibleData = this._visibleData.filter((item: any) => {
        const res: any = Object.keys(item).find((key: string) => {
          const itemValue: string = ('' + item[key]).toLowerCase();
          return itemValue.indexOf(filter) > -1;
        });
        return !(typeof res === 'undefined');
      });
    }

    if (this._sortByColumnName) {
      const column = this.columns.find((c: any) => c.name === this._sortByColumnName);
      if (!column) {
        throw '[sortBy] must be a valid column name';
      }

      this._sortBy = column;
      this._sortByColumnName = undefined;
      this.notifySortChanged();
    }

    if (this._sorting && this._sortBy) {
      this._visibleData = _.sortBy(this._visibleData, this._sortBy.name);
      if (this._sortOrder === TdDataTableSortingOrder.Descending) {
        this._visibleData = _.reverse(this._visibleData);
      }
    }

    if (this.hasPagination) {
      const pageStart: number = (this._currentPage - 1) * this._pageSize;
      const pageEnd: number = Math.min(pageStart + this._pageSize, this._visibleData.length);

      this._totalPages = Math.ceil(this._visibleData.length / this._pageSize);
      this._visibleData = this._visibleData.slice(pageStart, pageEnd);
    }

    this._hasData = this._visibleData.length > 0;
  }

}

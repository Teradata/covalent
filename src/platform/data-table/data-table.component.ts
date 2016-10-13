import { Component, OnInit, AfterViewInit, Input, Output,
         EventEmitter, ViewChildren, QueryList, Renderer } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdInput } from '@angular/material';
import 'rxjs/add/operator/debounceTime';

import * as _ from 'lodash';

export enum TdDataTableSortingOrder {
  Ascending, Descending
};

export interface ITdDataTableColumn {
  name: string;
  label: string;
  tooltip?: string;
  numeric?: boolean;
  format?: { (value: any): any };
};

export interface ITdDataTableSortEvent {
  column: ITdDataTableColumn;
  order: TdDataTableSortingOrder;
};

@Component({
  selector: 'td-data-table',
  styleUrls: [ 'data-table.component.scss' ],
  templateUrl: 'data-table.component.html',
})
export class TdDataTableComponent implements OnInit, AfterViewInit {

  /** internal attributes */
  private _data: any[];
  private _visibleData: any[];
  private _columns: ITdDataTableColumn[];
  private _rowSelection: boolean;
  private _rowSelectionField: string = 'selected';
  private _multiple: boolean = true;
  private _search: boolean = false;
  private _hasData: boolean = false;
  private _initialized: boolean = false;

  /** pagination */
  private _pageSize: number = 10;
  private _currentPage: number = 0;
  private _totalPages: number = 0;
  private _pagination: boolean = false;

  /** sorting */
  private _sorting: boolean = false;
  private _sortBy: ITdDataTableColumn;
  private _sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  /** search by term */
  private _searchVisible: boolean = false;
  private _searchTerm: string = '';
  private _searchTermControl: FormControl = new FormControl();

  @ViewChildren(MdInput) _searchTermInput: QueryList<MdInput>;

  /** events */
  @Output() sortChanged: EventEmitter<ITdDataTableSortEvent> = new EventEmitter<ITdDataTableSortEvent>();

  /** td-data-table element attributes */
  @Input('title') _title: string;

  @Input('data')
  set data(data: Object[]) {
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
    this._pagination = true;
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
  set columns(cols: ITdDataTableColumn[]) {
    this._columns = cols;
  }
  get columns(): ITdDataTableColumn[] {
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
    const column: ITdDataTableColumn = this.columns.find((c: any) => c.name === columnName);
    if (!column) {
      throw '[sortBy] must be a valid column name';
    }

    this._sortBy = column;
    this._sorting = true;
    this.filterData();
  }

  @Input('sortOrder')
  set sortOrder(order: 'ASC' | 'DESC') {
    let sortOrder: string = order ? order.toUpperCase() : 'ASC';
    if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
      throw '[sortOrder] must be empty, ASC or DESC';
    }

    this._sortOrder = sortOrder === 'ASC' ?
      TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
    this.filterData();
  }

  @Input('pagination')
  set pagination(pagination: string | boolean) {
    this._pagination = pagination !== '' ? (pagination === 'true' || pagination === true) : true;
    this.resetPagination();
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
    this.preprocessData();
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

  select(row: any, checked: boolean, event: Event): void {
    event.preventDefault();
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

  setSorting(column: ITdDataTableColumn): void {
    if (this._sortBy === column) {
      this._sortOrder = this._sortOrder === TdDataTableSortingOrder.Ascending ?
        TdDataTableSortingOrder.Descending : TdDataTableSortingOrder.Ascending;
    } else {
      this._sortBy = column;
      this._sortOrder = TdDataTableSortingOrder.Ascending;
    }
    this.notifySortChanged();
    this.filterData();
  }

  notifySortChanged(): void {
    if (!this._initialized) {
      return;
    }
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

  isAscending(): boolean {
    return this._sortOrder === TdDataTableSortingOrder.Ascending;
  }

  isDescending(): boolean {
    return this._sortOrder === TdDataTableSortingOrder.Descending;
  }

  private preprocessData(): void {
    this._data = _.cloneDeep(this._data);
    this._data = this._data.map((row: any) => {
      this.columns.filter((c: any) => c.format).forEach((c: any) => {
        row[c.name] = c.format(row[c.name]);
      });
      return row;
    });
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

    if (this._sorting && this._sortBy) {
      this._visibleData = _.sortBy(this._visibleData, this._sortBy.name);
      if (this._sortOrder === TdDataTableSortingOrder.Descending) {
        this._visibleData = _.reverse(this._visibleData);
      }
    }

    if (this._pagination) {
      const pageStart: number = (this._currentPage - 1) * this._pageSize;
      const pageEnd: number = Math.min(pageStart + this._pageSize, this._visibleData.length);

      this._totalPages = Math.ceil(this._visibleData.length / this._pageSize);
      this._visibleData = this._visibleData.slice(pageStart, pageEnd);
    }

    this._hasData = this._visibleData.length > 0;
  }

}

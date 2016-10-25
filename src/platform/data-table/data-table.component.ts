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
  sortable?: boolean;
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
  private _rowSelectionField: string = '__selected';
  private _multiSelect: boolean = true;
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
  private _sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;
  private _currentSortColumn: ITdDataTableColumn;

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
    if (data) {
      this._data = data;
    } else {
      this._data = [];
    }
    this.resetPagination();
  }

  @Input('columns')
  set columns(cols: ITdDataTableColumn[]) {
    if (cols) {
      this._columns = cols;
      for (let i = 0; i < cols.length; i++) {
        if (cols[i].sortable) {
          this._sorting = true;
          if (!this._currentSortColumn) {
            this._currentSortColumn = cols[i];
          }
        }
      }
      if (this._sorting) {
        this.filterData();
      }
    } else {
      this._columns = [];
    }
  }

  @Input('pagination')
  set pagination(pagination: string | boolean) {
    this._pagination = pagination !== '' ? (pagination === 'true' || pagination === true) : true;
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

  @Input('initialSortColumn')
  set initialSortColumn(columnName: string) {
    if (!columnName) {
      return;
    }
    const column: ITdDataTableColumn = this.columns.find((c: any) => c.name === columnName);
    if (!column) {
      throw '[initialSortColumn] must be a valid column name';
    }
    if (!column.sortable) {
      throw '[initialSortColumn] must reference a sortable column';
    }

    this._currentSortColumn = column;
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

  @Input('rowSelection')
  set rowSelection(selection: string | boolean) {
    this._rowSelection = selection !== '' ? (selection === 'true' || selection === true) : true;
  }

  @Input('multiSelect')
  set multiSelect(multiSelect: string | boolean) {
    this._multiSelect = multiSelect !== '' ? (multiSelect === 'true' || multiSelect === true) : true;
  }

  @Input('search')
  set search(search: string | boolean) {
    this._search = search !== '' ? (search === 'true' || search === true) : true;
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

  get hasData(): boolean {
    return this._hasData;
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
    if (!this._multiSelect) {
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

  setCurrentSortColumn(column: ITdDataTableColumn): void {
    if (this._currentSortColumn === column) {
      this._sortOrder = this._sortOrder === TdDataTableSortingOrder.Ascending ?
        TdDataTableSortingOrder.Descending : TdDataTableSortingOrder.Ascending;
    } else {
      this._currentSortColumn = column;
      this._sortOrder = TdDataTableSortingOrder.Ascending;
    }
    this.notifySortChanged();
    this.filterData();
  }

  isSortColumn(col: ITdDataTableColumn): boolean {
    return col.sortable;
  }

  isCurrentSortColumn(col: ITdDataTableColumn): boolean {
    return this._currentSortColumn === col;
  }

  notifySortChanged(): void {
    if (!this._initialized) {
      return;
    }
    this.sortChanged.next({ column: this._currentSortColumn, order: this._sortOrder });
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

    if (this._sorting && this._currentSortColumn) {
      this._visibleData = _.sortBy(this._visibleData, this._currentSortColumn.name);
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

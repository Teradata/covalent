import { Component, OnInit, Input, Output,
         EventEmitter, OnChanges, SimpleChange, Renderer } from '@angular/core';

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
export class TdDataTableComponent implements OnInit, OnChanges {

  /** internal attributes */
  private _data: any[];
  private _visibleData: any[];
  private _columns: ITdDataTableColumn[];
  private _rowSelection: boolean;
  private _rowSelectionField: string = 'selected';
  private _multiple: boolean = true;
  private _initialized: boolean = false;

  /** sorting */
  private _sorting: boolean = false;
  private _sortBy: ITdDataTableColumn;
  private _sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  /** pagination */
  @Input('fromRow') fromRow: number;
  @Input('toRow') toRow: number;

  /** search by term */
  @Input('searchTerm') searchTerm: string;

  /** td-data-table element attributes */
  @Input('title') title: string;

  @Input('data')
  set data(data: Object[]) {
    this._data = data;
    this.refresh();
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

  get hasData(): boolean {
    return this._visibleData.length > 0;
  }

  /** events */
  @Output() sortChanged: EventEmitter<ITdDataTableSortEvent> = new EventEmitter<ITdDataTableSortEvent>();

  constructor(private renderer: Renderer) {}

  ngOnInit(): void {
    this.preprocessData();
    this._initialized = true;
    this.filterData();
  }

  refresh(): void {
    this.filterData();
  }

  ngOnChanges(changes: {searchTerm: SimpleChange, fromRow: SimpleChange, toRow: SimpleChange}): void {
    if (changes.searchTerm || changes.fromRow || changes.toRow) {
      this.refresh();
    }
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

  private filterData(): void {
    this._visibleData = this._data;

    if (!this._initialized) {
      return;
    }

    let filter: string = this.searchTerm ? this.searchTerm.toLowerCase() : '';
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

    if (this.fromRow >= 1 && this.toRow <= this._visibleData.length) {
      this._visibleData = this._visibleData.slice(this.fromRow - 1, this.toRow);
    }
  }

}

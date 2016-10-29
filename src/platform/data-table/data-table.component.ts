import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop: any = () => {
  // empty method
};

export const TD_DATA_TABLE_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdDataTableComponent),
  multi: true,
};

export enum TdDataTableSortingOrder {
  Ascending = <any>'ASC',
  Descending = <any>'DESC'
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

export interface IDataTableSelectEvent {
  row: any;
  selected: boolean;
};

@Component({
  providers: [ TD_DATA_TABLE_CONTROL_VALUE_ACCESSOR ],
  selector: 'td-data-table',
  styleUrls: [ 'data-table.component.scss' ],
  templateUrl: 'data-table.component.html',
})
export class TdDataTableComponent implements ControlValueAccessor {

  /**
   * Implemented as part of ControlValueAccessor.
   */
  private _value: any[] = [];
  /** Callback registered via registerOnChange (ControlValueAccessor) */
  private _onChangeCallback: (_: any) => void = noop;

  /** internal attributes */
  private _data: any[];
  private _columns: ITdDataTableColumn[];
  private _selectable: boolean = false;
  private _multiple: boolean = true;

  /** sorting */
  private _sortable: boolean = false;
  private _sortBy: ITdDataTableColumn;
  private _sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  /**
   * Implemented as part of ControlValueAccessor.
   */
  @Input() set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this._onChangeCallback(v);
    }
  }
  get value(): any { return this._value; };

  @Input('uniqueId') uniqueId: string;

  @Input('data')
  set data(data: Object[]) {
    this._data = data;
    this.refresh();
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

  @Input('selectable')
  set selectable(_selectable: string | boolean) {
    this._selectable = _selectable !== '' ? (_selectable === 'true' || _selectable === true) : true;
  }

  @Input('multiple')
  set multiple(multiple: string | boolean) {
    this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
  }

  @Input('sortable')
  set sortable(sortable: string | boolean) {
    this._sortable = sortable !== '' ? (sortable === 'true' || sortable === true) : true;
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
  }

  @Input('sortOrder')
  set sortOrder(order: 'ASC' | 'DESC') {
    let sortOrder: string = order ? order.toUpperCase() : 'ASC';
    if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
      throw '[sortOrder] must be empty, ASC or DESC';
    }

    this._sortOrder = sortOrder === 'ASC' ?
      TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
  }

  get hasData(): boolean {
    return this._data.length > 0;
  }

  /**
   * sortChange?: function
   * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
   * Emits an [ITdDataTableSortEvent] implemented object.
   */
  @Output('sortChange') onSortChange: EventEmitter<ITdDataTableSortEvent> = new EventEmitter<ITdDataTableSortEvent>();

  @Output('rowSelect') onRowSelect: EventEmitter<IDataTableSelectEvent> = new EventEmitter<IDataTableSelectEvent>();

  clearModel(): void {
    this._value.splice(0, this._value.length);
  }

  refresh(): void {
    this.clearModel();
    this._preprocessData();
  }

  areAllSelected(): boolean {
    const match: string =
      this._data.find((d: any) => !this.isRowSelected(d));
    return typeof match === 'undefined';
  }

  selectAll(checked: boolean): void {
    if (checked) {
      this._data.forEach((row: any) => {
        if (!this.isRowSelected(row)) {
          this._value.push(row);
        }
      });
    } else {
      this.clearModel();
    }
  }

  isRowSelected(row: any): boolean {
    if (this.uniqueId) {
      return this._value ? this._value.filter((val: any) => {
        return val[this.uniqueId] === row[this.uniqueId];
      }).length > 0 : false;
    }
    return this._value ? this._value.indexOf(row) > -1 : false;
  }

  select(row: any, checked: boolean, event: Event): void {
    event.preventDefault();
    // clears all the fields for the dataset
    if (!this._multiple) {
      this.clearModel();
    }

    if (checked) {
      this._value.push(row);
    } else {
      if (this.uniqueId) {
        row = this._value.filter((val: any) => {
          return val[this.uniqueId] === row[this.uniqueId];
        })[0];
      }
      let index: number = this._value.indexOf(row);
      if (index > -1) {
        this._value.splice(index, 1);
      }
    }
    this.onRowSelect.emit({row: row, selected: checked});
    this.onChange(this._value);
  }

  setSorting(column: ITdDataTableColumn): void {
    if (this._sortBy === column) {
      this._sortOrder = this._sortOrder === TdDataTableSortingOrder.Ascending ?
        TdDataTableSortingOrder.Descending : TdDataTableSortingOrder.Ascending;
    } else {
      this._sortBy = column;
      this._sortOrder = TdDataTableSortingOrder.Ascending;
    }
    this.onSortChange.next({ column: this._sortBy, order: this._sortOrder });
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange = (_: any) => noop;
  onTouched = () => noop;

  private _preprocessData(): void {
    let data: Object[] = JSON.parse(JSON.stringify(this._data));
    this._data = data.map((row: any) => {
      this.columns.filter((c: any) => c.format).forEach((c: any) => {
        row[c.name] = c.format(row[c.name]);
      });
      return row;
    });
  }

}

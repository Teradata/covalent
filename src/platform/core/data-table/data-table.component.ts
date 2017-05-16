import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef,
         ContentChildren, TemplateRef, AfterContentInit, QueryList, Inject, Optional, ViewChildren } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { ENTER, SPACE, UP_ARROW, DOWN_ARROW } from '@angular/material';

import { TdDataTableRowComponent } from './data-table-row/data-table-row.component';
import { ITdDataTableSortChangeEvent } from './data-table-column/data-table-column.component';
import { TdDataTableTemplateDirective } from './directives/data-table-template.directive';

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
  Descending = <any>'DESC',
}

export interface ITdDataTableColumn {
  name: string;
  label: string;
  tooltip?: string;
  numeric?: boolean;
  format?: (value: any) => any;
  nested?: boolean;
  sortable?: boolean;
  hidden?: boolean;
  filter?: boolean;
}

export interface ITdDataTableSelectEvent {
  row: any;
  selected: boolean;
}

export interface ITdDataTableSelectAllEvent {
  rows: any[];
  selected: boolean;
}

export interface ITdDataTableRowClickEvent {
  row: any;
}

export enum TdDataTableArrowKeyDirection {
  Ascending = <any>'ASC',
  Descending = <any>'DESC',
}

@Component({
  providers: [ TD_DATA_TABLE_CONTROL_VALUE_ACCESSOR ],
  selector: 'td-data-table',
  styleUrls: ['./data-table.component.scss' ],
  templateUrl: './data-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdDataTableComponent implements ControlValueAccessor, AfterContentInit {

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
  private _clickable: boolean = false;
  private _multiple: boolean = true;
  private _allSelected: boolean = false;
  private _indeterminate: boolean = false;

  /** sorting */
  private _sortable: boolean = false;
  private _sortBy: ITdDataTableColumn;
  private _sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  /** shift select */
  private _lastSelectedIndex: number = -1;
  private _selectedBeforeLastIndex: number = -1;
  private _lastArrowKeyDirection: TdDataTableArrowKeyDirection;

  /** template fetching support */
  private _templateMap: Map<string, TemplateRef<any>> = new Map<string, TemplateRef<any>>();
  @ContentChildren(TdDataTableTemplateDirective) _templates: QueryList<TdDataTableTemplateDirective>;

  @ViewChildren(TdDataTableRowComponent) _rows: QueryList<TdDataTableRowComponent>;

  /**
   * Returns true if all values are selected.
   */
  get allSelected(): boolean {
    return this._allSelected;
  }

  /**
   * Returns true if all values are not deselected
   * and atleast one is.
   */
  get indeterminate(): boolean {
    return this._indeterminate;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  @Input() set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this._onChangeCallback(v);
      this.refresh();
    }
  }
  get value(): any { return this._value; }

  /**
   * uniqueId?: string
   * Allows selection by [uniqueId] property.
   */
  @Input('uniqueId') uniqueId: string;

  /**
   * data?: {[key: string]: any}[]
   * Sets the data to be rendered as rows.
   */
  @Input('data')
  set data(data: any[]) {
    this._data = data;
    this.refresh();
  }
  get data(): any[] {
    return this._data;
  }

  /**
   * columns?: ITdDataTableColumn[]
   * Sets additional column configuration. [ITdDataTableColumn.name] has to exist in [data] as key.
   * Defaults to [data] keys.
   */
  @Input('columns')
  set columns(cols: ITdDataTableColumn[]) {
    this._columns = cols;
  }
  get columns(): ITdDataTableColumn[] {
    if (this._columns) {
      return this._columns;
    }

    if (this.hasData) {
      this._columns = [];
      // if columns is undefined, use key in [data] rows as name and label for column headers.
      let row: any = this._data[0];
      Object.keys(row).forEach((k: string) => {
        if (!this._columns.find((c: any) => c.name === k)) {
          this._columns.push({ name: k, label: k });
        }
      });
      return this._columns;
    } else {
      return [];
    }
  }

  /**
   * selectable?: boolean
   * Enables row selection events, hover and selected row states.
   * Defaults to 'false'
   */
  @Input('selectable')
  set selectable(selectable: string | boolean) {
    this._selectable = selectable !== '' ? (selectable === 'true' || selectable === true) : true;
  }
  get isSelectable(): boolean {
    return this._selectable;
  }

  /**
   * clickable?: boolean
   * Enables row click events, hover.
   * Defaults to 'false'
   */
  @Input('clickable')
  set clickable(clickable: string | boolean) {
    this._clickable = clickable !== '' ? (clickable === 'true' || clickable === true) : true;
  }
  get isClickable(): boolean {
    return this._clickable;
  }

  /**
   * multiple?: boolean
   * Enables multiple row selection. [selectable] needs to be enabled.
   * Defaults to 'false'
   */
  @Input('multiple')
  set multiple(multiple: string | boolean) {
    this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
  }
  get isMultiple(): boolean {
    return this._multiple;
  }

  /**
   * sortable?: boolean
   * Enables sorting events, sort icons and active column states.
   * Defaults to 'false'
   */
  @Input('sortable')
  set sortable(sortable: string | boolean) {
    this._sortable = sortable !== '' ? (sortable === 'true' || sortable === true) : true;
  }
  get isSortable(): boolean {
    return this._sortable;
  }

  /**
   * sortBy?: string
   * Sets the active sort column. [sortable] needs to be enabled.
   */
  @Input('sortBy')
  set sortBy(columnName: string) {
    if (!columnName) {
      return;
    }
    const column: ITdDataTableColumn = this.columns.find((c: any) => c.name === columnName);
    if (!column) {
      throw new Error('[sortBy] must be a valid column name');
    }

    this._sortBy = column;
  }
  get sortByColumn(): ITdDataTableColumn {
    return this._sortBy;
  }

  /**
   * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
   * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
   * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
   */
  @Input('sortOrder')
  set sortOrder(order: 'ASC' | 'DESC') {
    let sortOrder: string = order ? order.toUpperCase() : 'ASC';
    if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
      throw new Error('[sortOrder] must be empty, ASC or DESC');
    }

    this._sortOrder = sortOrder === 'ASC' ?
      TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
  }
  get sortOrderEnum(): TdDataTableSortingOrder {
    return this._sortOrder;
  }

  get hasData(): boolean {
    return this._data && this._data.length > 0;
  }

  /**
   * sortChange?: function
   * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
   * Emits an [ITdDataTableSortChangeEvent] implemented object.
   */
  @Output('sortChange') onSortChange: EventEmitter<ITdDataTableSortChangeEvent> =
                                      new EventEmitter<ITdDataTableSortChangeEvent>();

  /**
   * rowSelect?: function
   * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
   * Emits an [ITdDataTableSelectEvent] implemented object.
   */
  @Output('rowSelect') onRowSelect: EventEmitter<ITdDataTableSelectEvent> = new EventEmitter<ITdDataTableSelectEvent>();

  /**
   * rowClick?: function
   * Event emitted when a row is clicked.
   * Emits an [ITdDataTableRowClickEvent] implemented object.
   */
  @Output('rowClick') onRowClick: EventEmitter<ITdDataTableRowClickEvent> = new EventEmitter<ITdDataTableRowClickEvent>();

  /**
   * selectAll?: function
   * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
   * Emits an [ITdDataTableSelectAllEvent] implemented object.
   */
  @Output('selectAll') onSelectAll: EventEmitter<ITdDataTableSelectAllEvent> =
                                    new EventEmitter<ITdDataTableSelectAllEvent>();

  constructor(@Optional() @Inject(DOCUMENT) private _document: any,
              private _changeDetectorRef: ChangeDetectorRef) {}

  /**
   * Loads templates and sets them in a map for faster access.
   */
  ngAfterContentInit(): void {
    for (let i: number = 0; i < this._templates.toArray().length; i++) {
      this._templateMap.set(
        this._templates.toArray()[i].tdDataTableTemplate,
        this._templates.toArray()[i].templateRef,
      );
    }
  }

  getCellValue(column: ITdDataTableColumn, value: any): string {
    if (column.nested === undefined || column.nested) {
      return this._getNestedValue(column.name, value);
    }
    return value[column.name];
  }

  /**
   * Getter method for template references
   */
   getTemplateRef(name: string): TemplateRef<any> {
     return this._templateMap.get(name);
   }

  /**
   * Clears model (ngModel) of component by removing all values in array.
   */
  clearModel(): void {
    this._value.splice(0, this._value.length);
  }

  /**
   * Refreshes data table and rerenders [data] and [columns]
   */
  refresh(): void {
    this._calculateCheckboxState();
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Selects or clears all rows depending on 'checked' value.
   */
  selectAll(checked: boolean): void {
    if (checked) {
      this._data.forEach((row: any) => {
        // skiping already selected rows
        if (!this.isRowSelected(row)) {
          this._value.push(row);
        }
      });
      this._allSelected = true;
      this._indeterminate = true;
    } else {
      this.clearModel();
      this._allSelected = false;
      this._indeterminate = false;
    }
    this.onSelectAll.emit({rows: this._value, selected: checked});
  }

  /**
   * Checks if row is selected
   */
  isRowSelected(row: any): boolean {
    // if selection is done by a [uniqueId] it uses it to compare, else it compares by reference.
    if (this.uniqueId) {
      return this._value ? this._value.filter((val: any) => {
        return val[this.uniqueId] === row[this.uniqueId];
      }).length > 0 : false;
    }
    return this._value ? this._value.indexOf(row) > -1 : false;
  }

  /**
   * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
   * handles cntrl clicks and shift clicks for multi-select
   */
  select(row: any, event: Event, currentSelected: number): void {
    if (this.isSelectable) {
      this.blockEvent(event);
      this._doSelection(row);

      // Check to see if Shift key is selected and need to select everything in between
      let mouseEvent: MouseEvent = event as MouseEvent;
      if (this.isMultiple && mouseEvent && mouseEvent.shiftKey && this._lastSelectedIndex > -1) {
        let firstIndex: number = currentSelected;
        let lastIndex: number = this._lastSelectedIndex;
        if (currentSelected > this._lastSelectedIndex) {
          firstIndex = this._lastSelectedIndex;
          lastIndex = currentSelected;
        }
        for (let i: number = firstIndex + 1; i < lastIndex; i++) {
          this._doSelection(this._data[i]);
        }
      }
      // set the last selected attribute unless the last selected unchecked a row
      if (this.isRowSelected(this._data[currentSelected])) {
        this._selectedBeforeLastIndex = this._lastSelectedIndex;
        this._lastSelectedIndex = currentSelected;
      } else {
        this._lastSelectedIndex = this._selectedBeforeLastIndex;
      }
      // everything is unselected so start over
      if (!this._indeterminate && !this._allSelected) {
        this._lastSelectedIndex = -1;
      }
    }
  }

  /**
   * Overrides the onselectstart method of the document so other text on the page
   * doesn't get selected when doing shift selections.
   */
  disableTextSelection(): void {
    if (this._document) {
      this._document.onselectstart = function(): boolean {
        return false;
      };
    }
  }

  /**
   * Resets the original onselectstart method.
   */
  enableTextSelection(): void {
    if (this._document) {
      this._document.onselectstart = undefined;
    }
  }

  /**
   * emits the onRowClickEvent when a row is clicked
   * if clickable is true and selectable is false then select the row
   */
  handleRowClick(row: any, event: Event, currentSelected: number): void {
    if (this.isClickable) {
      this.onRowClick.emit({row: row});
    }
  }

  /**
   * Method handle for sort click event in column headers.
   */
  handleSort(column: ITdDataTableColumn): void {
    if (this._sortBy === column) {
      this._sortOrder = this._sortOrder === TdDataTableSortingOrder.Ascending ?
        TdDataTableSortingOrder.Descending : TdDataTableSortingOrder.Ascending;
    } else {
      this._sortBy = column;
      this._sortOrder = TdDataTableSortingOrder.Ascending;
    }
    this.onSortChange.next({ name: this._sortBy.name, order: this._sortOrder });
  }

  /**
   * Handle all keyup events when focusing a data table row
   */
  _rowKeyup(event: KeyboardEvent, row: any, index: number): void {
    let length: number;
    let rows: TdDataTableRowComponent[];
    switch (event.keyCode) {
      case ENTER:
      case SPACE:
        /** if user presses enter or space, the row should be selected */
        this.select(row, event, index);
        break;
      case UP_ARROW:
        rows = this._rows.toArray();
        length = rows.length;

        // check to see if changing direction and need to toggle the current row
        if (this._lastArrowKeyDirection === TdDataTableArrowKeyDirection.Descending) {
          index++;
        }
        /** 
         * if users presses the up arrow, we focus the prev row 
         * unless its the first row, then we move to the last row
         */
        if (index === 0) {
          if (!event.shiftKey) {
            rows[length - 1].focus();
          }
        } else {
          rows[index - 1].focus();
        }
        this.blockEvent(event);
        if (this.isMultiple && event.shiftKey) {
          this._doSelection(this._data[index - 1]);
          // if the checkboxes are all unselected then start over otherwise handle changing direction
          this._lastArrowKeyDirection = (!this._allSelected && !this._indeterminate) ? undefined : TdDataTableArrowKeyDirection.Ascending;
        }
        break;
      case DOWN_ARROW:
        rows = this._rows.toArray();
        length = rows.length;

        // check to see if changing direction and need to toggle the current row
        if (this._lastArrowKeyDirection === TdDataTableArrowKeyDirection.Ascending) {
          index--;
        }
        /** 
         * if users presses the down arrow, we focus the next row 
         * unless its the last row, then we move to the first row
         */
        if (index === (length - 1)) {
          if (!event.shiftKey) {
           rows[0].focus();
          }
        } else {
          rows[index + 1].focus();
        }
        this.blockEvent(event);
        if (this.isMultiple && event.shiftKey) {
          this._doSelection(this._data[index + 1]);
          // if the checkboxes are all unselected then start over otherwise handle changing direction
          this._lastArrowKeyDirection = (!this._allSelected && !this._indeterminate) ? undefined : TdDataTableArrowKeyDirection.Descending;
        }
        break;
      default:
        // default
    }
  }

  /**
   * Method to prevent the default events
   */
  blockEvent(event: Event): void {
    event.preventDefault();
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

  private _getNestedValue(name: string, value: any): string {
    if (!(value instanceof Object) || !name) {
      return value;
    }
    if (name.indexOf('.') > -1) {
      let splitName: string[] = name.split(/\.(.+)/, 2);
      return this._getNestedValue(splitName[1], value[splitName[0]]);
    } else {
      return value[name];
    }
  }

  /**
   * Does the actual Row Selection
   */
  private _doSelection(row: any): void {
    let wasSelected: boolean = this.isRowSelected(row);
    if (!this._multiple) {
      this.clearModel();
    }
    if (!wasSelected) {
      this._value.push(row);
    } else {
      // if selection is done by a [uniqueId] it uses it to compare, else it compares by reference.
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
    this._calculateCheckboxState();
    this.onRowSelect.emit({row: row, selected: this.isRowSelected(row)});
    this.onChange(this._value);
  }

  /**
   * Calculate all the state of all checkboxes
   */
  private _calculateCheckboxState(): void {
    this._calculateAllSelected();
    this._calculateIndeterminate();
  }

  /**
   * Checks if all visible rows are selected.
   */
  private _calculateAllSelected(): void {
    const match: string =
      this._data ? this._data.find((d: any) => !this.isRowSelected(d)) : true;
    this._allSelected = typeof match === 'undefined';
  }

  /**
   * Checks if all visible rows are selected.
   */
  private _calculateIndeterminate(): void {
    this._indeterminate = false;
    if (this._data) {
      for (let row of this._data) {
        if (!this.isRowSelected(row)) {
          continue;
        }
        this._indeterminate = true;
      }
    }
  }
}

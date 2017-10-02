import { Component, Input, Output, EventEmitter, Renderer2, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';

import { TdDataTableSortingOrder } from '../data-table.component';

export interface ITdDataTableSortChangeEvent {
  order: TdDataTableSortingOrder;
  name: string;
}

@Component({
  /* tslint:disable-next-line */
  selector: 'th[td-data-table-column]',
  styleUrls: ['./data-table-column.component.scss' ],
  templateUrl: './data-table-column.component.html',
})
export class TdDataTableColumnComponent {

  private _sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  @ViewChild('columnContent', {read: ElementRef}) _columnContent: ElementRef;

  get projectedWidth(): number {
    if (this._columnContent && this._columnContent.nativeElement) {
      return (<HTMLElement>this._columnContent.nativeElement).getBoundingClientRect().width;
    }
    return 100;
  }

  /**
   * name?: string
   * Sets unique column [name] for [sortable] events.
   */
  @Input('name') name: string = '';

  /**
   * sortable?: boolean
   * Enables sorting events, sort icons and active column states.
   * Defaults to 'false'
   */
  @Input('sortable') sortable: boolean = false;

  /**
   * active?: boolean
   * Sets column to active state when 'true'.
   * Defaults to 'false'
   */
  @Input('active') active: boolean = false;

  /**
   * numeric?: boolean
   * Makes column follow the numeric data-table specs and sort icon.
   * Defaults to 'false'
   */
  @Input('numeric') numeric: boolean = false;

  /**
   * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
   * Sets the sort order of column.
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

  /**
   * sortChange?: function
   * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
   * Emits an [ITdDataTableSortChangeEvent] implemented object.
   */
  @Output('sortChange') onSortChange: EventEmitter<ITdDataTableSortChangeEvent> =
                        new EventEmitter<ITdDataTableSortChangeEvent>();

  @HostBinding('class.mat-clickable')
  get bindClickable(): boolean {
    return this.sortable;
  }

  @HostBinding('class.mat-sortable')
  get bingSortable(): boolean {
    return this.sortable;
  }

  @HostBinding('class.mat-active')
  get bindActive(): boolean {
    return this.active;
  }

  @HostBinding('class.mat-numeric')
  get bindNumeric(): boolean {
    return this.numeric;
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column');
  }

  /**
   * Listening to click event on host to throw a sort event
   */
  @HostListener('click', ['event'])
  handleClick(): void {
    if (this.sortable) {
      this.onSortChange.emit({name: this.name, order: this._sortOrder});
    }
  }

  isAscending(): boolean {
    return this._sortOrder === TdDataTableSortingOrder.Ascending;
  }

  isDescending(): boolean {
    return this._sortOrder === TdDataTableSortingOrder.Descending;
  }

}

import { Component, Input, Output, EventEmitter, Renderer, ElementRef, HostBinding } from '@angular/core';

import { TdDataTableSortingOrder } from '../data-table.component';

export interface IDataTableSortChangeEvent {
  order: TdDataTableSortingOrder;
  name: string;
}

@Component({
  selector: 'th[td-data-table-column]',
  styleUrls: [ 'data-table-column.component.scss' ],
  templateUrl: 'data-table-column.component.html',
})
export class TdDataTableColumnComponent {

  private _sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  @Input('name') name: string = '';
  @Input('sortable') sortable: boolean = false;
  @Input('active') active: boolean = false;
  @Input('numeric') numeric: boolean = false;
  @Input('sortOrder')
  set sortOrder(order: 'ASC' | 'DESC') {
    let sortOrder: string = order ? order.toUpperCase() : 'ASC';
    if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
      throw '[sortOrder] must be empty, ASC or DESC';
    }

    this._sortOrder = sortOrder === 'ASC' ?
      TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
  }

  @Output('sortChange') onSortChange: EventEmitter<IDataTableSortChangeEvent> =
                        new EventEmitter<IDataTableSortChangeEvent>();

  @HostBinding('class.md-clickable')
  get bindClickable(): boolean {
    return this.sortable;
  }

  @HostBinding('class.md-sortable')
  get bingSortable(): boolean {
    return this.sortable;
  }

  @HostBinding('class.md-active')
  get bindActive(): boolean {
    return this.active;
  }

  @HostBinding('class.md-numeric')
  get bindNumeric(): boolean {
    return this.numeric;
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    this._renderer.setElementClass(this._elementRef.nativeElement, 'md-column', true);
  }

  handleSortBy(): void {
    this.onSortChange.emit({name: name, order: this._sortOrder});
  }

  isAscending(): boolean {
    return this._sortOrder === TdDataTableSortingOrder.Ascending;
  }

  isDescending(): boolean {
    return this._sortOrder === TdDataTableSortingOrder.Descending;
  }

}

import { Component, Input, Output, Renderer2, ElementRef, ContentChildren, QueryList, HostListener } from '@angular/core';

import { TdDataTableCellComponent } from '../data-table-cell/data-table-cell.component';
import { TdDataTableColumnComponent } from '../data-table-column/data-table-column.component';

@Component({
  /* tslint:disable-next-line */
  selector: 'tr[td-data-table-column-row]',
  styleUrls: ['./data-table-row.component.scss' ],
  templateUrl: './data-table-row.component.html',
})
export class TdDataTableColumnRowComponent {

  constructor(protected _elementRef: ElementRef, protected _renderer: Renderer2) {
    this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column-row');
  }

}

@Component({
  /* tslint:disable-next-line */
  selector: 'tr[td-data-table-row]',
  styleUrls: ['./data-table-row.component.scss' ],
  templateUrl: './data-table-row.component.html',
})
export class TdDataTableRowComponent {

  private _selected: boolean = false;

  @Input('selected')
  set selected(selected: boolean) {
    if (selected) {
      this._renderer.addClass(this._elementRef.nativeElement, 'td-selected');
    } else {
      this._renderer.removeClass(this._elementRef.nativeElement, 'td-selected');
    }
    this._selected = selected;
  }
  get selected(): boolean {
    return this._selected;
  }

  get height(): number {
    let height: number = 48;
    if (this._elementRef.nativeElement) {
      height = (<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().height;
    }
    return height;
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
  }

  /**
   * Listening to click event to explicitly focus the row element.
   */
  @HostListener('click', ['$event'])
  clickListener(): void {
    this.focus();
  }

  focus(): void {
    this._elementRef.nativeElement.focus();
  }

}

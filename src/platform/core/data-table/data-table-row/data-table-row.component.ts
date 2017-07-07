import { Component, Input, Renderer2, ElementRef } from '@angular/core';

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

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
  }

  focus(): void {
    this._elementRef.nativeElement.focus();
  }

}

import { Component, Renderer, ElementRef } from '@angular/core';

@Component({
  /* tslint:disable-next-line */
  selector: 'tr[td-data-table-row]',
  styleUrls: ['./data-table-row.component.scss' ],
  templateUrl: './data-table-row.component.html',
})
export class TdDataTableRowComponent {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    this._renderer.setElementClass(this._elementRef.nativeElement, 'td-data-table-row', true);
  }

}

import { Component, Renderer, ElementRef } from '@angular/core';

@Component({
  /* tslint:disable-next-line */
  selector: 'table[td-data-table]',
  styleUrls: ['./data-table-table.component.scss' ],
  templateUrl: './data-table-table.component.html',
})
export class TdDataTableTableComponent {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    this._renderer.setElementClass(this._elementRef.nativeElement, 'td-data-table', true);
  }

}

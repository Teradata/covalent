import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  /* tslint:disable-next-line */
  selector: 'tr[td-data-table-row]',
  styleUrls: ['./data-table-row.component.scss' ],
  templateUrl: './data-table-row.component.html',
})
export class TdDataTableRowComponent {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
  }
  
  focus(): void {
    this._elementRef.nativeElement.focus();
  }

}

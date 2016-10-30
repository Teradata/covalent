import { Component, Renderer, ElementRef } from '@angular/core';

@Component({
  selector: 'thead[td-data-table-head]',
  styleUrls: [ 'data-table-head.component.scss' ],
  templateUrl: 'data-table-head.component.html',
})
export class TdDataTableHeadComponent {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    this._renderer.setElementClass(this._elementRef.nativeElement, 'td-data-table-head', true);
  }

}

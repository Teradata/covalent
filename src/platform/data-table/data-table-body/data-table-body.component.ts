import { Component, Renderer, ElementRef } from '@angular/core';

@Component({
  selector: 'tbody[td-data-table-body]',
  styleUrls: [ 'data-table-body.component.scss' ],
  templateUrl: 'data-table-body.component.html',
})
export class TdDataTableBodyComponent {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    this._renderer.setElementClass(this._elementRef.nativeElement, 'td-data-table-body', true);
  }

}

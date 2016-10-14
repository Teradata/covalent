import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[td-cell]',
})
export class TdDataTableCellDirective {

  private _class: string = 'md-cell';

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    this._renderer.setElementClass(this._elementRef.nativeElement, this._class, true);
  }
}

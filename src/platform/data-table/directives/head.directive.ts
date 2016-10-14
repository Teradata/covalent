import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[td-head]',
})
export class TdDataTableHeadDirective {

  private _class: string = 'md-head';

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    this._renderer.setElementClass(this._elementRef.nativeElement, this._class, true);
  }
}

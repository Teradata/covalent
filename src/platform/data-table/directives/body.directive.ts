import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[td-body]',
})
export class TdDataTableBodyDirective {

  private _class: string = 'md-body';

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    this._renderer.setElementClass(this._elementRef.nativeElement, this._class, true);
  }
}

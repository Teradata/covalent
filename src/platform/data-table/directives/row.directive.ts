import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[td-row]',
})
export class TdDataTableRowDirective {

  private _class: string = 'md-row';

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    this._renderer.setElementClass(this._elementRef.nativeElement, this._class, true);
  }
}

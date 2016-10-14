import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[td-column]',
})
export class TdDataTableColumnDirective {

  private _class: string = 'md-column';

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    this._renderer.setElementClass(this._elementRef.nativeElement, this._class, true);
  }
}

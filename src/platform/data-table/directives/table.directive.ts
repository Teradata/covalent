import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[td-table]',
})
export class TdDataTableTableDirective {

  private _class: string = 'md-table';

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    this._renderer.setElementClass(this._elementRef.nativeElement, this._class, true);
  }
}

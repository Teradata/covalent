import { Component, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  /* tslint:disable-next-line */
  selector: 'td-layout-footer,td-layout-footer-inner',
  styleUrls: ['./layout-footer.component.scss' ],
  templateUrl: './layout-footer.component.html',
})
export class TdLayoutFooterComponent {

  private _color: 'primary' | 'accent' | 'warn';

  /**
   * color?: string
   *
   * Optional color option: primary | accent | warn.
   */
  @Input('color')
  set color(color: 'primary' | 'accent' | 'warn') {
    if (color) {
      this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
      this._color = color;
      this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
    }
  }
  get color(): 'primary' | 'accent' | 'warn' {
    return this._color;
  }

  constructor(private _renderer: Renderer2,
              private _elementRef: ElementRef) {
    this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-footer');
  }

}

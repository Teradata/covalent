import { Component, Input, Renderer2, ElementRef, inject } from '@angular/core';

@Component({
  /* tslint:disable-next-line */
  selector: 'td-layout-footer,td-layout-footer-inner',
  styleUrls: ['./layout-footer.component.scss'],
  templateUrl: './layout-footer.component.html',
})
export class TdLayoutFooterComponent {
  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);

  private _color?: 'primary' | 'accent' | 'warn';

  /**
   * color?: 'accent' | 'primary' | 'warn'
   *
   * Optional color option: primary | accent | warn.
   */
  @Input()
  set color(color: 'primary' | 'accent' | 'warn' | undefined) {
    if (color) {
      this._renderer.removeClass(
        this._elementRef.nativeElement,
        'mat-' + this._color,
      );
      this._color = color;
      this._renderer.addClass(
        this._elementRef.nativeElement,
        'mat-' + this._color,
      );
    }
  }
  get color(): 'primary' | 'accent' | 'warn' | undefined {
    return this._color;
  }

  constructor() {
    this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-footer');
  }
}

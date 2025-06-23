import { Directive, Input, Renderer2, ElementRef, inject } from '@angular/core';
import { TdLayoutComponent } from './layout.component';
import { BaseLayoutToggleDirective } from './layout-toggle.class';

@Directive({
  selector: '[tdLayoutToggle]',
})
export class TdLayoutToggleDirective extends BaseLayoutToggleDirective {
  @Input()
  set tdLayoutToggle(tdLayoutToggle: boolean | string) {
    this.disabled = !(<any>tdLayoutToggle === '' || tdLayoutToggle);
  }

  onClick(): void {
    this._layout?.toggle();
  }
}

@Directive({
  selector: '[tdLayoutClose]',
})
export class TdLayoutCloseDirective extends BaseLayoutToggleDirective {
  @Input()
  set tdLayoutClose(tdLayoutClose: boolean | string | undefined) {
    this.disabled = !(<any>tdLayoutClose === '' || tdLayoutClose);
  }

  onClick(): void {
    this._layout?.close();
  }
}

@Directive({
  selector: '[tdLayoutOpen]',
})
export class TdLayoutOpenDirective extends BaseLayoutToggleDirective {
  @Input('tdLayoutOpen')
  set tdLayoutClose(tdLayoutOpen: boolean) {
    this.disabled = !(<any>tdLayoutOpen === '' || tdLayoutOpen);
  }

  onClick(): void {
    this._layout?.open();
  }
}

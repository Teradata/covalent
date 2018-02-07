import { Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutNavListComponent } from './layout-nav-list.component';
import { LayoutToggle } from '../layout-toggle.class';

@Directive({
  selector: '[tdLayoutNavListToggle]',
})
export class TdLayoutNavListToggleDirective extends LayoutToggle {

  @Input('tdLayoutNavListToggle') 
  set tdLayoutNavListToggle(tdLayoutNavListToggle: boolean) {
    this.disabled = !(<any>tdLayoutNavListToggle === '' || tdLayoutNavListToggle);
  }

  constructor(@Inject(forwardRef(() => TdLayoutNavListComponent)) layout: TdLayoutNavListComponent,
              renderer: Renderer2,
              elementRef: ElementRef) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.toggle();
  }
}

@Directive({
  selector: '[tdLayoutNavListClose]',
})
export class TdLayoutNavListCloseDirective extends LayoutToggle {
  
  @Input('tdLayoutNavListClose') 
  set tdLayoutNavListClose(tdLayoutNavListClose: boolean) {
    this.disabled = !(<any>tdLayoutNavListClose === '' || tdLayoutNavListClose);
  }

  constructor(@Inject(forwardRef(() => TdLayoutNavListComponent)) layout: TdLayoutNavListComponent,
              renderer: Renderer2,
              elementRef: ElementRef) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.close();
  }
}

@Directive({
  selector: '[tdLayoutNavListOpen]',
})
export class TdLayoutNavListOpenDirective extends LayoutToggle {

  @Input('tdLayoutNavListOpen') 
  set tdLayoutNavListOpen(tdLayoutNavListOpen: boolean) {
    this.disabled = !(<any>tdLayoutNavListOpen === '' || tdLayoutNavListOpen);
  }

  constructor(@Inject(forwardRef(() => TdLayoutNavListComponent)) layout: TdLayoutNavListComponent,
              renderer: Renderer2,
              elementRef: ElementRef) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.open();
  }
}

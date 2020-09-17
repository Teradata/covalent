import { Optional, Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutNavListComponent } from './layout-nav-list.component';
import { BaseLayoutToggleDirectiive } from '../layout-toggle.class';

@Directive({
  selector: '[tdLayoutNavListToggle]',
  inputs: ['hideWhenOpened'],
})
export class TdLayoutNavListToggleDirective extends BaseLayoutToggleDirectiive {
  @Input('tdLayoutNavListToggle')
  set tdLayoutNavListToggle(tdLayoutNavListToggle: boolean) {
    this.disabled = !(<any>tdLayoutNavListToggle === '' || tdLayoutNavListToggle);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => TdLayoutNavListComponent)) layout: TdLayoutNavListComponent,
    renderer: Renderer2,
    elementRef: ElementRef,
  ) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.toggle();
  }
}

@Directive({
  selector: '[tdLayoutNavListClose]',
  inputs: ['hideWhenOpened'],
})
export class TdLayoutNavListCloseDirective extends BaseLayoutToggleDirectiive {
  @Input('tdLayoutNavListClose')
  set tdLayoutNavListClose(tdLayoutNavListClose: boolean) {
    this.disabled = !(<any>tdLayoutNavListClose === '' || tdLayoutNavListClose);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => TdLayoutNavListComponent)) layout: TdLayoutNavListComponent,
    renderer: Renderer2,
    elementRef: ElementRef,
  ) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.close();
  }
}

@Directive({
  selector: '[tdLayoutNavListOpen]',
  inputs: ['hideWhenOpened'],
})
export class TdLayoutNavListOpenDirective extends BaseLayoutToggleDirectiive {
  @Input('tdLayoutNavListOpen')
  set tdLayoutNavListOpen(tdLayoutNavListOpen: boolean) {
    this.disabled = !(<any>tdLayoutNavListOpen === '' || tdLayoutNavListOpen);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => TdLayoutNavListComponent)) layout: TdLayoutNavListComponent,
    renderer: Renderer2,
    elementRef: ElementRef,
  ) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.open();
  }
}

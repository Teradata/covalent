import { Optional, Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutManageListComponent } from './layout-manage-list.component';
import { LayoutToggleAbstractDirective } from '../layout-toggle.class';

@Directive({
  selector: '[tdLayoutManageListToggle]',
  inputs: ['hideWhenOpened'],
})
export class TdLayoutManageListToggleDirective extends LayoutToggleAbstractDirective {
  @Input('tdLayoutManageListToggle')
  set tdLayoutManageListToggle(tdLayoutManageListToggle: boolean) {
    this.disabled = !(<any>tdLayoutManageListToggle === '' || tdLayoutManageListToggle);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => TdLayoutManageListComponent)) layout: TdLayoutManageListComponent,
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
  selector: '[tdLayoutManageListClose]',
  inputs: ['hideWhenOpened'],
})
export class TdLayoutManageListCloseDirective extends LayoutToggleAbstractDirective {
  @Input('tdLayoutManageListClose')
  set tdLayoutManageListClose(tdLayoutManageListClose: boolean) {
    this.disabled = !(<any>tdLayoutManageListClose === '' || tdLayoutManageListClose);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => TdLayoutManageListComponent)) layout: TdLayoutManageListComponent,
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
  selector: '[tdLayoutManageListOpen]',
  inputs: ['hideWhenOpened'],
})
export class TdLayoutManageListOpenDirective extends LayoutToggleAbstractDirective {
  @Input('tdLayoutManageListOpen')
  set tdLayoutManageListOpen(tdLayoutManageListOpen: boolean) {
    this.disabled = !(<any>tdLayoutManageListOpen === '' || tdLayoutManageListOpen);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => TdLayoutManageListComponent)) layout: TdLayoutManageListComponent,
    renderer: Renderer2,
    elementRef: ElementRef,
  ) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.open();
  }
}

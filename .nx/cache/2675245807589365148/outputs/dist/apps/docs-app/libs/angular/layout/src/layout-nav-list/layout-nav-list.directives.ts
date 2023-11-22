import {
  Optional,
  Directive,
  Input,
  Renderer2,
  ElementRef,
  Inject,
  forwardRef,
} from '@angular/core';
import { TdLayoutNavListComponent } from './layout-nav-list.component';
import { BaseLayoutToggleDirective } from '../layout-toggle.class';

@Directive({
  selector: '[tdLayoutNavListToggle]',
})
export class TdLayoutNavListToggleDirective extends BaseLayoutToggleDirective {
  @Input()
  set tdLayoutNavListToggle(tdLayoutNavListToggle: boolean | string) {
    this.disabled = !(
      <any>tdLayoutNavListToggle === '' || tdLayoutNavListToggle
    );
  }

  constructor(
    @Optional()
    @Inject(forwardRef(() => TdLayoutNavListComponent))
    layout: TdLayoutNavListComponent,
    renderer: Renderer2,
    elementRef: ElementRef
  ) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.toggle();
  }
}

@Directive({
  selector: '[tdLayoutNavListClose]',
})
export class TdLayoutNavListCloseDirective extends BaseLayoutToggleDirective {
  @Input()
  set tdLayoutNavListClose(tdLayoutNavListClose: boolean) {
    this.disabled = !(<any>tdLayoutNavListClose === '' || tdLayoutNavListClose);
  }

  constructor(
    @Optional()
    @Inject(forwardRef(() => TdLayoutNavListComponent))
    layout: TdLayoutNavListComponent,
    renderer: Renderer2,
    elementRef: ElementRef
  ) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.close();
  }
}

@Directive({
  selector: '[tdLayoutNavListOpen]',
})
export class TdLayoutNavListOpenDirective extends BaseLayoutToggleDirective {
  @Input()
  set tdLayoutNavListOpen(tdLayoutNavListOpen: boolean | string) {
    this.disabled = !(<any>tdLayoutNavListOpen === '' || tdLayoutNavListOpen);
  }

  constructor(
    @Optional()
    @Inject(forwardRef(() => TdLayoutNavListComponent))
    layout: TdLayoutNavListComponent,
    renderer: Renderer2,
    elementRef: ElementRef
  ) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.open();
  }
}

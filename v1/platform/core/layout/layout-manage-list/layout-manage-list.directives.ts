import { Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutManageListComponent } from './layout-manage-list.component';
import { LayoutToggle } from '../layout-toggle.class';

@Directive({
  selector: '[tdLayoutManageListToggle]',
})
export class TdLayoutManageListToggleDirective extends LayoutToggle {

  @Input('tdLayoutManageListToggle') 
  set tdLayoutManageListToggle(tdLayoutManageListToggle: boolean) {
    this.disabled = !(<any>tdLayoutManageListToggle === '' || tdLayoutManageListToggle);
  }

  constructor(@Inject(forwardRef(() => TdLayoutManageListComponent)) layout: TdLayoutManageListComponent,
              renderer: Renderer2,
              elementRef: ElementRef) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.toggle();
  }
}

@Directive({
  selector: '[tdLayoutManageListClose]',
})
export class TdLayoutManageListCloseDirective extends LayoutToggle {
  
  @Input('tdLayoutManageListClose') 
  set tdLayoutManageListClose(tdLayoutManageListClose: boolean) {
    this.disabled = !(<any>tdLayoutManageListClose === '' || tdLayoutManageListClose);
  }

  constructor(@Inject(forwardRef(() => TdLayoutManageListComponent)) layout: TdLayoutManageListComponent,
              renderer: Renderer2,
              elementRef: ElementRef) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.close();
  }
}

@Directive({
  selector: '[tdLayoutManageListOpen]',
})
export class TdLayoutManageListOpenDirective extends LayoutToggle {

  @Input('tdLayoutManageListOpen') 
  set tdLayoutManageListOpen(tdLayoutManageListOpen: boolean) {
    this.disabled = !(<any>tdLayoutManageListOpen === '' || tdLayoutManageListOpen);
  }

  constructor(@Inject(forwardRef(() => TdLayoutManageListComponent)) layout: TdLayoutManageListComponent,
              renderer: Renderer2,
              elementRef: ElementRef) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.open();
  }
}

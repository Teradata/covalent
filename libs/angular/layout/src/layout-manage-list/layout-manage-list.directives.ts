import { Directive, Input, inject } from '@angular/core';
import { TdLayoutManageListComponent } from './layout-manage-list.component';
import { BaseLayoutToggleDirective } from '../layout-toggle.class';

@Directive({
  selector: '[tdLayoutManageListToggle]',
})
export class TdLayoutManageListToggleDirective extends BaseLayoutToggleDirective {
  @Input()
  set tdLayoutManageListToggle(tdLayoutManageListToggle: boolean | string) {
    this.disabled = !(
      <any>tdLayoutManageListToggle === '' || tdLayoutManageListToggle
    );
  }

  constructor() {
    super();
    this._layout = inject(TdLayoutManageListComponent);
  }

  onClick(): void {
    this._layout?.toggle();
  }
}

@Directive({
  selector: '[tdLayoutManageListClose]',
})
export class TdLayoutManageListCloseDirective extends BaseLayoutToggleDirective {
  @Input()
  set tdLayoutManageListClose(tdLayoutManageListClose: boolean) {
    this.disabled = !(
      <any>tdLayoutManageListClose === '' || tdLayoutManageListClose
    );
  }

  constructor() {
    super();
    this._layout = inject(TdLayoutManageListComponent);
  }

  onClick(): void {
    this._layout?.close();
  }
}

@Directive({
  selector: '[tdLayoutManageListOpen]',
})
export class TdLayoutManageListOpenDirective extends BaseLayoutToggleDirective {
  @Input()
  set tdLayoutManageListOpen(tdLayoutManageListOpen: boolean | string) {
    this.disabled = !(
      <any>tdLayoutManageListOpen === '' || tdLayoutManageListOpen
    );
  }

  constructor() {
    super();
    this._layout = inject(TdLayoutManageListComponent);
  }

  onClick(): void {
    this._layout?.open();
  }
}

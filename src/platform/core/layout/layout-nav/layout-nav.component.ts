import { Component, forwardRef, Inject, Optional } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { TdLayoutComponent } from '../layout.component';

@Component({
  selector: 'td-layout-nav',
  styleUrls: ['./layout-nav.component.scss' ],
  templateUrl: './layout-nav.component.html',
})
export class TdLayoutNavComponent {

  /**
   * title in toolbar
   */
  @Input('toolbarTitle') toolbarTitle: string;

  /**
   * icon for toolbar
   */
  @Input('icon') icon: string;

  /**
   * logo file for toolbar
   */
  @Input('logo') logo: string;

  /**
   * method thats called when menu is clicked
   */
  @Output('openMenu') onOpenMenu: EventEmitter<void> = new EventEmitter<void>();

  get isMainSidenavAvailable(): boolean {
    return !!this._layout;
  }

  constructor(@Optional() @Inject(forwardRef(() => TdLayoutComponent)) private _layout: TdLayoutComponent) {}

  public menuClick(): void {
    this._onMenuClick();
  }

  /**
   * emits menuEvent
   */
  private _onMenuClick(): void {
    if (this.isMainSidenavAvailable) {
      this.onOpenMenu.emit(undefined);
      this._layout.open();
    }
  }
}

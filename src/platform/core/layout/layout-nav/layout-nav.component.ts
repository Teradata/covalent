import { Component, Input, forwardRef, Inject, Optional } from '@angular/core';

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

  get isMainSidenavAvailable(): boolean {
    return !!this._layout;
  }

  constructor(@Optional() @Inject(forwardRef(() => TdLayoutComponent)) private _layout: TdLayoutComponent) {}

  openMainSidenav(): void {
    if (this.isMainSidenavAvailable) {
      this._layout.open();
    }
  }
}

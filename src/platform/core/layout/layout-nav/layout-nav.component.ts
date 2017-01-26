import { Component, Input, forwardRef, Inject, Optional } from '@angular/core';

import { TdLayoutComponent } from '../layout.component';

@Component({
  selector: 'td-layout-nav',
  styleUrls: ['./layout-nav.component.scss' ],
  templateUrl: './layout-nav.component.html',
})
export class TdLayoutNavComponent {

  /**
   * title?: string 
   * Title set in toolbar.
   */
  @Input('toolbarTitle') toolbarTitle: string;

  /**
   * icon?: string
   * icon name to be displayed before the title
   */
  @Input('icon') icon: string;

  /**
   * logo?: string
   * logo icon name to be displayed before the title.
   * If [icon] is set, then this will not be shown.
   */
  @Input('logo') logo: string;

  /**
   * Checks if there is a [TdLayoutComponent] as parent.
   */
  get isMainSidenavAvailable(): boolean {
    return !!this._layout;
  }

  constructor(@Optional() @Inject(forwardRef(() => TdLayoutComponent)) private _layout: TdLayoutComponent) {}

  /**
   * If main sidenav is available, it will open the sidenav of the parent [TdLayoutComponent].
   */
  openMainSidenav(): void {
    if (this.isMainSidenavAvailable) {
      this._layout.open();
    }
  }
}

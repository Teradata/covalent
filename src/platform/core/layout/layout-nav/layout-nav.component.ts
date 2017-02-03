import { Component, Input, forwardRef, Optional, Inject } from '@angular/core';

import { TdLayoutComponent } from '../layout.component';

import { Router } from '@angular/router';

@Component({
  selector: 'td-layout-nav',
  styleUrls: ['./layout-nav.component.scss' ],
  templateUrl: './layout-nav.component.html',
})
export class TdLayoutNavComponent {

  router: Router;

  /**
   * toolbarTitle?: string
   *
   * Title set in toolbar.
   */
  @Input('toolbarTitle') toolbarTitle: string;

  /**
   * icon?: string
   *
   * icon name to be displayed before the title
   */
  @Input('icon') icon: string;

  /**
   * logo?: string
   *
   * logo icon name to be displayed before the title.
   * If [icon] is set, then this will not be shown.
   */
  @Input('logo') logo: string;

  /**
   * color?: string
   *
   * toolbar color option: primary | accent | warn.
   * If [color] is not set, primary is used.
   */
  @Input('color') color: string = 'primary';

  /**
   * Checks if there is a [TdLayoutComponent] as parent.
   */
  get isMainSidenavAvailable(): boolean {
    return !!this._layout;
  }

  constructor(
    router: Router,
    @Optional()
    @Inject(forwardRef(() => TdLayoutComponent))
    private _layout: TdLayoutComponent) { this.router = router; }

  /**
   * If main sidenav is available, it will open the sidenav of the parent [TdLayoutComponent].
   */
  openMainSidenav(): void {
    this._layout.open();
  }

  /**
   * Go to the homepage.
   */
  goHome(): void {
    this.router.navigate(['/']);
  }
}

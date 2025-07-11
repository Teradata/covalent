import { Component, Input, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';

import {
  MatSidenav,
  MatDrawerToggleResult,
  MatSidenavContainer,
} from '@angular/material/sidenav';

import { ILayoutTogglable } from '../layout-toggle.class';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'td-layout-nav-list',
  styleUrls: ['./layout-nav-list.component.scss'],
  templateUrl: './layout-nav-list.component.html',
  imports: [CommonModule, MatSidenav, MatSidenavContainer, MatToolbar, MatIcon],
})
export class TdLayoutNavListComponent implements ILayoutTogglable {
  private _router = inject(Router, { optional: true });

  @ViewChild(MatSidenav, { static: true }) sidenav!: MatSidenav;

  /**
   * toolbarTitle?: string
   *
   * Title set in toolbar.
   */
  @Input() toolbarTitle?: string;

  /**
   * icon?: string
   * icon name to be displayed before the title
   */
  @Input() icon?: string;

  /**
   * logo?: string
   *
   * logo icon name to be displayed before the title.
   * If [icon] is set, then this will not be shown.
   */
  @Input() logo?: string;

  /**
   * color?: 'accent' | 'primary' | 'warn'
   *
   * toolbar color option: primary | accent | warn.
   * If [color] is not set, primary is used.
   */
  @Input() color?: 'accent' | 'primary' | 'warn';

  /**
   * mode?: 'side', 'push' or 'over'
   *
   * The mode or styling of the sidenav.
   * Defaults to "side".
   * See "MatSidenav" documentation for more info.
   *
   * https://github.com/angular/material2/tree/main/src/lib/sidenav
   */
  @Input() mode: 'side' | 'push' | 'over' = 'side';

  /**
   * opened?: boolean
   * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
   * Defaults to "true".
   *
   * See "MatSidenav" documentation for more info.
   *
   * https://github.com/angular/material2/tree/main/src/lib/sidenav
   */
  @Input() opened = true;

  /**
   * sidenavWidth?: string
   *
   * Sets the "width" of the sidenav in either "px" or "%"
   * Defaults to "350px".
   *
   * https://github.com/angular/material2/tree/main/src/lib/sidenav
   */
  @Input() sidenavWidth = '350px';

  /**
   * containerAutosize?: boolean
   *
   * Sets "autosize" of the sidenav-container.
   * Defaults to "false".
   *
   * See documentation for more info and potential performance risks.
   *
   * https://github.com/angular/material2/blob/main/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
   */
  @Input() containerAutosize = false;

  /**
   * navigationRoute?: string
   *
   * option to set the combined route for the icon, logo, and toolbarTitle.
   */
  @Input() navigationRoute?: string;

  /**
   * Checks if `ESC` should close the sidenav
   * Should only close it for `push` and `over` modes
   */
  get disableClose(): boolean {
    return this.mode === 'side';
  }

  /**
   * Checks if router was injected.
   */
  get routerEnabled(): boolean {
    return !!this._router && !!this.navigationRoute;
  }

  handleNavigationClick(): void {
    if (this.routerEnabled && this.navigationRoute) {
      this._router?.navigateByUrl(this.navigationRoute);
    }
  }

  /**
   * Proxy toggle method to access sidenav from outside (from td-layout template).
   */
  public toggle(): Promise<MatDrawerToggleResult> {
    return this.sidenav.toggle(!this.sidenav.opened);
  }

  /**
   * Proxy open method to access sidenav from outside (from td-layout template).
   */
  public open(): Promise<MatDrawerToggleResult> {
    return this.sidenav.open();
  }

  /**
   * Proxy close method to access sidenav from outside (from td-layout template).
   */
  public close(): Promise<MatDrawerToggleResult> {
    return this.sidenav.close();
  }
}

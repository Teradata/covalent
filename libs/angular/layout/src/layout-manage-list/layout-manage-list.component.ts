import { Component, Input, ViewChild } from '@angular/core';

import { MatSidenav, MatDrawerToggleResult, MatSidenavContainer } from '@angular/material/sidenav';

import { ILayoutTogglable } from '../layout-toggle.class';

@Component({
  selector: 'td-layout-manage-list',
  styleUrls: ['./layout-manage-list.component.scss'],
  templateUrl: './layout-manage-list.component.html',
  imports: [MatSidenav, MatSidenavContainer],
})
export class TdLayoutManageListComponent implements ILayoutTogglable {
  @ViewChild(MatSidenav, { static: true }) sidenav!: MatSidenav;

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
   *
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
   * Defaults to "257px".
   *
   * https://github.com/angular/material2/tree/main/src/lib/sidenav
   */
  @Input() sidenavWidth = '257px';

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
   * Checks if `ESC` should close the sidenav
   * Should only close it for `push` and `over` modes
   */
  get disableClose(): boolean {
    return this.mode === 'side';
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

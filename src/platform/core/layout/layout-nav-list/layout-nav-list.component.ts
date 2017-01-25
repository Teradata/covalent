import { Component, Input, ViewChild, forwardRef, Inject, Optional } from '@angular/core';

import { MdSidenav } from '@angular/material';

import { TdLayoutComponent } from '../layout.component';

@Component({
  selector: 'td-layout-nav-list',
  styleUrls: ['./layout-nav-list.component.scss' ],
  templateUrl: './layout-nav-list.component.html',
})
export class TdLayoutNavListComponent {

  @ViewChild(MdSidenav) _sideNav: MdSidenav;

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

  /**
   * Proxy toggle method to access sidenav from outside (from td-layout template).
   */
  public toggle(): void {
    this._sideNav.toggle();
  }

  /**
   * Proxy open method to access sidenav from outside (from td-layout template).
   */
  public open(): void {
    this._sideNav.open();
  }

  /**
   * Proxy close method to access sidenav from outside (from td-layout template).
   */
  public close(): void {
    this._sideNav.close();
  }

  openMainSidenav(): void {
    if (this.isMainSidenavAvailable) {
      this._layout.open();
    }
  }
}

import { Component, forwardRef, Inject, Optional } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';

import { MdSidenav } from '@angular/material';

import { TdLayoutComponent } from '../layout.component';

@Component({
  selector: 'td-layout-nav-list',
  styleUrls: ['./layout-nav-list.component.scss' ],
  templateUrl: './layout-nav-list.component.html',
})
export class TdLayoutNavListComponent {

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

  @ViewChild(MdSidenav) _sideNav: MdSidenav;

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

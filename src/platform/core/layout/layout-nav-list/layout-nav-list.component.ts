import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';

import { MdSidenav } from '@angular/material';

import { TdLayoutService } from '../services/layout.service';

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

  /**
   * title in toolbar
   * @deprecated since 0.9, use toolbarTitle instead
   */
  @Input()
  set title(title: string) {
    /* tslint:disable-next-line */
    console.warn("title is deprecated.  Please use toolbarTitle instead");
    this.toolbarTitle = title;
  }

  /**
   * title in toolbar
   * @deprecated since 0.9, use toolbarTitle instead
   */
  get title(): string {
    return this.toolbarTitle;
  }

  constructor(private layoutService: TdLayoutService) {

  }

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
    this.onOpenMenu.emit(undefined);
    this.layoutService.openSideNav('menu');
  }
}

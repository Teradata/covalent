import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';

import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES, MdSidenav } from '@angular2-material/sidenav';
import { MdIcon } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { TdLayoutService } from '../services/layout.service';

@Component({
  directives: [ MdToolbar , MD_SIDENAV_DIRECTIVES, MdIcon, MdButton, MD_LIST_DIRECTIVES],
  moduleId: module.id,
  selector: 'td-layout-nav-list',
  styleUrls: [ 'layout-nav-list.component.css' ],
  templateUrl: 'layout-nav-list.component.html',
})
export class TdLayoutNavListComponent {

  /**
   * title in toolbar
   */
  @Input('title') title: string;

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

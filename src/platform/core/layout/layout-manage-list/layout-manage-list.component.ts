import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';

import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES, MdSidenav } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { TdLayoutService } from '../services/layout.service';

@Component({
  directives: [ MdToolbar , MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES],
  moduleId: module.id,
  selector: 'td-layout-manage-list',
  styleUrls: [ 'layout-manage-list.component.css' ],
  templateUrl: 'layout-manage-list.component.html',
})
export class TdLayoutManageListComponent {

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

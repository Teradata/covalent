import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';

import { MdSidenav } from '@angular/material';

@Component({
  selector: 'td-layout-manage-list',
  styleUrls: ['./layout-manage-list.component.scss' ],
  templateUrl: './layout-manage-list.component.html',
})
export class TdLayoutManageListComponent {

  @ViewChild(MdSidenav) _sideNav: MdSidenav;

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
}

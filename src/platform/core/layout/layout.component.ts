import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { MdSidenav } from '@angular/material';

@Component({
  selector: 'td-layout',
  styleUrls: ['./layout.component.scss' ],
  templateUrl: './layout.component.html',
})
export class TdLayoutComponent {

  @ViewChild(MdSidenav) _sideNav: MdSidenav;

  /**
   * title in sideNav menu
   */
  @Input('sidenavTitle') sidenavTitle: string;

  /**
   * icon for title in sideNav menu
   */
  @Input('icon') icon: string;

  /**
   * logo file for title in sideNav menu
   */
  @Input('logo') logo: string;

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

import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { MdSidenav } from '@angular/material';

import { TdLayoutService } from './services/layout.service';

@Component({
  providers: [ TdLayoutService ],
  selector: 'td-layout',
  styleUrls: [ 'layout.component.scss' ],
  templateUrl: 'layout.component.html',
})
export class TdLayoutComponent implements OnDestroy, AfterViewInit {

  private _showUserMenu: boolean = false;
  private _subcriptions: Subscription[] = [];

  @ViewChild(MdSidenav) _sideNav: MdSidenav;

  /**
   * title in sideNav menu
   */
  @Input('title') title: string;

  /**
   * icon for title in sideNav menu
   */
  @Input('icon') icon: string;

  /**
   * logo file for title in sideNav menu
   */
  @Input('logo') logo: string;

  /**
   * displayName in menu for users
   */
  @Input('displayName') displayName: string;

  /**
   * method thats called when logout is clicked
   */
  @Output('logout') onLogoutEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private layoutService: TdLayoutService) {
    this._subcriptions.push(this.layoutService.registerSidenav('menu').subscribe(() => {
      this.open();
    }));
  }

  /**
   * removes subscriptions when destroyed
   */
  ngOnDestroy(): void {
    this._subcriptions.forEach((subs: Subscription) => {
      subs.unsubscribe();
    });
  }

  /**
   * subscribes as observable to the onClose() event from the sideNav to hide userMenu when closed.
   */
  ngAfterViewInit(): void {
    this._subcriptions.push(this._sideNav.onClose.asObservable().subscribe(() => {
      this._showUserMenu = false;
    }));
  }

  logoutClick(): void {
    this._onLogout();
  }

  /**
   * toggle userMenu to hide/show
   */
  toggleUserMenu(): void {
    this._showUserMenu = !this._showUserMenu;
  }

  isShowUserMenu(): boolean {
    return this._showUserMenu;
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
   * emits logoutEvent
   */
  private _onLogout(): void {
    this.onLogoutEvent.emit(undefined);
  }
}

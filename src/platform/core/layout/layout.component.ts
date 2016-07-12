import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES, MdSidenav } from '@angular2-material/sidenav';
import { MdIcon } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { TdLayoutService } from './services/layout.service';

@Component({
  directives: [ MdToolbar , MD_SIDENAV_DIRECTIVES, MdIcon, MdButton, MD_LIST_DIRECTIVES ],
  moduleId: module.id,
  providers: [ TdLayoutService ],
  selector: 'td-layout',
  styleUrls: [ 'layout.component.css' ],
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

import { Component, Input, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MdSidenav, MdSidenavToggleResult } from '@angular/material';

import { TdLayoutComponent } from '../layout.component';
import { TdLayoutService } from '../services/layout.service';

import { TdCollapseAnimation } from '../../common/animations/collapse/collapse.animation';

@Component({
  selector: 'td-navigation-drawer',
  styleUrls: ['./navigation-drawer.component.scss' ],
  templateUrl: './navigation-drawer.component.html',
  providers: [ TdLayoutService ],
  animations: [ TdCollapseAnimation() ],
})
export class TdNavigationDrawerComponent implements OnInit, OnDestroy {

  private _registerSubscription: Subscription;
  private _closeSubscription: Subscription;
  toggleMenu: boolean = false;
  @ViewChild(TdLayoutComponent) _layout: TdLayoutComponent;

  /**
   * title?: string
   * Title set in sideNav.
   */
  @Input('sidenavTitle') sidenavTitle: string;

  /**
   * icon?: string
   * icon name to be displayed before the title
   */
  @Input('icon') icon: string;

  /**
   * logo?: string
   * logo icon name to be displayed before the title.
   * If [icon] is set, then this will not be shown.
   */
  @Input('logo') logo: string;

  /**
   * username?: string
   * string to be displayed as part of the navigation drawer sublabel.
   * if [email] is not set, then [username] will be the toggle menu text.
   */
  @Input('username') username: string;

  /**
   * email?: string
   * string to be displayed as part of the navigation drawer sublabel in the [toggle] menu text.
   * if [email] and [username] are not set, then the toggle menu is not rendered.
   */
  @Input('email') email: string;

  constructor(private _layoutService: TdLayoutService) {}

  ngOnInit(): void {
    this._registerSubscription = this._layoutService.registerSidenav().subscribe(() => {
      this.open();
    });
    this._closeSubscription = this._layout._sideNav.onClose.subscribe(() => {
      this.toggleMenu = false;
    });
  }

  ngOnDestroy(): void {
    if (this._registerSubscription) {
      this._registerSubscription.unsubscribe();
      this._registerSubscription = undefined;
    }
    if (this._closeSubscription) {
      this._closeSubscription.unsubscribe();
      this._closeSubscription = undefined;
    }
  }

  /**
   * Proxy toggle method to access sidenav from outside (from td-layout template).
   */
  public toggle(): Promise<MdSidenavToggleResult> {
    return this._layout.toggle();
  }

  /**
   * Proxy open method to access sidenav from outside (from td-layout template).
   */
  public open(): Promise<MdSidenavToggleResult> {
    return this._layout.open();
  }

  /**
   * Proxy close method to access sidenav from outside (from td-layout template).
   */
  public close(): Promise<MdSidenavToggleResult> {
    return this._layout.close();
  }
}

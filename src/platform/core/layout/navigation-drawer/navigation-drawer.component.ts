import { Component, Directive, Input, ContentChildren, OnInit, OnDestroy, forwardRef, Inject, QueryList } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MdSidenavToggleResult } from '@angular/material';

import { TdLayoutComponent } from '../layout.component';

import { TdCollapseAnimation } from '../../common/animations/collapse/collapse.animation';

@Directive({
  selector: '[td-navigation-drawer-menu]',
})
export class TdNavigationDrawerMenuDirective {

}

@Component({
  selector: 'td-navigation-drawer',
  styleUrls: ['./navigation-drawer.component.scss' ],
  templateUrl: './navigation-drawer.component.html',
  animations: [ TdCollapseAnimation() ],
})
export class TdNavigationDrawerComponent implements OnInit, OnDestroy {

  private _closeSubscription: Subscription;
  private _menuToggled: boolean = false;

  get menuToggled(): boolean {
    return this._menuToggled;
  }

  @ContentChildren(TdNavigationDrawerMenuDirective) private _drawerMenu: QueryList<TdNavigationDrawerMenuDirective>;

  /**
   * Checks if there is a [TdNavigationDrawerMenuDirective] as content.
   */
  get isMenuAvailable(): boolean {
    return this._drawerMenu.length > 0;
  }

  /**
   * sidenavTitle?: string
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
   * name?: string
   * string to be displayed as part of the navigation drawer sublabel.
   * if [email] is not set, then [name] will be the toggle menu text.
   */
  @Input('name') name: string;

  /**
   * email?: string
   * string to be displayed as part of the navigation drawer sublabel in the [toggle] menu text.
   * if [email] and [name] are not set, then the toggle menu is not rendered.
   */
  @Input('email') email: string;

  /**
   * color?: string
   * toolbar color option: primary | accent | warn.
   * If [color] is not set, default is used.
   */
  @Input('color') color: string;

  constructor(@Inject(forwardRef(() => TdLayoutComponent)) private _layout: TdLayoutComponent) {}

  ngOnInit(): void {
    this._closeSubscription = this._layout.sidenav.onClose.subscribe(() => {
      this._menuToggled = false;
    });
  }

  ngOnDestroy(): void {
    if (this._closeSubscription) {
      this._closeSubscription.unsubscribe();
      this._closeSubscription = undefined;
    }
  }

  toggleMenu(): void {
    if (this.isMenuAvailable) {
      this._menuToggled = !this._menuToggled;
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

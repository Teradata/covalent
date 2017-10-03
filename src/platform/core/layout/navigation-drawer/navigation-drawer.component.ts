import { Component, Directive, Input, ContentChildren, OnInit, OnDestroy, forwardRef, Inject,
         QueryList, SecurityContext, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { SafeResourceUrl, SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';

import { MatDrawerToggleResult } from '@angular/material';

import { TdLayoutComponent } from '../layout.component';

import { TdCollapseAnimation } from '../../common/animations/collapse/collapse.animation';

@Directive({
  selector: '[td-navigation-drawer-menu]',
})
export class TdNavigationDrawerMenuDirective {

}

@Directive({
  selector: '[td-navigation-drawer-toolbar]',
})
export class TdNavigationDrawerToolbarDirective {

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
  private _backgroundImage: SafeStyle;

  get menuToggled(): boolean {
    return this._menuToggled;
  }

  @ContentChildren(TdNavigationDrawerMenuDirective) _drawerMenu: QueryList<TdNavigationDrawerMenuDirective>;

  @ContentChildren(TdNavigationDrawerToolbarDirective) _toolbar: QueryList<TdNavigationDrawerToolbarDirective>;

  /**
   * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
   */
  get isMenuAvailable(): boolean {
    return this._drawerMenu ? this._drawerMenu.length > 0 : false;
  }

  /**
   * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
   */
  get isCustomToolbar(): boolean {
    return this._toolbar ? this._toolbar.length > 0 : false;
  }

  /**
   * Checks if there is a background image for the toolbar.
   */
  get isBackgroundAvailable(): boolean {
    return !!this._backgroundImage;
  }

  /**
   * sidenavTitle?: string
   * Title set in sideNav.
   */
  @Input('sidenavTitle') sidenavTitle: string;

  /**
   * icon?: string
   *
   * icon name to be displayed before the title
   */
  @Input('icon') icon: string;

  /**
   * logo?: string
   *
   * logo icon name to be displayed before the title.
   * If [icon] is set, then this will not be shown.
   */
  @Input('logo') logo: string;

  /**
   * color?: string
   *
   * toolbar color option: primary | accent | warn.
   * If [color] is not set, default is used.
   */
  @Input('color') color: string;

  /**
   * navigationRoute?: string
   *
   * option to set the combined route for the icon, logo, and sidenavTitle.
   */
  @Input('navigationRoute') navigationRoute: string;

  /**
   * backgroundUrl?: SafeResourceUrl
   *
   * image to be displayed as the background of the toolbar.
   * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
   */
  @Input('backgroundUrl')
  // TODO angular complains with warnings if this is type [SafeResourceUrl].. so we will make it <any> until its fixed.
  // https://github.com/webpack/webpack/issues/2977
  set backgroundUrl(backgroundUrl: any) {
    if (backgroundUrl) {
      let sanitizedUrl: string = this._sanitize.sanitize(SecurityContext.RESOURCE_URL, backgroundUrl);
      this._backgroundImage = this._sanitize.sanitize(SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
    }
  }
  get backgroundImage(): SafeStyle {
    return this._backgroundImage;
  }

  /**
   * name?: string
   *
   * string to be displayed as part of the navigation drawer sublabel.
   * if [email] is not set, then [name] will be the toggle menu text.
   */
  @Input('name') name: string;

  /**
   * email?: string
   *
   * string to be displayed as part of the navigation drawer sublabel in the [toggle] menu text.
   * if [email] and [name] are not set, then the toggle menu is not rendered.
   */
  @Input('email') email: string;

  /**
   * Checks if router was injected.
   */
  get routerEnabled(): boolean {
    return !!this._router && !!this.navigationRoute;
  }

  constructor(@Inject(forwardRef(() => TdLayoutComponent)) private _layout: TdLayoutComponent,
              @Optional() private _router: Router,
              private _sanitize: DomSanitizer) {}

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

  handleNavigationClick(): void {
    if (this.routerEnabled) {
      this._router.navigateByUrl(this.navigationRoute);
      this.close();
    }
  }

  /**
   * Proxy toggle method to access sidenav from outside (from td-layout template).
   */
  public toggle(): Promise<MatDrawerToggleResult> {
    return this._layout.toggle();
  }

  /**
   * Proxy open method to access sidenav from outside (from td-layout template).
   */
  public open(): Promise<MatDrawerToggleResult> {
    return this._layout.open();
  }

  /**
   * Proxy close method to access sidenav from outside (from td-layout template).
   */
  public close(): Promise<MatDrawerToggleResult> {
    return this._layout.close();
  }
}

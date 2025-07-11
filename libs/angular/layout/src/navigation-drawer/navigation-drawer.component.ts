import {
  Component,
  Directive,
  Input,
  ContentChildren,
  OnInit,
  OnDestroy,
  QueryList,
  SecurityContext,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { MatDrawerToggleResult } from '@angular/material/sidenav';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TdLayoutComponent } from '../layout.component';

import { tdCollapseAnimation } from '@covalent/core/common';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Directive({
  selector: '[tdNavigationDrawerMenu]',
})
export class TdNavigationDrawerMenuDirective {}

@Directive({
  selector: '[tdNavigationDrawerToolbar]',
})
export class TdNavigationDrawerToolbarDirective {}

@Component({
  selector: 'td-navigation-drawer',
  styleUrls: ['./navigation-drawer.component.scss'],
  templateUrl: './navigation-drawer.component.html',
  animations: [tdCollapseAnimation],
  imports: [CommonModule, MatToolbar, MatIcon, MatIconButton],
})
export class TdNavigationDrawerComponent implements OnInit, OnDestroy {
  private _layout = inject(TdLayoutComponent);
  private _router = inject(Router, { optional: true });
  private _sanitize = inject(DomSanitizer);

  private _menuToggled = false;
  private _backgroundImage!: SafeStyle | null;
  private _destroy$ = new Subject<void>();

  get menuToggled(): boolean {
    return this._menuToggled;
  }

  @ContentChildren(TdNavigationDrawerMenuDirective, { descendants: true })
  _drawerMenu!: QueryList<TdNavigationDrawerMenuDirective>;

  @ContentChildren(TdNavigationDrawerToolbarDirective, { descendants: true })
  _toolbar!: QueryList<TdNavigationDrawerToolbarDirective>;

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
  @Input() sidenavTitle?: string;

  /**
   * icon?: string
   *
   * icon name to be displayed before the title
   */
  @Input() icon?: string;

  /**
   * logo?: string
   *
   * logo icon name to be displayed before the title.
   * If [icon] is set, then this will not be shown.
   */
  @Input() logo?: string;

  /**
   * avatar?: string
   *
   * avatar url to be displayed before the title
   * If [icon] or [logo] are set, then this will not be shown.
   */
  @Input() avatar?: string;

  /**
   * color?: 'accent' | 'primary' | 'warn'
   *
   * toolbar color option: primary | accent | warn.
   * If [color] is not set, default is used.
   */
  @Input() color?: 'accent' | 'primary' | 'warn';

  /**
   * navigationRoute?: string
   *
   * option to set the combined route for the icon, logo, and sidenavTitle.
   */
  @Input() navigationRoute?: string;

  /**
   * backgroundUrl?: SafeResourceUrl
   *
   * image to be displayed as the background of the toolbar.
   * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
   */
  @Input()
  // TODO Angular complains with warnings if this is type [SafeResourceUrl].. so we will make it <any> until its fixed.
  // https://github.com/webpack/webpack/issues/2977
  set backgroundUrl(backgroundUrl: any) {
    if (backgroundUrl) {
      const sanitizedUrl = this._sanitize.sanitize(
        SecurityContext.RESOURCE_URL,
        backgroundUrl,
      );
      this._backgroundImage = this._sanitize.sanitize(
        SecurityContext.STYLE,
        'url(' + sanitizedUrl + ')',
      );
    }
  }
  get backgroundImage(): SafeStyle | null {
    return this._backgroundImage;
  }

  /**
   * name?: string
   *
   * string to be displayed as part of the navigation drawer sublabel.
   * if [email] is not set, then [name] will be the toggle menu text.
   */
  @Input() name?: string;

  /**
   * email?: string
   *
   * string to be displayed as part of the navigation drawer sublabel in the [toggle] menu text.
   * if [email] and [name] are not set, then the toggle menu is not rendered.
   */
  @Input() email?: string;

  /**
   * Checks if router was injected.
   */
  get routerEnabled(): boolean {
    return !!this._router && !!this.navigationRoute;
  }

  ngOnInit(): void {
    this._layout.sidenav.openedChange
      .pipe(takeUntil(this._destroy$))
      .subscribe((opened: boolean) => {
        if (!opened) {
          this._menuToggled = false;
        }
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  toggleMenu(): void {
    if (this.isMenuAvailable) {
      this._menuToggled = !this._menuToggled;
    }
  }

  handleNavigationClick(): void {
    if (this.routerEnabled && this.navigationRoute) {
      this._router?.navigateByUrl(this.navigationRoute);
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

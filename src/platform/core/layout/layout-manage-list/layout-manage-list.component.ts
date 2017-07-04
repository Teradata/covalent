import { Component, Directive, Input, ViewChild, Inject, forwardRef, Renderer2, ElementRef } from '@angular/core';

import { MdSidenav, MdSidenavToggleResult } from '@angular/material';

import { LayoutToggle, ILayoutTogglable } from '../layout-toggle.class';

@Directive({
  selector: '[tdLayoutManageListToggle]',
})
export class TdLayoutManageListToggleDirective extends LayoutToggle {
  constructor(@Inject(forwardRef(() => TdLayoutManageListComponent)) layout: TdLayoutManageListComponent,
              renderer: Renderer2,
              elementRef: ElementRef) {
    super(layout, renderer, elementRef);
  }
}

@Component({
  selector: 'td-layout-manage-list',
  styleUrls: ['./layout-manage-list.component.scss' ],
  templateUrl: './layout-manage-list.component.html',
})
export class TdLayoutManageListComponent implements ILayoutTogglable {

  @ViewChild(MdSidenav) _sideNav: MdSidenav;

  /**
   * mode?: 'side', 'push' or 'over'
   *
   * The mode or styling of the sidenav.
   * Defaults to "side".
   * See "MdSidenav" documentation for more info.
   *
   * https://github.com/angular/material2/tree/master/src/lib/sidenav
   */
  @Input('mode') mode: 'side' | 'push' | 'over' = 'side';

  /**
   * opened?: boolean
   *
   * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
   * Defaults to "true".
   *
   * See "MdSidenav" documentation for more info.
   *
   * https://github.com/angular/material2/tree/master/src/lib/sidenav
   */
  @Input('opened') opened: boolean = true;

  /**
   * sidenavWidth?: string
   *
   * Sets the "width" of the sidenav in either "px" or "%"
   * Defaults to "257px".
   *
   * https://github.com/angular/material2/tree/master/src/lib/sidenav
   */
  @Input('sidenavWidth') sidenavWidth: string = '257px';

  /**
   * Checks if `ESC` should close the sidenav
   * Should only close it for `push` and `over` modes
   */
  get disableClose(): boolean {
    return this.mode === 'side';
  }

  /**
   * Proxy toggle method to access sidenav from outside (from td-layout template).
   */
  public toggle(): Promise<MdSidenavToggleResult> {
    return this._sideNav.toggle(!this._sideNav.opened);
  }

  /**
   * Proxy open method to access sidenav from outside (from td-layout template).
   */
  public open(): Promise<MdSidenavToggleResult> {
    return this._sideNav.open();
  }

  /**
   * Proxy close method to access sidenav from outside (from td-layout template).
   */
  public close(): Promise<MdSidenavToggleResult> {
    return this._sideNav.close();
  }

}

import { Component, Input, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MdSidenav, MdSidenavToggleResult } from '@angular/material';

import { TdLayoutService } from './services/layout.service';

@Component({
  selector: 'td-layout',
  styleUrls: ['./layout.component.scss' ],
  templateUrl: './layout.component.html',
})
export class TdLayoutComponent implements OnInit, OnDestroy {

  private _registerSubscription: Subscription;
  @ViewChild(MdSidenav) _sideNav: MdSidenav;

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

  constructor(private _layoutService: TdLayoutService) {}

  ngOnInit(): void {
    this._registerSubscription = this._layoutService.registerSidenav().subscribe(() => {
      this.open();
    });
  }

  ngOnDestroy(): void {
    if (this._registerSubscription) {
      this._registerSubscription.unsubscribe();
      this._registerSubscription = undefined;
    }
  }

  /**
   * Proxy toggle method to access sidenav from outside (from td-layout template).
   */
  public toggle(): Promise<MdSidenavToggleResult> {
    return this._sideNav.toggle();
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

import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { TdLayoutService } from '../services/layout.service';

@Component({
  selector: 'td-layout-nav',
  styleUrls: ['./layout-nav.component.scss' ],
  templateUrl: './layout-nav.component.html',
})
export class TdLayoutNavComponent {

  /**
   * title in toolbar
   */
  @Input('toolbarTitle') toolbarTitle: string;

  /**
   * icon for toolbar
   */
  @Input('icon') icon: string;

  /**
   * logo file for toolbar
   */
  @Input('logo') logo: string;

  /**
   * method thats called when menu is clicked
   */
  @Output('openMenu') onOpenMenu: EventEmitter<void> = new EventEmitter<void>();

  /**
   * title in toolbar
   * @deprecated since 0.9, use toolbarTitle instead
   */
  @Input()
  set title(title: string) {
    /* tslint:disable-next-line */
    console.warn("title is deprecated.  Please use toolbarTitle instead");
    this.toolbarTitle = title;
  }

  /**
   * title in toolbar
   * @deprecated since 0.9, use toolbarTitle instead
   */
  get title(): string {
    return this.toolbarTitle;
  }

  constructor(private layoutService: TdLayoutService) {

  }

  public menuClick(): void {
    this._onMenuClick();
  }

  /**
   * emits menuEvent
   */
  private _onMenuClick(): void {
    this.onOpenMenu.emit(undefined);
    this.layoutService.openSideNav('menu');
  }
}

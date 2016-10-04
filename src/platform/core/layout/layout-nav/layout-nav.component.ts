import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { TdLayoutService } from '../services/layout.service';

@Component({
  selector: 'td-layout-nav',
  styleUrls: [ 'layout-nav.component.scss' ],
  templateUrl: 'layout-nav.component.html',
})
export class TdLayoutNavComponent {

  /**
   * title in toolbar
   */
  @Input('title') title: string;

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

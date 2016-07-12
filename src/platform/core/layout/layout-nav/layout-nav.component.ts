import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';

import { TdLayoutService } from '../services/layout.service';

@Component({
  directives: [ MdToolbar , MD_SIDENAV_DIRECTIVES, MdIcon, MdButton ],
  moduleId: module.id,
  selector: 'td-layout-nav',
  styleUrls: [ 'layout-nav.component.css' ],
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

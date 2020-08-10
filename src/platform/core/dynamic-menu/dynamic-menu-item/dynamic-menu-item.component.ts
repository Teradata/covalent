import { Component, Input, ViewChild } from '@angular/core';
import { IMenuItem } from '../dynamic-menu.component';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'td-dynamic-menu-item',
  templateUrl: './dynamic-menu-item.component.html',
  styleUrls: ['./dynamic-menu-item.component.scss'],
})
export class TdDynamicMenuItemComponent {
  @Input() items: IMenuItem[];
  @ViewChild('childMenu', { static: true }) public childMenu: MatMenu;
}

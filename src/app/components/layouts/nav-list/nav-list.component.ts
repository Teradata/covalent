import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'layouts-nav-list',
  styleUrls: ['./nav-list.component.scss'],
  templateUrl: './nav-list.component.html',
  animations: [slideInDownAnimation],
})
export class NavListComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;

  items: Object[] = [{
    description: 'item description',
    icon: 'view_compact',
    title: 'Item Name',
  }, {
    description: 'item description',
    icon: 'view_quilt',
    title: 'Item Name',
  }, {
    description: 'item description',
    icon: 'view_day',
    title: 'Item Name',
  }, {
    description: 'item description',
    icon: 'view_list',
    title: 'Item Name',
  }];
}

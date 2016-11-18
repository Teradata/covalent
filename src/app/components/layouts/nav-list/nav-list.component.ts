import { Component } from '@angular/core';

@Component({
  selector: 'layouts-nav-list',
  styleUrls: ['nav-list.component.scss'],
  templateUrl: 'nav-list.component.html',
})
export class NavListComponent {
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

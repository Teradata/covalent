import { Component } from '@angular/core';

@Component({
  selector: 'layouts-nav-list',
  styleUrls: ['app/components/layouts/nav-list/nav-list.component.scss'],
  templateUrl: 'app/components/layouts/nav-list/nav-list.component.html',
})
export class NavListComponent {
  items: Object[] = [{
    description: 'A simple layout with toolbar & sidenav',
    icon: 'view_compact',
    route: '/nav-view',
    title: 'Nav View',
  }, {
    description: 'The Nav View with an embedded list',
    icon: 'view_quilt',
    route: '/nav-list',
    title: 'Nav List View',
  }, {
    description: 'A card overlaying a toolbar',
    icon: 'view_day',
    route: '/card-over',
    title: 'Card Over View',
  }, {
    description: 'Content/object management views',
    icon: 'view_list',
    route: '/manage-list',
    title: 'Management List View',
  }];
}

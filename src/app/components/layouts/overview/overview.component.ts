import { Component, HostBinding } from '@angular/core';

import { fadeAnimation } from '../../../app.animations';

@Component({
  selector: 'layouts-overview',
  styleUrls: ['./overview.component.scss'],
  templateUrl: './overview.component.html',
  animations: [fadeAnimation],
})
export class LayoutsOverviewComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  items: Object[] = [{
    description: 'A simple layout with toolbar & sidenav',
    icon: 'view_compact',
    route: 'nav-view',
    title: 'Nav View',
  }, {
    description: 'The Nav View with an embedded list',
    icon: 'view_quilt',
    route: 'nav-list',
    title: 'Nav List View',
  }, {
    description: 'A card overlaying a toolbar',
    icon: 'view_day',
    route: 'card-over',
    title: 'Card Over View',
  }, {
    description: 'Content/object management views',
    icon: 'view_list',
    route: 'manage-list',
    title: 'Management List View',
  }];

}

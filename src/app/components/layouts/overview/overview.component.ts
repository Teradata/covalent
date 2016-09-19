import { Component } from '@angular/core';

@Component({
  selector: 'layouts-overview',
  styleUrls: ['app/components/layouts/overview/overview.component.scss'],
  templateUrl: 'app/components/layouts/overview/overview.component.html',
})
export class LayoutsOverviewComponent {

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

import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'layouts-overview',
  styleUrls: ['./overview.component.scss'],
  templateUrl: './overview.component.html',
})
export class LayoutsOverviewComponent {
  items: object[] = [
    {
      description: 'A top toolbar only. Best for dashboards with no in-page navigation. A blank canvas.',
      icon: 'view_compact',
      route: 'nav-view',
      title: 'Nav View',
    },
    {
      description: 'Persistent left nav for category views, documentation or browsing lists.',
      icon: 'view_quilt',
      route: 'nav-list',
      title: 'Nav List',
    },
    {
      description: 'Used on this page, recommended for detail views, forms and blog posts.',
      icon: 'view_day',
      route: 'card-over',
      title: 'Card Over',
    },
    {
      description: 'Best for admin & management list views or sub-dashboards with their own left nav.',
      icon: 'view_list',
      route: 'manage-list',
      title: 'Management List',
    },
  ];
}

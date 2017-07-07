import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

import { fadeAnimation } from '../../../app.animations';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'layouts-card-over',
  styleUrls: ['./card-over.component.scss'],
  templateUrl: './card-over.component.html',
  animations: [fadeAnimation],
})
export class CardOverComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  routes: Object[] = [{
      icon: 'home',
      route: '.',
      title: 'Home',
    }, {
      icon: 'library_books',
      route: '.',
      title: 'Documentation',
    }, {
      icon: 'color_lens',
      route: '.',
      title: 'Style Guide',
    }, {
      icon: 'view_quilt',
      route: '.',
      title: 'Layouts',
    }, {
      icon: 'picture_in_picture',
      route: '.',
      title: 'Components & Addons',
    },
  ];
  usermenu: Object[] = [{
      icon: 'swap_horiz',
      route: '.',
      title: 'Switch account',
    }, {
      icon: 'tune',
      route: '.',
      title: 'Account settings',
    }, {
      icon: 'exit_to_app',
      route: '.',
      title: 'Sign out',
    },
  ];
  cardlist: Object[] = [{
      icon: 'account_box',
      route: '.',
      title: 'John Jameson',
      description: 'Owner',
    }, {
      icon: 'description',
      route: '.',
      title: 'An item description',
      description: 'Description',
    }, {
      icon: 'vpn_key',
      route: '.',
      title: '1141e8e8-8d24-4956-93c2',
      description: 'API Key',
    },
  ];
  carddates: Object[] = [{
      icon: 'access_time',
      route: '.',
      date: '2017-07-07T00:25:49+00:00',
      description: 'Last Updated',
    }, {
      icon: 'today',
      route: '.',
      date: '2017-07-04T00:25:49+00:00',
      description: 'Created',
    },
  ];
}

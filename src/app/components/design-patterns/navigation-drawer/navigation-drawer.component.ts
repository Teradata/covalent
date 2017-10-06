import { Component, HostBinding } from '@angular/core';

import { TdCollapseAnimation } from '@covalent/core';
import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'design-patterns-navigation-drawer',
  styleUrls: ['./navigation-drawer.component.scss'],
  templateUrl: './navigation-drawer.component.html',
  animations: [
    slideInDownAnimation,
    TdCollapseAnimation(),
  ],
})
export class NavigationDrawerComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  example1: boolean = true;

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

  toggle(div: string ): void {
    this[div] = !this[div];
  }
}

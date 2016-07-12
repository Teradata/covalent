import { RouterConfig } from '@angular/router';

import { LayoutsComponent } from './layouts.component';
import { OverviewComponent } from './overview';
import { NavViewComponent } from './nav-view';
import { NavListComponent } from './nav-list';
import { CardOverComponent } from './card-over';
import { ManageListComponent } from './manage-list';

export const layoutsRoutes: RouterConfig = [{
  children: [{
      component: OverviewComponent,
      path: '',
    }, {
      component: NavViewComponent,
      path: 'nav-view',
    }, {
      component: NavListComponent,
      path: 'nav-list',
    }, {
      component: CardOverComponent,
      path: 'card-over',
    }, {
      component: ManageListComponent,
      path: 'manage-list',
    },
  ],
  component: LayoutsComponent,
  path: 'layouts',
}];

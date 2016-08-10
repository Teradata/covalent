import { Routes, RouterModule } from '@angular/router';

import { LayoutsComponent } from './layouts.component';
import { LayoutsOverviewComponent } from './overview';
import { NavViewComponent } from './nav-view';
import { NavListComponent } from './nav-list';
import { CardOverComponent } from './card-over';
import { ManageListComponent } from './manage-list';

const routes: Routes = [{
  children: [{
      component: LayoutsOverviewComponent,
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

export const layoutsRoutes: any = RouterModule.forRoot(routes, { useHash: true });

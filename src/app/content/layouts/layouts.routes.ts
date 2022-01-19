import { Routes, RouterModule } from '@angular/router';

import { LayoutsComponent } from './layouts.component';
import { NavViewComponent } from './nav-view/nav-view.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { CardOverComponent } from './card-over/card-over.component';
import { ManageListComponent } from './manage-list/manage-list.component';

const routes: Routes = [
  {
    children: [
      {
        component: NavViewComponent,
        path: 'nav-view',
      },
      {
        component: NavListComponent,
        path: 'nav-list',
      },
      {
        component: CardOverComponent,
        path: 'card-over',
      },
      {
        component: ManageListComponent,
        path: 'manage-list',
      },
    ],
    component: LayoutsComponent,
    path: 'layouts',
  },
];

export const layoutsRoutes: any = RouterModule.forChild(routes);

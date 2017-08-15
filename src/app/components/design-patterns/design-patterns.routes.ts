import { Routes, RouterModule } from '@angular/router';

import { DesignPatternsComponent } from './design-patterns.component';
import { CardsComponent } from './cards/cards.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ManagementListComponent } from './management-list/management-list.component';
import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';

const routes: Routes = [{
  children: [{
      component: CardsComponent,
      path: '',
    }, {
      component: AlertsComponent,
      path: 'alerts',
    }, {
      component: ManagementListComponent,
      path: 'management-list',
    }, {
      component: NavigationDrawerComponent,
      path: 'navigation-drawer',
    },
  ],
  component: DesignPatternsComponent,
  path: 'design-patterns',
}];

export const designPatternsRoutes: any = RouterModule.forChild(routes);

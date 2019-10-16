import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { ComponentsOverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    children: [
      {
        component: ComponentsOverviewComponent,
        path: '',
      },
      {},
    ],
    component: ComponentsComponent,
    path: 'components',
  },
];

export const componentsRoutes: any = RouterModule.forChild(routes);

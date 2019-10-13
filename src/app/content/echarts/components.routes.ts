import { ComponentOverviewComponent } from '../../components/shared/component-overview/component-overview.component';
import { Routes, RouterModule } from '@angular/router';

import { GettingStartedComponent } from './getting-started/getting-started.component';

const routes: Routes = [
  {
    path: 'echarts',
    children: [
      {
        component: ComponentOverviewComponent,
        path: '',
        data: { category: 'echarts' },
      },
      {
        path: 'getting-started',
        component: GettingStartedComponent,
      },
      {
        path: 'combination',
        loadChildren: () => import('./chart-types/combination/combination.module').then((m) => m.CombinationModule),
      },
      {
        path: 'atomic',
        loadChildren: () =>
          /* tslint:disable-next-line */
          import('./atomic/atomic.module').then((m) => m.AtomicModule),
      },
    ],
  },
];

export const moduleRoutes: any = RouterModule.forChild(routes);

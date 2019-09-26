import { ComponentOverviewComponent } from '../shared/component-overview/component-overview.component';
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
      // {
      //   path: ':id',
      //   loadChildren: () => import('./echarts-details/content-details.module').then((m) => m.EchartsDetailsModule),
      // },
      // {
      //   path: 'bar',
      //   loadChildren: () => import('./chart-types/bar/bar.module').then((m) => m.BarDemoModule),
      // },
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

import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { ChartComponent } from './chart/chart.component';
import { ComponentsComponent } from './components.component';

const routes: Routes = [
  {
    component: ComponentsComponent,
    path: 'echarts',
    children: [
      {
        component: OverviewComponent,
        path: '',
      },
      {
        path: 'getting-started',
        component: GettingStartedComponent,
      },
      {
        path: 'chart',
        component: ChartComponent,
      },
      {
        path: 'types',
        loadChildren: () =>
          /* tslint:disable-next-line */
          import('./types/types.module').then(m => m.TypesModule),
      },
      {
        path: 'atomic',
        loadChildren: () =>
          /* tslint:disable-next-line */
          import('./atomic/atomic.module').then(m => m.AtomicModule),
      },
    ],
  },
];

export const moduleRoutes: any = RouterModule.forChild(routes);

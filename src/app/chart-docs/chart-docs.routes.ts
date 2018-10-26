import { Routes, RouterModule } from '@angular/router';

import {
  ChartTypesMainComponent,
  ChartTypesDocsComponent,
  BarDocsComponent,
  LineDocsComponent,
  ScatterDocsComponent,
  CombinationDocsComponent,
} from './';

const routes: Routes = [
  {
    component: ChartTypesDocsComponent,
    path: '',
    children: [
      {
        component: ChartTypesMainComponent,
        path: '',
      },
      {
        component: BarDocsComponent,
        path: 'bar',
      },
      {
        component: LineDocsComponent,
        path: 'line',
      },
      {
        component: CombinationDocsComponent,
        path: 'combination',
      },
      {
        component: ScatterDocsComponent,
        path: 'scatter',
      },
    ],
  },
];

export const chartTypesRoutes: any = RouterModule.forChild(routes);

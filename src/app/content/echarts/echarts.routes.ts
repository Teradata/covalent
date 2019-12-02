import { ComponentOverviewComponent } from '../../components/shared/component-overview/component-overview.component';
import { Routes, RouterModule } from '@angular/router';

import { setEchartRoutes } from './echarts-content';
import { TdReadmeLoaderComponent } from '../../documentation-tools/readme-loader/readme-loader.component';

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
        component: TdReadmeLoaderComponent,
        data: { resourceUrl: 'platform/echarts/README.md' },
      },
      {
        path: 'chart',
        children: setEchartRoutes({ id: 'chart', overviewDemoComponent: '' }),
      },
      {
        path: 'combination',
        loadChildren: () => import('./demos/combination/combination.module').then((m) => m.CombinationModule),
      },
      {
        path: 'bar',
        loadChildren: () => import('./demos/bar/bar.module').then((m) => m.BarModule),
      },
      {
        path: 'graph',
        loadChildren: () => import('./demos/graph/graph.module').then((m) => m.GraphModule),
      },
      {
        path: 'line',
        loadChildren: () => import('./demos/line/line.module').then((m) => m.LineModule),
      },
      {
        path: 'pie',
        loadChildren: () => import('./demos/pie/pie.module').then((m) => m.PieModule),
      },
      {
        path: 'sankey',
        loadChildren: () => import('./demos/sankey/sankey.module').then((m) => m.SankeyModule),
      },
      {
        path: 'scatter',
        loadChildren: () => import('./demos/scatter/scatter.module').then((m) => m.ScatterModule),
      },
      {
        path: 'tree',
        loadChildren: () => import('./demos/tree/tree.module').then((m) => m.TreeModule),
      },
      {
        path: 'treemap',
        loadChildren: () => import('./demos/treemap/treemap.module').then((m) => m.TreemapModule),
      },
      {
        path: 'tooltip',
        children: setEchartRoutes({ id: 'tooltip', overviewDemoComponent: '' }),
      },
      {
        path: 'axis',
        children: setEchartRoutes({ id: 'axis', overviewDemoComponent: '' }),
      },
      {
        path: 'toolbox',
        children: setEchartRoutes({ id: 'toolbox', overviewDemoComponent: '' }),
      },
      {
        path: 'dataset',
        children: setEchartRoutes({ id: 'dataset', overviewDemoComponent: '' }),
      },
    ],
  },
];

export const moduleRoutes: any = RouterModule.forChild(routes);

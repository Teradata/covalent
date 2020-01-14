import { ComponentOverviewComponent } from '../../../components/shared/component-overview/component-overview.component';
import { Routes, RouterModule } from '@angular/router';

import { setEchartRoutes } from './echarts-content';
import { TdReadmeLoaderComponent } from '../../../documentation-tools/readme-loader/readme-loader.component';

const routes: Routes = [
  {
    path: 'visualizations/echarts',
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
        loadChildren: () =>
          import('./echarts-demos/combination/combination.module').then((m: any) => m.CombinationModule),
      },
      {
        path: 'bar',
        loadChildren: () => import('./echarts-demos/bar/bar.module').then((m: any) => m.BarModule),
      },
      {
        path: 'graph',
        loadChildren: () => import('./echarts-demos/graph/graph.module').then((m: any) => m.GraphModule),
      },
      {
        path: 'line',
        loadChildren: () => import('./echarts-demos/line/line.module').then((m: any) => m.LineModule),
      },
      {
        path: 'map',
        loadChildren: () => import('./echarts-demos/map/map.module').then((m: any) => m.MapModule),
      },
      {
        path: 'pie',
        loadChildren: () => import('./echarts-demos/pie/pie.module').then((m: any) => m.PieModule),
      },
      {
        path: 'sankey',
        loadChildren: () => import('./echarts-demos/sankey/sankey.module').then((m: any) => m.SankeyModule),
      },
      {
        path: 'scatter',
        loadChildren: () => import('./echarts-demos/scatter/scatter.module').then((m: any) => m.ScatterModule),
      },
      {
        path: 'tree',
        loadChildren: () => import('./echarts-demos/tree/tree.module').then((m: any) => m.TreeModule),
      },
      {
        path: 'treemap',
        loadChildren: () => import('./echarts-demos/treemap/treemap.module').then((m: any) => m.TreemapModule),
      },
      {
        path: 'wordcloud',
        loadChildren: () => import('./echarts-demos/wordcloud/wordcloud.module').then((m: any) => m.WordcloudModule),
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

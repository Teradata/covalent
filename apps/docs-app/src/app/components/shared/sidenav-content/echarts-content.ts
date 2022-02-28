import { routeBuilder, IScopedRouteBuilder } from '../utilities/route-builder';
import { IComponentDetails } from '../component-interfaces';

export const echartsRoutesCategories: any = [
  { name: '', nested: false },
  { name: 'Base', nested: false },
  { name: 'Chart Types', nested: false, color: 'blue-800' },
  { name: 'Atomic Components', nested: false, color: 'orange-A400' },
];

const tabs: object = {
  showOverview: true,
  showAPI: true,
  showExamples: true,
  showMigration: false,
};

const [root, base, chartTypes, atomic] = echartsRoutesCategories;

export const createEchartDetails: any = [
  {
    name: 'Chart',
    id: 'chart',
    description: 'Base component that instantiates an echarts object',
    apiDocUrl: 'libs/angular-echarts/base/README.md',
    showExamples: false,
    showOverview: false,
    overviewDocUrl: '',
    icon: 'multiline_chart',
    category: base.name,
    route: '/echarts/chart',
    color: '',
  },
  {
    name: 'Bar',
    id: 'bar',
    description: '',
    apiDocUrl: 'libs/angular-echarts/bar/README.md',
    category: chartTypes.name,
    overviewDocUrl: '',
    icon: 'bar_chart',
    route: '/echarts/bar',
    demo: () =>
      import('./echarts-demos/bar/demos/bar-demo.module').then(
        (mod: any) => mod.BarDemoModule
      ),
  },
  // {
  //   name: 'Combination',
  //   id: 'combination',
  //   description: '',
  //   apiDocUrl: 'libs/angular-echarts/combination/README.md',
  //   overviewDocUrl: '',
  //   icon: 'multiline_chart',
  //   category: chartTypes.name,
  //   route: '/echarts/combination',
  //   color: '',
  //   demo: () =>
  //     import('./echarts-demos/combination/demos/combination-demo.module').then((mod: any) => mod.CombinationDemoModule),
  // },
  {
    name: 'Graph',
    id: 'graph',
    description: '',
    apiDocUrl: 'libs/angular-echarts/graph/README.md',
    overviewDocUrl: '',
    icon: 'grain',
    category: chartTypes.name,
    route: '/echarts/graph',
    color: '',
    demo: () =>
      import('./echarts-demos/graph/demos/graph-demo.module').then(
        (mod: any) => mod.GraphDemoModule
      ),
  },
  {
    name: 'Map',
    id: 'map',
    description: '',
    apiDocUrl: 'libs/angular-echarts/map/README.md',
    overviewDocUrl: '',
    icon: 'map',
    category: chartTypes.name,
    route: '/echarts/map',
    color: '',
    demo: () =>
      import('./echarts-demos/map/demos/map-demo.module').then(
        (mod: any) => mod.MapDemoModule
      ),
  },
  {
    name: 'Line',
    id: 'line',
    description: '',
    apiDocUrl: 'libs/angular-echarts/line/README.md',
    overviewDocUrl: '',
    icon: 'show_chart',
    category: chartTypes.name,
    route: '/echarts/line',
    color: '',
    demo: () =>
      import('./echarts-demos/line/demos/line-demo.module').then(
        (mod: any) => mod.LineDemoModule
      ),
  },
  {
    name: 'Pie',
    id: 'pie',
    description: '',
    apiDocUrl: 'libs/angular-echarts/pie/README.md',
    category: chartTypes.name,
    overviewDocUrl: '',
    icon: 'insert_chart',
    route: '/echarts/pie',
    demo: () =>
      import('./echarts-demos/pie/demos/pie-demo.module').then(
        (mod: any) => mod.PieDemoModule
      ),
  },
  {
    name: 'Sankey',
    id: 'sankey',
    description: '',
    apiDocUrl: 'libs/angular-echarts/sankey/README.md',
    overviewDocUrl: '',
    icon: 'call_split',
    category: chartTypes.name,
    route: '/echarts/sankey',
    color: '',
    demo: () =>
      import('./echarts-demos/sankey/demos/sankey-demo.module').then(
        (mod: any) => mod.SankeyDemoModule
      ),
  },
  {
    name: 'Scatter',
    id: 'scatter',
    description: '',
    apiDocUrl: 'libs/angular-echarts/scatter/README.md',
    overviewDocUrl: '',
    icon: 'bubble_chart',
    category: chartTypes.name,
    route: '/echarts/scatter',
    color: '',
    demo: () =>
      import('./echarts-demos/scatter/demos/scatter-demo.module').then(
        (mod: any) => mod.ScatterDemoModule
      ),
  },
  {
    name: 'Tree',
    id: 'tree',
    description: '',
    apiDocUrl: 'libs/angular-echarts/tree/README.md',
    overviewDocUrl: '',
    icon: 'share',
    category: chartTypes.name,
    route: '/echarts/tree',
    color: '',
    demo: () =>
      import('./echarts-demos/tree/demos/tree-demo.module').then(
        (mod: any) => mod.TreeDemoModule
      ),
  },
  {
    name: 'Treemap',
    id: 'treemap',
    description: '',
    apiDocUrl: 'libs/angular-echarts/treemap/README.md',
    overviewDocUrl: '',
    icon: 'dashboard',
    category: chartTypes.name,
    route: '/echarts/treemap',
    color: '',
    demo: () =>
      import('./echarts-demos/treemap/demos/treemap-demo.module').then(
        (mod: any) => mod.TreemapDemoModule
      ),
  },
  {
    name: 'Wordcloud',
    id: 'wordcloud',
    description: '',
    apiDocUrl: 'libs/angular-echarts/wordcloud/README.md',
    overviewDocUrl: '',
    icon: 'cloud_queue',
    category: chartTypes.name,
    route: '/echarts/wordcloud',
    color: '',
    demo: () =>
      import('./echarts-demos/wordcloud/demos/wordcloud-demo.module').then(
        (mod: any) => mod.WordcloudDemoModule
      ),
  },
  {
    name: 'Axis',
    id: 'axis',
    description: 'Control chart axis declaratively',
    apiDocUrl: 'libs/angular-echarts/base/src/axis/README.md',
    showExamples: false,
    showOverview: false,
    overviewDocUrl: '',
    icon: 'trending_flat',
    category: atomic.name,
    route: '/echarts/axis',
    color: '',
  },
  {
    name: 'Dataset',
    id: 'dataset',
    description: 'Add flexibility to manage chart data independently',
    apiDocUrl: 'libs/angular-echarts/base/src/dataset/README.md',
    showExamples: false,
    showOverview: false,
    overviewDocUrl: '',
    icon: 'view_list',
    category: atomic.name,
    route: '/echarts/dataset',
    color: '',
  },
  {
    name: 'Tooltip',
    id: 'tooltip',
    description: 'Display tooltips on charts',
    apiDocUrl: 'libs/angular-echarts/tooltip/README.md',
    showExamples: false,
    showOverview: false,
    overviewDocUrl: '',
    icon: 'info',
    category: atomic.name,
    route: '/echarts/tooltip',
    color: '',
  },
  {
    name: 'Toolbox',
    id: 'toolbox',
    description: 'Add a multi functional toolbox to charts',
    apiDocUrl: 'libs/angular-echarts/toolbox/README.md',
    showExamples: false,
    showOverview: false,
    overviewDocUrl: '',
    icon: 'art_track',
    category: atomic.name,
    route: '/echarts/toolbox',
    color: '',
  },
];

export const echartsContentDetails: IComponentDetails[] =
  createEchartDetails.map((component: IComponentDetails) => {
    return { ...tabs, ...component };
  });

export const setEchartRoutes: IScopedRouteBuilder = routeBuilder(
  echartsContentDetails
);

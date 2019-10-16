import { routeBuilder, IScopedRouteBuilder } from 'app/utilities/route-builder';

export const echartsRoutesCategories = [
  { name: '', nested: false },
  { name: 'Base', nested: false },
  { name: 'Chart Types', nested: false, color: 'blue-800' },
  { name: 'Atomic Components', nested: false },
];

const [root, base, chartTypes, atomic] = echartsRoutesCategories;

export const echartsContentDetails: any = [
  {
    name: 'Bar',
    id: 'bar',
    description: '',
    apiDocUrl: 'platform/echarts/bar/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    category: '',
    overviewDocUrl: '',
    icon: 'insert_chart',
    route: '/echarts/bar',
    color: 'orange-800',
  },
  {
    name: 'Combination',
    id: 'combination',
    description: '',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    overviewDocUrl: '',
    icon: 'multiline_chart',
    category: chartTypes.name,
    route: '/echarts/combination',
    color: '',
  },
];

export const setEchartRoutes: IScopedRouteBuilder = routeBuilder(echartsContentDetails);

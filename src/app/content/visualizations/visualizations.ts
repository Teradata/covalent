import { docsRouteBuilder } from 'app/utilities/route-builder';

export const vizRouteCategories: any = [
  { name: 'ECharts', nested: true, hasSubGroup: true, rootRoute: 'visualizations/echarts' },
  { name: 'Embeddings', nested: true, hasSubGroup: true, rootRoute: 'visualizations/embeddings' },
];

export const docsChildRoutes: object[] = docsRouteBuilder([]);

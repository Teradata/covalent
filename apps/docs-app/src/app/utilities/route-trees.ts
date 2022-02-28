import {
  componentDetails,
  componentRouteCategories,
} from '../content/components/components';
import {
  utilitiesRouteCategories,
  utilitiesContentDetails,
} from '../content/utilities/utilities-content';
import {
  echartsRoutesCategories,
  echartsContentDetails,
} from '../content/echarts/echarts-content';
import { docsRouteCategories, docsContentDetails } from '../content/docs/docs';

import {
  createRouteGroup,
  IRouteGroup,
  ICombinedRouteGroup,
} from './route-group';

export enum rootRoutes {
  Docs = '/docs',
  Components = '/components',
  ECharts = '/echarts',
  Utilities = '/utilities',
}

enum descriptions {
  Docs = 'some description',
  Components = 'Create views quickly with tested components that conform to Material Design',
  ECharts = 'Visualize your data easily. ECharts is an extensive "tried and true" charting library brought to Angular as Covalent Echarts',
  Utilities = 'Tools to help create, request, format, and animate',
}

export const docsRouteGroup: IRouteGroup[] = createRouteGroup({
  categories: docsRouteCategories,
  hasOverview: false,
  components: docsContentDetails,
  rootRoute: rootRoutes.Docs,
});

export const echartsRouteGroup: IRouteGroup[] = createRouteGroup({
  categories: echartsRoutesCategories,
  hasOverview: true,
  components: echartsContentDetails,
  rootRoute: rootRoutes.ECharts,
});

export const componentRoutesGroup: IRouteGroup[] = createRouteGroup({
  categories: componentRouteCategories,
  hasOverview: true,
  components: componentDetails,
  rootRoute: rootRoutes.Components,
});

export const utilitiesRouteGroup: IRouteGroup[] = createRouteGroup({
  categories: utilitiesRouteCategories,
  hasOverview: true,
  components: utilitiesContentDetails,
  rootRoute: rootRoutes.Utilities,
});

export const routeGroups: ICombinedRouteGroup[] = [
  {
    name: 'Documentation',
    description: descriptions.Docs,
    routeGroups: docsRouteGroup,
    rootRoute: rootRoutes.Docs,
  },
  {
    name: 'Components',
    description: descriptions.Components,
    routeGroups: componentRoutesGroup,
    rootRoute: rootRoutes.Components,
  },
  {
    name: 'ECharts',
    description: descriptions.ECharts,
    routeGroups: echartsRouteGroup,
    rootRoute: rootRoutes.ECharts,
  },
  {
    name: 'Utilities',
    description: descriptions.Utilities,
    routeGroups: utilitiesRouteGroup,
    rootRoute: rootRoutes.Utilities,
  },
];

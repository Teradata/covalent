import { componentDetails, componentRouteCategories } from 'app/content/components/components';
import { utilitiesRouteCategories, utilitiesContentDetails } from 'app/content/utilities/utilities-content';
import { echartsRoutesCategories, echartsContentDetails } from 'app/content/visualizations/echarts/echarts-content';
import {
  embeddingsContentDetails,
  embeddingsRoutesCategories,
} from 'app/content/visualizations/embeddings/embeddings-content';
import { docsRouteCategories, docsContentDetails } from 'app/content/docs/docs';
import { vizRouteCategories } from 'app/content/visualizations/visualizations';

import { createRouteGroup, IRouteGroup, ICombinedRouteGroup } from './route-group';

export enum rootRoutes {
  Docs = '/docs',
  Visualizations = '/visualizations',
  Components = '/components',
  ECharts = '/visualizations/echarts',
  Embeddings = '/visualizations/embeddings',
  Utilities = '/utilities',
}

enum descriptions {
  Docs = 'some description',
  Components = 'Create views quickly with tested components that conform to Material Design',
  ECharts = 'Visualize your data easily. ECharts is an extensive "tried and true" charting library brought to Angular as Covalent Echarts',
  Embeddings = 'Embed your external visualization easily with embedding components',
  Utilities = 'Tools to help create, request, format, and animate',
}

export const docsRouteGroup: IRouteGroup[] = createRouteGroup({
  categories: docsRouteCategories,
  hasOverview: false,
  components: docsContentDetails,
  rootRoute: rootRoutes.Docs,
});

export const vizRouteGroup: IRouteGroup[] = createRouteGroup({
  categories: vizRouteCategories,
  hasOverview: false,
  components: [],
  rootRoute: rootRoutes.Visualizations,
});

export const echartsRouteGroup: IRouteGroup[] = createRouteGroup({
  categories: echartsRoutesCategories,
  hasOverview: true,
  components: echartsContentDetails,
  rootRoute: rootRoutes.ECharts,
});

export const embeddingsRouteGroup: IRouteGroup[] = createRouteGroup({
  categories: embeddingsRoutesCategories,
  hasOverview: true,
  components: embeddingsContentDetails,
  rootRoute: rootRoutes.Embeddings,
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

const addSubgroupToRouteGroup: any = (routeGroup: any, subGroup: IRouteGroup, description: string) => {
  routeGroup.routeGroups = subGroup;
  routeGroup.description = description;
};

addSubgroupToRouteGroup(vizRouteGroup[0], echartsRouteGroup, descriptions.ECharts);
addSubgroupToRouteGroup(vizRouteGroup[1], embeddingsRouteGroup, descriptions.Embeddings);

export const routeGroups: ICombinedRouteGroup[] = [
  { name: 'Documentation', description: descriptions.Docs, routeGroups: docsRouteGroup, rootRoute: rootRoutes.Docs },
  {
    name: 'Components',
    description: descriptions.Components,
    routeGroups: componentRoutesGroup,
    rootRoute: rootRoutes.Components,
  },
  {
    name: 'Visualizations',
    description: '',
    routeGroups: vizRouteGroup,
    rootRoute: rootRoutes.Visualizations,
  },
  {
    name: 'Utilities',
    description: descriptions.Utilities,
    routeGroups: utilitiesRouteGroup,
    rootRoute: rootRoutes.Utilities,
  },
];

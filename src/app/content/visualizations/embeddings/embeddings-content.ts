import { routeBuilder, IScopedRouteBuilder } from 'app/utilities/route-builder';
import { Routes } from '@angular/router';
import { PowerBITokenResolver } from './embeddings-demos/powerbi/powerbi-token.resolver';

export const embeddingsRoutesCategories: any = [{ name: '', nested: false }];

const [root] = embeddingsRoutesCategories;

export const embeddingsContentDetails: any = [
  {
    name: 'MicroStrategy',
    id: 'microstrategy',
    description: 'Embedding component for MicroStrategy visualization rendering',
    apiDocUrl: 'platform/microstrategy-embed/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    hideExamples: false,
    hideOverview: false,
    overviewDocUrl: '',
    icon: 'bar_chart',
    category: root.name,
    route: '/visualizations/embeddings/microstrategy',
    color: '',
    demo: () =>
      import('./embeddings-demos/microstrategy/demos/microstrategy-demo.module').then(
        (mod: any) => mod.MicrostrategyDemoModule,
      ),
  },
  {
    name: 'Power BI',
    id: 'powerbi',
    description: 'Embedding component for Power BI visualization rendering',
    apiDocUrl: 'platform/powerbi-embed/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    hideExamples: false,
    hideOverview: false,
    overviewDocUrl: '',
    icon: 'multiline_chart',
    category: root.name,
    route: '/visualizations/embeddings/powerbi',
    color: '',
    demo: () =>
      import('./embeddings-demos/powerbi/demos/powerbi-demo.module').then((mod: any) => mod.PowerBIDemoModule),
  },
  {
    name: 'Tableau',
    id: 'tableau',
    description: 'Embedding component for Tableau visualization rendering',
    apiDocUrl: 'platform/tableau-embed/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    hideExamples: false,
    hideOverview: false,
    overviewDocUrl: '',
    icon: 'insert_chart',
    category: root.name,
    route: '/visualizations/embeddings/tableau',
    color: '',
    demo: () =>
      import('./embeddings-demos/tableau/demos/tableau-demo.module').then((mod: any) => mod.TableauDemoModule),
  },
];

export const setEmbeddingsRoutes: IScopedRouteBuilder = routeBuilder(embeddingsContentDetails);

export const addPowerBIResolverToRoutes: any = (routes: Routes) => {
  routes.forEach((route: any) => {
    route.children.forEach((child: any) => {
      if (child.path.match(/overview|examples/i)) {
        child.resolve = {
          tokenData: PowerBITokenResolver,
        };
      }
    });
  });
};

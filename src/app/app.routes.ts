import { provideRouter, RouterConfig, Route } from '@angular/router';

import { HomeComponent } from './components/home';

import { componentsRoutes } from './components/components/components.routes';
import { docsRoutes } from './components/docs/docs.routes';
import { layoutsRoutes } from './components/layouts/layouts.routes';
import { styleGuideRoutes } from './components/style-guide/style-guide.routes';

export const routes: RouterConfig = [{
    component: HomeComponent,
    path: '',
  },
  ...componentsRoutes,
  ...docsRoutes,
  ...layoutsRoutes,
  ...styleGuideRoutes,
];

export const APP_ROUTER_PROVIDERS: Route[] = [
  provideRouter(routes),
];

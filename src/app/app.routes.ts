import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { SelectivePreloadingStrategyService } from './services';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: TemplatesComponent,
    path: 'templates',
  },
  {
    // preload: true loads the module immediately
    path: '',
    data: { preload: false },
    loadChildren: () =>
      /* tslint:disable-next-line */
      import('./components/docs/docs.module').then((m) => m.DocsModule),
  },
  {
    // preload: true loads the module immediately
    path: '',
    data: { preload: false },
    loadChildren: () =>
      /* tslint:disable-next-line */
      import('./components/style-guide/style-guide.module').then((m) => m.StyleGuideModule),
  },
  {
    // preload: true loads the module immediately
    path: '',
    data: { preload: false },
    loadChildren: () =>
      /* tslint:disable-next-line */
      import('./components/design-patterns/design-patterns.module').then((m) => m.DesignPatternsModule),
  },
  {
    // preload: true loads the module immediately
    path: '',
    data: { preload: false },
    loadChildren: () =>
      /* tslint:disable-next-line */
      import('./components/layouts/layouts.module').then((m) => m.LayoutsModule),
  },
  {
    // preload: true loads the module immediately
    path: '',
    data: { preload: true },
    loadChildren: () =>
      /* tslint:disable-next-line */
      import('./components/components/components.module').then((m) => m.ComponentsModule),
  },
  {
    // preload: true loads the module immediately
    path: '',
    data: { preload: false },
    loadChildren: () =>
      /* tslint:disable-next-line */
      import('./components/echarts/components.module').then((m) => m.ComponentsModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

export const appRoutingProviders: any[] = [];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
  preloadingStrategy: SelectivePreloadingStrategyService,
});

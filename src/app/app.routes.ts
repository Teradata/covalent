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
    loadChildren: () => import('./components/docs/docs.module').then((m: any) => m.DocsModule),
  },
  {
    // preload: true loads the module immediately
    path: '',
    data: { preload: false },
    loadChildren: () => import('./components/style-guide/style-guide.module').then((m: any) => m.StyleGuideModule),
  },
  {
    // preload: true loads the module immediately
    path: '',
    data: { preload: false },
    loadChildren: () =>
      import('./components/design-patterns/design-patterns.module').then((m: any) => m.DesignPatternsModule),
  },
  {
    // preload: true loads the module immediately
    path: '',
    data: { preload: false },
    loadChildren: () => import('./components/layouts/layouts.module').then((m: any) => m.LayoutsModule),
  },
  {
    // preload: true loads the module immediately
    path: '',
    data: { preload: true },
    loadChildren: () => import('./components/components/components.module').then((m: any) => m.ComponentsModule),
  },
  {
    // preload: true loads the module immediately
    path: '',
    data: { preload: false },
    loadChildren: () => import('./components/echarts/components.module').then((m: any) => m.ComponentsModule),
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

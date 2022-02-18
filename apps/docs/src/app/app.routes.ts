import { Routes, RouterModule } from '@angular/router';

import { ContentContainerComponent } from './components/content-container/content-container.component';
import { SelectivePreloadingStrategyService } from './services';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    // preload: true loads the module immediately
    path: '',
    data: { preload: false },
    loadChildren: () =>
      /* tslint:disable-next-line */
      import('./content/layouts/layouts.module').then((m) => m.LayoutsModule),
  },
  {
    path: '',
    component: ContentContainerComponent,
    children: [
      {
        // preload: true loads the module immediately
        path: '',
        data: { preload: false },
        loadChildren: () =>
          /* tslint:disable-next-line */
          import('./content/docs/docs.module').then((m) => m.DocsModule),
      },
      {
        // preload: true loads the module immediately
        path: '',
        data: { preload: true },
        loadChildren: () =>
          /* tslint:disable-next-line */
          import('./content/components/components.module').then((m) => m.ComponentsModule),
      },
      {
        // preload: true loads the module immediately
        path: '',
        data: { preload: false },
        loadChildren: () =>
          /* tslint:disable-next-line */
          import('./content/echarts/echarts.module').then((m) => m.EchartsModule),
      },
      {
        // preload: true loads the module immediately
        path: '',
        data: { preload: false },
        loadChildren: () =>
          /* tslint:disable-next-line */
          import('./content/utilities/utilities.module').then((m) => m.UtilitiesModule),
      },
    ],
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
  scrollPositionRestoration: 'enabled',
  relativeLinkResolution: 'corrected',
  anchorScrolling: 'enabled',
});

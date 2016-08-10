import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home';

import { docsRoutes } from './components/docs/docs.routes';
import { layoutsRoutes } from './components/layouts/layouts.routes';
import { styleGuideRoutes } from './components/style-guide/style-guide.routes';

const routes: Routes = [{
    component: HomeComponent,
    path: '',
  },
  ...docsRoutes,
  ...layoutsRoutes,
  ...styleGuideRoutes,
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });

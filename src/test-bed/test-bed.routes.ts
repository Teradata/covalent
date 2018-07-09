import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbDemoComponent } from './sandbox/breadcrumbs/breadcrumbs.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    component: MainComponent,
    path: '',
  },
  {
    component: BreadcrumbDemoComponent,
    path: 'breadcrumbs',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
});

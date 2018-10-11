import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbDemoComponent } from './sandbox/breadcrumbs/breadcrumbs.component';
import { TabSelectDemoComponent } from './sandbox/tab-select/tab-select.component';
import { StepNavDemoComponent } from './sandbox/step-nav/step-nav.component';
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
  {
    component: TabSelectDemoComponent,
    path: 'tabselect',
  },
  {
    component: StepNavDemoComponent,
    path: 'stepnav',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
});

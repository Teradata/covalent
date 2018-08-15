import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbDemoComponent } from './sandbox/breadcrumbs/breadcrumbs.component';
import { TabSelectDemoComponent } from './sandbox/tab-select/tab-select.component';
import { MainComponent } from './main/main.component';
import { MultiSelectDemoComponent } from './sandbox/multiselect/multiselect.component';

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
    component: MultiSelectDemoComponent,
    path: 'multiselect',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
});

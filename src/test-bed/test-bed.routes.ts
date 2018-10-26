import { Routes, RouterModule } from '@angular/router';

import { TabSelectDemoComponent } from './sandbox/tab-select/tab-select.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    component: MainComponent,
    path: '',
  },
  {
    component: TabSelectDemoComponent,
    path: 'tabselect',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
});

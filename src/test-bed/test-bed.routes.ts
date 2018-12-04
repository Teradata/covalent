import { Routes, RouterModule } from '@angular/router';

import { NavStepperDemoComponent } from './sandbox/nav-stepper/nav-stepper.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    component: MainComponent,
    path: '',
  }, {
    component: NavStepperDemoComponent,
    path: 'navstepper',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
});

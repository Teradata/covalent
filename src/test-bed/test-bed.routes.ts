import { Routes, RouterModule } from '@angular/router';

import { NavStepperDemoComponent } from './sandbox/nav-stepper/nav-stepper.component';
import { TimepickerDemoComponent } from './sandbox/timepicker/timepicker.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    component: MainComponent,
    path: '',
  },
  {
    component: NavStepperDemoComponent,
    path: 'navstepper',
  },
  {
    component: TimepickerDemoComponent,
    path: 'timepicker',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
});

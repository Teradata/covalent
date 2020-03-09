import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  NavStepsDemoComponent,
  NavStepsRoute1DemoComponent,
  NavStepsRoute3DemoComponent,
  NavStepsRoute4DemoComponent,
} from './nav-steps-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NavStepsDemoComponent,
    children: [
      {
        path: '',
        component: NavStepsRoute1DemoComponent,
      },
      {
        path: 'route3',
        component: NavStepsRoute3DemoComponent,
      },
      {
        path: 'route4',
        component: NavStepsRoute4DemoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavStepsDemoRoutingModule {}

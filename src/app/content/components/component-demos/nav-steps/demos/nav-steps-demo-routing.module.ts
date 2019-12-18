import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavStepsDemoComponent } from './nav-steps-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NavStepsDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavStepsDemoRoutingModule {}

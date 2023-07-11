import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegressionDemoComponent } from './regression-demo.component';

const routes: Routes = [
  {
    path: '',
    component: RegressionDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegressionDemoRoutingModule {}

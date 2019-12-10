import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepsDemoComponent } from './steps-demo.component';

const routes: Routes = [
  {
    path: '',
    component: StepsDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepsDemosRoutingModule {}

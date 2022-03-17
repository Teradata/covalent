import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScatterDemoComponent } from './scatter-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ScatterDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScatterDemoRoutingModule {}

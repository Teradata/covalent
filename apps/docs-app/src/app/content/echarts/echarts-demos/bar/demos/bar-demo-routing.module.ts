import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarDemoComponent } from './bar-demo.component';

const routes: Routes = [
  {
    path: '',
    component: BarDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarDemoRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CombinationDemoComponent } from './combination-demo.component';

const routes: Routes = [
  {
    path: '',
    component: CombinationDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombinationDemoRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClusteringDemoComponent } from './clustering-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ClusteringDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClusteringDemoRoutingModule {}

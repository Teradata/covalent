import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreemapDemoComponent } from './treemap-demo.component';

const routes: Routes = [
  {
    path: '',
    component: TreemapDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreemapDemoRoutingModule {}

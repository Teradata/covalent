import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeDemoComponent } from './tree-demo.component';

const routes: Routes = [
  {
    path: '',
    component: TreeDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreeDemoRoutingModule {}

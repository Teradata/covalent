import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphDemoComponent } from './graph-demo.component';

const routes: Routes = [
  {
    path: '',
    component: GraphDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphDemoRoutingModule {}

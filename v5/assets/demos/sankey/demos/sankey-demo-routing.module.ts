import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SankeyDemoComponent } from './sankey-demo.component';

const routes: Routes = [
  {
    path: '',
    component: SankeyDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SankeyDemoRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableauDemoComponent } from './tableau-demo.component';

const routes: Routes = [
  {
    path: '',
    component: TableauDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableauDemoRoutingModule {}

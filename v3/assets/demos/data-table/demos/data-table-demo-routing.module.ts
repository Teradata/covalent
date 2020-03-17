import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTableDemoComponent } from './data-table-demo.component';

const routes: Routes = [
  {
    path: '',
    component: DataTableDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataTableDemoRoutingModule {}

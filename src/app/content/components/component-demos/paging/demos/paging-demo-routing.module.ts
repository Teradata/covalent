import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagingDemoComponent } from './paging-demo.component';

const routes: Routes = [
  {
    path: '',
    component: PagingDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagingDemoRoutingModule {}

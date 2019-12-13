import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSelectDemoComponent } from './tab-select-demo.component';

const routes: Routes = [
  {
    path: '',
    component: TabSelectDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSelectDemoRoutingModule {}

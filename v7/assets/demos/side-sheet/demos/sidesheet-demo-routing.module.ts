import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidesheetDemoComponent } from './sidesheet-demo.component';

const routes: Routes = [
  {
    path: '',
    component: SidesheetDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidesheetDemoRoutingModule {}

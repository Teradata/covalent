import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpansionPanelsDemoComponent } from './expansion-panels-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ExpansionPanelsDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpansionPanelsDemoRoutingModule {}

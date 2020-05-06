import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidedTourDemoComponent } from './guided-tour-demo.component';

const routes: Routes = [
  {
    path: '',
    component: GuidedTourDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidedTourDemoRoutingModule {}

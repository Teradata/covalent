import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicrostrategyDemoComponent } from './microstrategy-demo.component';

const routes: Routes = [
  {
    path: '',
    component: MicrostrategyDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableauDemoRoutingModule {}

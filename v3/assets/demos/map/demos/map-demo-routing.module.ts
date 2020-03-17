import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapDemoComponent } from './map-demo.component';

const routes: Routes = [
  {
    path: '',
    component: MapDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapDemoRoutingModule {}

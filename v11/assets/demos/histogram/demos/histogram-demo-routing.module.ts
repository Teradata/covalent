import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistogramDemoComponent } from './histogram-demo.component';

const routes: Routes = [
  {
    path: '',
    component: HistogramDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistogramDemoRoutingModule {}

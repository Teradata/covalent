import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirtualScrollDemoComponent } from './virtual-scroll-demo.component';

const routes: Routes = [
  {
    path: '',
    component: VirtualScrollDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualScrollDemoRoutingModule {}

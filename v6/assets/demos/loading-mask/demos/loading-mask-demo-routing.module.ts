import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingMaskDemoComponent } from './loading-mask-demo.component';

const routes: Routes = [
  {
    path: '',
    component: LoadingMaskDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingMaskDemoRoutingModule {}

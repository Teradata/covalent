import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingDemoComponent } from './loading-demo.component';

const routes: Routes = [
  {
    path: '',
    component: LoadingDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingDemoRoutingModule {}

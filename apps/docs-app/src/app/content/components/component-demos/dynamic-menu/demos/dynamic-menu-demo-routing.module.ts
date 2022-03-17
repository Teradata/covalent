import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicMenuDemoComponent } from './dynamic-menu-demo.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicMenuDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicMenuDemoRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbsDemoComponent } from './breadcrumbs-demo.component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbsDemoRoutingModule {}

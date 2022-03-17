import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicFormsDemoComponent } from './dynamic-forms-demo.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicFormsDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicFormsDemoRoutingModule {}

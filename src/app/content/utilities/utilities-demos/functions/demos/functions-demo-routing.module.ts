import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunctionsDemoComponent } from './functions-demo.component';

const routes: Routes = [
  {
    path: '',
    component: FunctionsDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunctionsDemoRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChipsDemoComponent } from './chips-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ChipsDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChipsDemoRoutingModule {}

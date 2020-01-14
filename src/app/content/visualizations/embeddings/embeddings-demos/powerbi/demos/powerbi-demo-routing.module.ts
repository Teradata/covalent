import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PowerBIDemoComponent } from './powerbi-demo.component';

const routes: Routes = [
  {
    path: '',
    component: PowerBIDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PowerBIDemoRoutingModule {}

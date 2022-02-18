import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogsDemoComponent } from './dialogs-demo.component';

const routes: Routes = [
  {
    path: '',
    component: DialogsDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogsDemoRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsDemoComponent } from './notifications-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationsDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsDemoRoutingModule {}

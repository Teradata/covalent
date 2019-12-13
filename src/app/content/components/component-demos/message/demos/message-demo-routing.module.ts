import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageDemoComponent } from './message-demo.component';

const routes: Routes = [
  {
    path: '',
    component: MessageDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageDemoRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileDemoComponent } from './user-profile-demo.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileDemoRoutingModule {}

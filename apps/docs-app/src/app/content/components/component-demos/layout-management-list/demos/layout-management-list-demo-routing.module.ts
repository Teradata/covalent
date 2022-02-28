import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutManagementListDemoComponent } from './layout-management-list-demo.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutManagementListDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutManagementListDemoRoutingModule {}

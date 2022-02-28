import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutNavListDemoComponent } from './layout-nav-list-demo.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutNavListDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutNavListDemoRoutingModule {}

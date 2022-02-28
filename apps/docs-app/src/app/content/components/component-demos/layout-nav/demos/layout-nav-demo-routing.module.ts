import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutNavDemoComponent } from './layout-nav-demo.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutNavDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutNavDemoRoutingModule {}

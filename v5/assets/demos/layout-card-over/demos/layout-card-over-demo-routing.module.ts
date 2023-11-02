import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutCardOverDemoComponent } from './layout-card-over-demo.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutCardOverDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutCardOverDemoRoutingModule {}

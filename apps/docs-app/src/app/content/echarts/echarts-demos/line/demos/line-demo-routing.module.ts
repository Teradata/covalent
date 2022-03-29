import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineDemoComponent } from './line-demo.component';

const routes: Routes = [
  {
    path: '',
    component: LineDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineDemoRoutingModule {}

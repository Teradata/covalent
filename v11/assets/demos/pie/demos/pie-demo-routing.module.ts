import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieDemoComponent } from './pie-demo.component';

const routes: Routes = [
  {
    path: '',
    component: PieDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PieDemoRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighlightDemoComponent } from './highlight-demo.component';

const routes: Routes = [
  {
    path: '',
    component: HighlightDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighlightDemoRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkdownNavigatorDemoComponent } from './markdown-navigator-demo.component';

const routes: Routes = [
  {
    path: '',
    component: MarkdownNavigatorDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkdownNavigatorDemoRoutingModule {}

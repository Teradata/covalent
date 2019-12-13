import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkdownDemoComponent } from './markdown-demo.component';

const routes: Routes = [
  {
    path: '',
    component: MarkdownDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkdownDemoRoutingModule {}

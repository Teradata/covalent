import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlavoredMarkdownDemoComponent } from './flavored-markdown-demo.component';

const routes: Routes = [
  {
    path: '',
    component: FlavoredMarkdownDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlavoredMarkdownDemoRoutingModule {}

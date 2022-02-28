import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectivesDemoComponent } from './directives-demo.component';

const routes: Routes = [
  {
    path: '',
    component: DirectivesDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivesDemoRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDemoComponent } from './search-demo.component';

const routes: Routes = [
  {
    path: '',
    component: SearchDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchDemoRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsonFormatterDemoComponent } from './json-formatter-demo.component';

const routes: Routes = [
  {
    path: '',
    component: JsonFormatterDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonFormatterDemoRoutingModule {}

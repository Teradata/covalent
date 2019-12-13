import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileInputDemoComponent } from './file-input-demo.component';

const routes: Routes = [
  {
    path: '',
    component: FileInputDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileInputDemoRoutingModule {}

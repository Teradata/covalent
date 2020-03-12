import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileUploadDemoComponent } from './file-upload-demo.component';

const routes: Routes = [
  {
    path: '',
    component: FileUploadDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileUploadDemoRoutingModule {}

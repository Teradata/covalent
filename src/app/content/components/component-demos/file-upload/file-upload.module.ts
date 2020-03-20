import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FileUploadDemoComponent } from './demos/file-upload-demo.component';
import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { CovalentFileModule } from '@covalent/core/file';
import { setComponentRoutes } from 'app/content/components/components';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: FileUploadDemoComponent,
  id: 'file-upload',
});

@NgModule({
  declarations: [],
  imports: [CommonModule, CovalentFileModule, ComponentDetailsModule, RouterModule.forChild(routes)],
})
export class FileUploadModule {}

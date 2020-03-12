import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FileUploadComponent } from './file-upload.component';
import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { CovalentFileModule } from '@covalent/core/file';
import { setComponentRoutes } from 'app/content/components/components';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: FileUploadComponent,
  id: 'file-upload',
});

@NgModule({
  declarations: [FileUploadComponent],
  imports: [CommonModule, CovalentFileModule, ComponentDetailsModule, RouterModule.forChild(routes)],
})
export class FileUploadModule {}

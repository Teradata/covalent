import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadDemoComponent } from './file-upload-demo.component';
import { FileUploadDemoBasicComponent } from './file-upload-demo-basic/file-upload-demo-basic.component';

import { FileUploadDemoRoutingModule } from './file-upload-demo-routing.module';

import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
@NgModule({
  declarations: [FileUploadDemoComponent, FileUploadDemoBasicComponent],
  imports: [CommonModule, FileUploadDemoRoutingModule, DemoModule],
})
export class FileUploadDemoModule {}

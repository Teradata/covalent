import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadDemoComponent } from './file-upload-demo.component';
import { FileUploadDemoBasicComponent } from './file-upload-demo-basic/file-upload-demo-basic.component';

import { FileUploadDemoRoutingModule } from './file-upload-demo-routing.module';

import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CovalentFileModule } from '@covalent/core/file';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FileUploadDemoComponent, FileUploadDemoBasicComponent],
  imports: [
    DemoModule,
    FileUploadDemoRoutingModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    CovalentFileModule,
    FormsModule,
  ],
})
export class FileUploadDemoModule {}

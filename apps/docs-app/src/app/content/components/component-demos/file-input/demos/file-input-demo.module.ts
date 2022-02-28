import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputDemoBasicComponent } from './file-input-demo-basic/file-input-demo-basic.component';
import { CovalentFileModule } from '@covalent/core/file';
import { FileInputDemoComponent } from './file-input-demo.component';
import { FileInputDemoRoutingModule } from './file-input-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FileInputDemoComponent, FileInputDemoBasicComponent],
  imports: [
    DemoModule,
    FileInputDemoRoutingModule,
    /** Covalent Modules */
    CovalentFileModule,
    /** Angular Modules */
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class FileInputDemoModule {}

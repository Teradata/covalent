import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputDemoBasicComponent } from './file-input-demo-basic/file-input-demo-basic.component';
import { CovalentFileModule } from '@covalent/core/file';
import { FileInputDemoComponent } from './file-input-demo.component';
import { FileInputDemoRoutingModule } from './file-input-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [
    FileInputDemoComponent,
    FileInputDemoBasicComponent
  ],
  imports: [
    DemoModule,
    FileInputDemoRoutingModule,
    /** Covalent Modules */
    CovalentFileModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class FileInputDemoModule {}

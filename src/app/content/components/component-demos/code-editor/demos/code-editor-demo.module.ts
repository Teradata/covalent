import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorDemoBasicComponent } from './code-editor-demo-basic/code-editor-demo-basic.component';
import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { CodeEditorDemoComponent } from './code-editor-demo.component';
import { CodeEditorDemoRoutingModule } from './code-editor-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CodeEditorDemoComponent, CodeEditorDemoBasicComponent],
  imports: [
    DemoModule,
    CodeEditorDemoRoutingModule,
    /** Covalent Modules */
    CovalentCodeEditorModule,
    /** Angular Modules */
    CommonModule,
    FormsModule,
  ],
})
export class CodeEditorDemoModule {}

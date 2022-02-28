import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { CodeEditorDemoComponent } from './code-editor-demo.component';
import { CodeEditorDemoRoutingModule } from './code-editor-demo-routing.module';
import { CodeEditorDemoMonacoComponent } from './code-editor-demo-monaco/code-editor-demo-monaco.component';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CodeEditorDemoBasicSharedModule } from './code-editor-demo-basic/code-editor-demo-basic-shared';

@NgModule({
  declarations: [CodeEditorDemoComponent, CodeEditorDemoMonacoComponent],
  imports: [
    CodeEditorDemoBasicSharedModule,
    DemoModule,
    CodeEditorDemoRoutingModule,
    /** Covalent Modules */
    CovalentCodeEditorModule,
    /** Angular Modules */
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class CodeEditorDemoModule {}

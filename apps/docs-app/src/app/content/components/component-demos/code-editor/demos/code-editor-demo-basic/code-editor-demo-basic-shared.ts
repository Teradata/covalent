import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TdHighlightComponent } from '@covalent/highlight';
import { CodeEditorDemoBasicComponent } from './code-editor-demo-basic.component';
import { TdCodeEditorComponent } from '@covalent/code-editor';

@NgModule({
  declarations: [CodeEditorDemoBasicComponent],
  imports: [
    /** Angular Modules */
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    /** Covalent Modules */
    TdCodeEditorComponent,
    TdHighlightComponent,
  ],
  exports: [CodeEditorDemoBasicComponent],
})
export class CodeEditorDemoBasicSharedModule {}

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TdCodeEditorComponent } from './code-editor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TdCodeEditorComponent],
  exports: [TdCodeEditorComponent],
  bootstrap: [TdCodeEditorComponent],
})
export class CovalentCodeEditorModule {}

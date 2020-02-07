import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TdTextEditorComponent } from './text-editor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TdTextEditorComponent],
  exports: [TdTextEditorComponent],
  bootstrap: [TdTextEditorComponent],
})
export class CovalentTextEditorModule {}

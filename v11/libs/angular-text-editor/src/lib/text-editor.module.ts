import { NgModule } from '@angular/core';
import { TdTextEditorComponent } from './text-editor.component';

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [TdTextEditorComponent],
  exports: [TdTextEditorComponent],
})
export class CovalentTextEditorModule {}

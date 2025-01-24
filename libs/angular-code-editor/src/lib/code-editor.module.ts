import { NgModule } from '@angular/core';
import { TdCodeEditorComponent } from './code-editor.component';

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [TdCodeEditorComponent],
  exports: [TdCodeEditorComponent],
})
export class CovalentCodeEditorModule {}

import { NgModule } from '@angular/core';
import { TdCodeEditorComponent } from './code-editor.component';

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
 */
@NgModule({
  imports: [TdCodeEditorComponent],
  exports: [TdCodeEditorComponent],
})
export class CovalentCodeEditorModule {}

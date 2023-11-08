import { NgModule } from '@angular/core';
import { TdTextEditorComponent } from './text-editor.component';

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
 */
@NgModule({
  imports: [TdTextEditorComponent],
  exports: [TdTextEditorComponent],
})
export class CovalentTextEditorModule {}

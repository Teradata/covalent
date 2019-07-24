import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TdTextEditorComponent } from './text-editor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TdTextEditorComponent],
  exports: [TdTextEditorComponent],
  entryComponents: [],
  bootstrap: [TdTextEditorComponent],
})
export class CovalentTextEditorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentTextEditorModule,
      providers: [],
    };
  }
}

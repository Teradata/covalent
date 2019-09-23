import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TdCodeEditorComponent } from './code-editor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TdCodeEditorComponent],
  exports: [TdCodeEditorComponent],
  entryComponents: [],
  bootstrap: [TdCodeEditorComponent],
})
export class CovalentCodeEditorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentCodeEditorModule,
      providers: [],
    };
  }
}

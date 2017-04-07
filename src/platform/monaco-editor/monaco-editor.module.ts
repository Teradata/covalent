import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TdMonacoEditorComponent } from './monaco-editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TdMonacoEditorComponent,
  ],
  exports: [
    TdMonacoEditorComponent,
  ],
})
export class CovalentMonacoEditorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentMonacoEditorModule,
      providers: [ ],
    };
  }
}

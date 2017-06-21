import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TdEditorComponent } from './editor.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TdEditorComponent,
  ],
  exports: [
    TdEditorComponent,
  ],
  entryComponents: [ ],
  bootstrap: [ TdEditorComponent ],
})
export class CovalentEditorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentEditorModule,
      providers: [ ],
    };
  }
}

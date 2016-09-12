import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdMarkdownComponent } from './markdown.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TdMarkdownComponent,
  ],
  exports: [
    TdMarkdownComponent,
  ],
})
export class CovalentMarkdownModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentMarkdownModule,
      providers: [],
    };
  }
}

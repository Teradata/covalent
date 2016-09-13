import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdHighlightComponent } from './highlight.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TdHighlightComponent,
  ],
  exports: [
    TdHighlightComponent,
  ],
})
export class CovalentHighlightModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentHighlightModule,
      providers: [],
    };
  }
}

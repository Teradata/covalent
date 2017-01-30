import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { TdJsonFormatterComponent } from './json-formatter.component';

export { TdJsonFormatterComponent } from './json-formatter.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    TdJsonFormatterComponent,
  ],
  exports: [
    TdJsonFormatterComponent,
  ],
})
export class CovalentJsonFormatterModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentJsonFormatterModule,
      providers: [],
    };
  }
}

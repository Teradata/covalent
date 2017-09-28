import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTooltipModule, MatIconModule } from '@angular/material';

import { TdJsonFormatterComponent } from './json-formatter.component';

export { TdJsonFormatterComponent } from './json-formatter.component';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule,
  ],
  declarations: [
    TdJsonFormatterComponent,
  ],
  exports: [
    TdJsonFormatterComponent,
  ],
})
export class CovalentJsonFormatterModule {

}

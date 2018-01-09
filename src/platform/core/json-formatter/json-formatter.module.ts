import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

import { TdJsonFormatterComponent } from './json-formatter.component';

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

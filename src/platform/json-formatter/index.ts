export { TdJsonFormatterComponent } from './json-formatter.component';
import { TdJsonFormatterComponent } from './json-formatter.component';

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { MdIconModule } from '@angular2-material/icon';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MdIconModule.forRoot(),
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

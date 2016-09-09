export { TdHighlightComponent } from './highlight.component';
import { TdHighlightComponent } from './highlight.component';

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
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
}

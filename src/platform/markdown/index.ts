export { TdMarkdownComponent } from './markdown.component';
import { TdMarkdownComponent } from './markdown.component';

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
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
}

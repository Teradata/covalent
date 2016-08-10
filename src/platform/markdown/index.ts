export { TdMarkdownComponent } from './markdown.component';
import { TdMarkdownComponent } from './markdown.component';

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
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
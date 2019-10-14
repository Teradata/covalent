import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdMarkdownComponent } from './markdown.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [TdMarkdownComponent],
  exports: [TdMarkdownComponent],
  providers: [HttpClientModule],
})
export class CovalentMarkdownModule {}

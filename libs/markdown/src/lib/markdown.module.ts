import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { TdMarkdownComponent } from './markdown.component';
import { TdMarkdownLoaderService } from './markdown-loader/markdown-loader.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [TdMarkdownComponent],
  exports: [TdMarkdownComponent],
  providers: [TdMarkdownLoaderService],
})
export class CovalentMarkdownModule {}

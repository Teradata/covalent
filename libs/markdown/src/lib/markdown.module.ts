import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { TdMarkdownComponent } from './markdown.component';
import { TdMarkdownLoaderService } from './markdown-loader/markdown-loader.service';

@NgModule({
  declarations: [TdMarkdownComponent],
  exports: [TdMarkdownComponent],
  imports: [CommonModule],
  providers: [
    TdMarkdownLoaderService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class CovalentMarkdownModule {}

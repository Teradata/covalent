import { NgModule } from '@angular/core';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { TdMarkdownComponent } from './markdown.component';
import { TdMarkdownLoaderService } from './markdown-loader/markdown-loader.service';

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  exports: [TdMarkdownComponent],
  imports: [TdMarkdownComponent],
  providers: [
    TdMarkdownLoaderService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class CovalentMarkdownModule {}

import { NgModule } from '@angular/core';
import { TdFlavoredListComponent } from './cfm-list/cfm-list.component';
import {
  TdFlavoredMarkdownComponent,
  TdFlavoredMarkdownContainerDirective,
  TdFlavoredMarkdownButtonComponent,
  TdFlavoredMarkdownTableComponent,
} from './flavored-markdown.component';
import { TdFlavoredMarkdownLoaderComponent } from './flavored-markdown-loader/flavored-markdown-loader.component';

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [
    TdFlavoredListComponent,
    TdFlavoredMarkdownComponent,
    TdFlavoredMarkdownContainerDirective,
    TdFlavoredMarkdownLoaderComponent,
    TdFlavoredMarkdownButtonComponent,
    TdFlavoredMarkdownTableComponent,
  ],
  exports: [TdFlavoredMarkdownComponent, TdFlavoredMarkdownLoaderComponent],
})
export class CovalentFlavoredMarkdownModule {}

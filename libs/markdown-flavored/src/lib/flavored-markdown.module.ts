import { NgModule } from '@angular/core';
import { TdFlavoredMarkdownComponent } from './flavored-markdown.component';
import { TdFlavoredMarkdownLoaderComponent } from './flavored-markdown-loader/flavored-markdown-loader.component';

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
 */
@NgModule({
  imports: [TdFlavoredMarkdownComponent, TdFlavoredMarkdownLoaderComponent],
  exports: [TdFlavoredMarkdownComponent, TdFlavoredMarkdownLoaderComponent],
})
export class CovalentFlavoredMarkdownModule {}

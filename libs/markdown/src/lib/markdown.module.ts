import { NgModule } from '@angular/core';
import { TdMarkdownComponent } from './markdown.component';

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
 */
@NgModule({
  imports: [TdMarkdownComponent],
  exports: [TdMarkdownComponent],
})
export class CovalentMarkdownModule {}

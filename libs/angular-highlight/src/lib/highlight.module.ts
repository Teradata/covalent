import { NgModule } from '@angular/core';
import { TdHighlightComponent } from './highlight.component';

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
 */
@NgModule({
  imports: [TdHighlightComponent],
  exports: [TdHighlightComponent],
})
export class CovalentHighlightModule {}

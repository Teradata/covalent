import { NgModule } from '@angular/core';
import { TdHighlightComponent } from './highlight.component';
import { TdCopyCodeButtonComponent } from './copy-code-button/copy-code-button.component';

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [TdHighlightComponent, TdCopyCodeButtonComponent],
  exports: [TdHighlightComponent],
})
export class CovalentHighlightModule {}

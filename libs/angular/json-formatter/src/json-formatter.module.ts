import { NgModule } from '@angular/core';
import { TdJsonFormatterComponent } from './json-formatter.component';

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [TdJsonFormatterComponent],
  exports: [TdJsonFormatterComponent],
})
export class CovalentJsonFormatterModule {}

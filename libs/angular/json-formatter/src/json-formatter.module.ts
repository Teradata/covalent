import { NgModule } from '@angular/core';
import { TdJsonFormatterComponent } from './json-formatter.component';

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
 */
@NgModule({
  imports: [TdJsonFormatterComponent],
  exports: [TdJsonFormatterComponent],
})
export class CovalentJsonFormatterModule {}

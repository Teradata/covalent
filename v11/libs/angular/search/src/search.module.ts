import { NgModule } from '@angular/core';
import { TdSearchInputComponent } from './search-input/search-input.component';
import { TdSearchBoxComponent } from './search-box/search-box.component';

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [TdSearchInputComponent, TdSearchBoxComponent],
  exports: [TdSearchInputComponent, TdSearchBoxComponent],
})
export class CovalentSearchModule {}

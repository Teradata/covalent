import { NgModule } from '@angular/core';
import { TdSearchInputComponent } from './search-input/search-input.component';
import { TdSearchBoxComponent } from './search-box/search-box.component';

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
 */
@NgModule({
  imports: [TdSearchInputComponent, TdSearchBoxComponent],
  exports: [TdSearchInputComponent, TdSearchBoxComponent],
})
export class CovalentSearchModule {}

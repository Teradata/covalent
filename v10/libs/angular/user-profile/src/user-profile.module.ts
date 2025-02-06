import { NgModule } from '@angular/core';
import { TdUserProfileComponent } from './user-profile.component';

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [TdUserProfileComponent],
  exports: [TdUserProfileComponent],
})
export class CovalentUserProfileModule {}

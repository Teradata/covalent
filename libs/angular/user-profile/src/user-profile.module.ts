import { NgModule } from '@angular/core';
import { TdUserProfileComponent } from './user-profile.component';

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
 */
@NgModule({
  imports: [TdUserProfileComponent],
  exports: [TdUserProfileComponent],
})
export class CovalentUserProfileModule {}

import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { TdMediaToggleDirective } from './directives/media-toggle.directive';

const TD_MEDIA: Type<any>[] = [TdMediaToggleDirective];

@NgModule({
  declarations: [TD_MEDIA],
  exports: [TD_MEDIA],
})
export class CovalentMediaModule {}

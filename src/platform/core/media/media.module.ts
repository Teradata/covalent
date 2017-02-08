import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TdMediaService } from './services/media.service';
import { TdMediaToggleDirective } from './directives/media-toggle.directive';

const TD_MEDIA: Type<any>[] = [
  TdMediaToggleDirective,
];

export { TdMediaService, TdMediaToggleDirective };

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TD_MEDIA,
  ],
  exports: [
    TD_MEDIA,
  ],
})
export class CovalentMediaModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentMediaModule,
      providers: [ TdMediaService ],
    };
  }
}

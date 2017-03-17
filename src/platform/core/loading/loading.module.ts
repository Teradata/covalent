import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { MdProgressBarModule, MdProgressSpinnerModule, OverlayModule, PortalModule } from '@angular/material';

import { TdLoadingService } from './services/loading.service';
import { TdLoadingFactory } from './services/loading.factory';
import { TdLoadingDirective } from './directives/loading.directive';
import { TdLoadingComponent } from './loading.component';

const TD_LOADING: Type<any>[] = [
  TdLoadingComponent,
  TdLoadingDirective,
];

const TD_LOADING_ENTRY_COMPONENTS: Type<any>[] = [
  TdLoadingComponent,
];

export { LoadingType, LoadingMode, LoadingStrategy } from './loading.component';
export { TdLoadingService, ITdLoadingConfig } from './services/loading.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    OverlayModule,
    PortalModule,
  ],
  declarations: [
    TD_LOADING,
  ],
  exports: [
    TD_LOADING,
  ],
  providers: [
    TdLoadingService,
    TdLoadingFactory,
  ],
  entryComponents: [
    TD_LOADING_ENTRY_COMPONENTS,
  ],
})
export class CovalentLoadingModule {
  /**
   * @deprecated in 1.0.0-beta.3
   *
   * Please use without calling forRoot()
   */
  static forRoot(): ModuleWithProviders {
    /* tslint:disable-next-line */
    console.warn('forRoot() has been deprecated in CovalentLoadingModule');
    return {
      ngModule: CovalentLoadingModule,
      providers: [ ],
    };
  }
}

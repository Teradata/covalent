import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

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
    TdLoadingFactory,
    TdLoadingService,
  ],
  entryComponents: [
    TD_LOADING_ENTRY_COMPONENTS,
  ],
})
export class CovalentLoadingModule {

}

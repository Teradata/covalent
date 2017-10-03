import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';

import { TdLoadingService, LOADING_PROVIDER } from './services/loading.service';
import { TdLoadingFactory, LOADING_FACTORY_PROVIDER } from './services/loading.factory';
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
    MatProgressBarModule,
    MatProgressSpinnerModule,
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
    LOADING_FACTORY_PROVIDER,
    LOADING_PROVIDER,
  ],
  entryComponents: [
    TD_LOADING_ENTRY_COMPONENTS,
  ],
})
export class CovalentLoadingModule {

}

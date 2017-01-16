import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { CovalentCommonModule } from '../common/common.module';

import { TdLoadingService } from './services/loading.service';
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
export { TdLoadingService, ILoadingOptions } from './services/loading.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    CovalentCommonModule.forRoot(),
  ],
  declarations: [
    TD_LOADING,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    CovalentCommonModule,

    TD_LOADING,
  ],
  entryComponents: [
    TD_LOADING_ENTRY_COMPONENTS,
  ],
})
export class CovalentLoadingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentLoadingModule,
      providers: [ TdLoadingService ],
    };
  }
}

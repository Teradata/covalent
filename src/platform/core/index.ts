import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

/**
 * NUCLEUS
 */

import { CovalentNucleusModule } from './nucleus/nucleus.module';
export * from './nucleus/nucleus.module';

/**
 * DIALOGS
 */

import { CovalentDialogsModule } from './dialogs/dialogs.module';
export * from './dialogs/dialogs.module';

/**
 * EXPANSION PANEL
 */

import { CovalenExpansionPanelModule } from './expansion-panel/expansion-panel.module';
export * from './expansion-panel/expansion-panel.module';

/**
 * LAYOUT
 */

import { CovalentLayoutModule } from './layout/layout.module';
export * from './layout/layout.module';

// Steps
import { TdStepsComponent } from './steps/steps.component';
import { TdStepHeaderComponent } from './steps/step-header/step-header.component';
import { TdStepBodyComponent } from './steps/step-body/step-body.component';
import { TdStepComponent, TdStepLabelDirective, TdStepActionsDirective,
         TdStepSummaryDirective } from './steps/step.component';

export const TD_STEP_DIRECTIVES: Type<any>[] = [
  TdStepsComponent,
  TdStepComponent,
  TdStepHeaderComponent,
  TdStepBodyComponent,
  TdStepLabelDirective,
  TdStepActionsDirective,
  TdStepSummaryDirective,
];

export { TdStepComponent, StepState  } from './steps/step.component';
export { TdStepsComponent, IStepChangeEvent, StepMode } from './steps/steps.component';

// Loading
import { TdLoadingService } from './loading/services/loading.service';
import { TdLoadingDirective } from './loading/directives/loading.directive';
import { TdLoadingComponent } from './loading/loading.component';

export const TD_LOADING_ENTRY_COMPONENTS: Type<any>[] = [
  TdLoadingComponent,
];

export { LoadingType, LoadingMode } from './loading/loading.component';
export { TdLoadingService, ILoadingOptions } from './loading/services/loading.service';

/**
 * MEDIA
 */
import { TdMediaService } from './media/services/media.service';
import { TdMediaToggleDirective } from './media/directives/media-toggle.directive';

export { TdMediaService } from './media/services/media.service';
export { TdMediaToggleDirective } from './media/directives/media-toggle.directive';

@NgModule({
  imports: [
    HttpModule,
    JsonpModule,
    FormsModule,
    CommonModule,
    MaterialModule.forRoot(),
    CovalentNucleusModule.forRoot(),
    CovalentDialogsModule.forRoot(),
    CovalenExpansionPanelModule.forRoot(),
    CovalentLayoutModule.forRoot(),
  ],
  declarations: [
    TdMediaToggleDirective,
    TdLoadingDirective,
    TdLoadingComponent,
    TD_STEP_DIRECTIVES,
  ],
  exports: [
    HttpModule,
    JsonpModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    CovalentNucleusModule,
    CovalentDialogsModule,
    CovalenExpansionPanelModule,
    CovalentLayoutModule,

    TdMediaToggleDirective,
    TdLoadingDirective,
    TdLoadingComponent,
    TD_STEP_DIRECTIVES,
  ],
  entryComponents: [ ],
})
export class CovalentCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentCoreModule,
      providers: [ TdMediaService, TdLoadingService ],
    };
  }
}

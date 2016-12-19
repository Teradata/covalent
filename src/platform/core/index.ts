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

// Layouts
import { TdLayoutComponent } from './layout/layout.component';
import { TdLayoutNavComponent } from './layout/layout-nav/layout-nav.component';
import { TdLayoutNavListComponent } from './layout/layout-nav-list/layout-nav-list.component';
import { TdLayoutCardOverComponent } from './layout/layout-card-over/layout-card-over.component';
import { TdLayoutManageListComponent } from './layout/layout-manage-list/layout-manage-list.component';
import { TdLayoutService } from './layout/services/layout.service';

export const TD_LAYOUT_DIRECTIVES: Type<any>[] = [
  TdLayoutComponent,
  TdLayoutNavComponent,
  TdLayoutNavListComponent,
  TdLayoutCardOverComponent,
  TdLayoutManageListComponent,
];

export const TD_LAYOUT_PROVIDERS: Type<any>[] = [
  TdLayoutService,
];

export { TdLayoutComponent } from './layout/layout.component';
export { TdLayoutNavComponent } from './layout/layout-nav/layout-nav.component';
export { TdLayoutNavListComponent } from './layout/layout-nav-list/layout-nav-list.component';
export { TdLayoutCardOverComponent } from './layout/layout-card-over/layout-card-over.component';
export { TdLayoutManageListComponent }  from './layout/layout-manage-list/layout-manage-list.component';

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

// Expansion
import { TdExpansionPanelComponent, TdExpansionPanelHeaderDirective, TdExpansionPanelLabelDirective,
         TdExpansionPanelSublabelDirective, TdExpansionPanelSummaryComponent }
         from './expansion-panel/expansion-panel.component';

export const TD_EXPANSION_DIRECTIVES: Type<any>[] = [
  TdExpansionPanelComponent,
  TdExpansionPanelHeaderDirective,
  TdExpansionPanelLabelDirective,
  TdExpansionPanelSublabelDirective,
  TdExpansionPanelSummaryComponent,
];

export { TdExpansionPanelComponent } from './expansion-panel/expansion-panel.component';

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
  ],
  declarations: [
    TdMediaToggleDirective,
    TD_LAYOUT_DIRECTIVES,
    TdLoadingDirective,
    TdLoadingComponent,
    TD_STEP_DIRECTIVES,
    TD_EXPANSION_DIRECTIVES,
  ],
  exports: [
    HttpModule,
    JsonpModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    CovalentNucleusModule,
    CovalentDialogsModule,

    TdMediaToggleDirective,
    TD_LAYOUT_DIRECTIVES,
    TdLoadingDirective,
    TdLoadingComponent,
    TD_STEP_DIRECTIVES,
    TD_EXPANSION_DIRECTIVES,
  ],
  entryComponents: [ ],
})
export class CovalentCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentCoreModule,
      providers: [ TdMediaService, TdLayoutService, TdLoadingService ],
    };
  }
}

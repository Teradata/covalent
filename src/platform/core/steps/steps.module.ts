import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import { MatIconModule, MatRippleModule } from '@angular/material';

import { CovalentCommonModule } from '../common/common.module';

// Steps
import { TdStepsComponent } from './steps.component';
import { TdStepHeaderComponent } from './step-header/step-header.component';
import { TdStepBodyComponent } from './step-body/step-body.component';
import { TdStepComponent, TdStepLabelDirective, TdStepActionsDirective,
         TdStepSummaryDirective } from './step.component';

const TD_STEPS: Type<any>[] = [
  TdStepsComponent,
  TdStepComponent,
  TdStepHeaderComponent,
  TdStepBodyComponent,
  TdStepLabelDirective,
  TdStepActionsDirective,
  TdStepSummaryDirective,
];

export { TdStepComponent, StepState  } from './step.component';
export { TdStepsComponent, IStepChangeEvent, StepMode } from './steps.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    PortalModule,
    ScrollDispatchModule,
    CovalentCommonModule,
  ],
  declarations: [
    TD_STEPS,
  ],
  exports: [
    TD_STEPS,
  ],
})
export class CovalentStepsModule {

}

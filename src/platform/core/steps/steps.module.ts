import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { CovalentNucleusModule } from '../nucleus/nucleus.module';

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
    MaterialModule.forRoot(),
    CovalentNucleusModule.forRoot(),
  ],
  declarations: [
    TD_STEPS,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    CovalentNucleusModule,

    TD_STEPS,
  ],
})
export class CovalentStepsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentStepsModule,
      providers: [ ],
    };
  }
}

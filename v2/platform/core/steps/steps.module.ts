import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

import { CovalentCommonModule } from '@covalent/core/common';

// Steps
import { TdStepsComponent } from './steps.component';
import { TdStepHeaderComponent } from './step-header/step-header.component';
import { TdStepBodyComponent } from './step-body/step-body.component';
import { TdStepComponent, TdStepLabelDirective, TdStepActionsDirective,
         TdStepSummaryDirective } from './step.component';

// Nav Steps
import { TdNavStepsHorizontalComponent } from './nav/nav-steps-horizontal/nav-steps-horizontal.component';
import { TdNavStepsVerticalComponent } from './nav/nav-steps-vertical/nav-steps-vertical.component';
import { TdNavStepLinkComponent } from './nav/nav-step-link/nav-step-link.component';

const TD_STEPS: Type<any>[] = [
  TdStepsComponent,
  TdStepComponent,
  TdStepHeaderComponent,
  TdStepBodyComponent,
  TdStepLabelDirective,
  TdStepActionsDirective,
  TdStepSummaryDirective,
  TdNavStepsHorizontalComponent,
  TdNavStepsVerticalComponent,
  TdNavStepLinkComponent,

];

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

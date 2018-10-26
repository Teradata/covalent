import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

import { PortalModule } from '@angular/cdk/portal';

import { TdHorizontalStepperComponent } from './horizontal-nav-stepper/horizontal-nav-stepper.component';
import { TdNavStepComponent } from './nav-step/nav-step.component';
import { TdNavStepHeaderComponent } from './nav-step-header/nav-step-header.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    PortalModule,
  ],
  declarations: [
    TdHorizontalStepperComponent,
    TdNavStepComponent,
    TdNavStepHeaderComponent,
  ],
  exports: [
    TdHorizontalStepperComponent,
    TdNavStepComponent,
  ],
})
export class CovalentNavStepperModule {

}

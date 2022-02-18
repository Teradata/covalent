import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuidedTourDemoBasicComponent } from './guided-tour-demo-basic.component';
import { CovalentGuidedTourModule } from '@covalent/guided-tour';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [GuidedTourDemoBasicComponent],
  imports: [CommonModule, CovalentGuidedTourModule, MatButtonModule],
  exports: [GuidedTourDemoBasicComponent],
})
export class GuidedTourDemoBasicSharedModule {}

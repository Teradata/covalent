import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicrostrategyDemoBasicComponent } from './microstrategy-demo-basic.component';
import { CovalentMicroStrategyModule } from '../../../../../../../../platform/microstrategy-embed';

@NgModule({
  declarations: [MicrostrategyDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    CovalentMicroStrategyModule,
    /** Angular Modules */
    CommonModule,
    // Material
  ],
  exports: [MicrostrategyDemoBasicComponent],
})
export class MicrostrategyBasicSharedModule {}

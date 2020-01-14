import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowerBIDemoBasicComponent } from './powerbi-demo-basic.component';
import { CovalentPowerBIModule } from '../../../../../../../../platform/powerbi-embed';
import { CovalentTableauModule } from '../../../../../../../../platform/tableau-embed';

@NgModule({
  declarations: [PowerBIDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    CovalentPowerBIModule,
    CovalentTableauModule,
    /** Angular Modules */
    CommonModule,
    // Material
  ],
  exports: [PowerBIDemoBasicComponent],
})
export class PowerBIBasicSharedModule {}

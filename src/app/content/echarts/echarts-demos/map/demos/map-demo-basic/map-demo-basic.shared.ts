import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovalentBaseEchartsModule } from '../../../../../../../platform/echarts/base';
import { CovalentTooltipEchartsModule } from '../../../../../../../platform/echarts/tooltip';
import { MapDemoBasicComponent } from './map-demo-basic.component';
import { CovalentMapEchartsModule } from '../../../../../../../platform/echarts/map';

@NgModule({
  declarations: [MapDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    CovalentMapEchartsModule,
    CovalentTooltipEchartsModule,
    /** Angular Modules */
    CommonModule,
    // Material
  ],
  exports: [MapDemoBasicComponent],
})
export class MapBasicSharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { MapDemoBasicComponent } from './map-demo-basic.component';
import { CovalentMapEchartsModule } from '@covalent/echarts/map';
import * as echarts from 'echarts';

@NgModule({
  declarations: [MapDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    CovalentBaseEchartsModule.forRoot({
      echarts,
    }),
    CovalentMapEchartsModule,
    CovalentTooltipEchartsModule,
    /** Angular Modules */
    CommonModule,
    // Material
  ],
  exports: [MapDemoBasicComponent],
})
export class MapBasicSharedModule {}

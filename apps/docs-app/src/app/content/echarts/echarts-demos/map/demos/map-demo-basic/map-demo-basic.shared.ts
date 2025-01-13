import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { MapDemoBasicComponent } from './map-demo-basic.component';
import { TdChartSeriesMapComponent } from '@covalent/echarts/map';

@NgModule({
  declarations: [MapDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    TdChartSeriesMapComponent,
    TdChartTooltipComponent,
    /** Angular Modules */
    CommonModule,
    // Material
  ],
  exports: [MapDemoBasicComponent],
})
export class MapBasicSharedModule {}

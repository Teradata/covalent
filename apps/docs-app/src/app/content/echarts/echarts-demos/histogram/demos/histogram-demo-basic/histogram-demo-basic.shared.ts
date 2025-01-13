import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartSeriesBarComponent } from '@covalent/echarts/bar';
import { TdChartSeriesHistogramComponent } from '@covalent/echarts/histogram';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartToolboxComponent } from '@covalent/echarts/toolbox';
import { HistogramDemoBasicComponent } from './histogram-demo-basic.component';

@NgModule({
  declarations: [HistogramDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    TdChartSeriesBarComponent,
    TdChartTooltipComponent,
    TdChartToolboxComponent,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    TdChartSeriesHistogramComponent,
  ],
  exports: [HistogramDemoBasicComponent],
})
export class HistogramBasicSharedModule {}

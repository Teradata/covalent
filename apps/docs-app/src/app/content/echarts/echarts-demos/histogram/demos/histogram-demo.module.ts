import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartSeriesLineComponent } from '@covalent/echarts/line';
import { TdChartSeriesBarComponent } from '@covalent/echarts/bar';
import { TdChartSeriesHistogramComponent } from '@covalent/echarts/histogram';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartToolboxComponent } from '@covalent/echarts/toolbox';
import { HistogramBasicSharedModule } from './histogram-demo-basic/histogram-demo-basic.shared';

import { HistogramDemoComponent } from './histogram-demo.component';
import { HistogramDemoRoutingModule } from './histogram-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [HistogramDemoComponent],
  imports: [
    HistogramBasicSharedModule,
    DemoModule,
    HistogramDemoRoutingModule,
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    TdChartSeriesLineComponent,
    TdChartSeriesBarComponent,
    TdChartSeriesHistogramComponent,
    TdChartTooltipComponent,
    TdChartToolboxComponent,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
})
export class HistogramDemoModule {}

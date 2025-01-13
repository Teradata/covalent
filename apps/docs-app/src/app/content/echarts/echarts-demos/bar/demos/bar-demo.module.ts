import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartSeriesLineComponent } from '@covalent/echarts/line';
import { TdChartSeriesBarComponent } from '@covalent/echarts/bar';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartToolboxComponent } from '@covalent/echarts/toolbox';
import { BarBasicSharedModule } from './bar-demo-basic/bar-demo-basic.shared';

import { BarDemoComponent } from './bar-demo.component';
import { BarDemoRoutingModule } from './bar-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [BarDemoComponent],
  imports: [
    BarBasicSharedModule,
    DemoModule,
    BarDemoRoutingModule,
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    TdChartSeriesLineComponent,
    TdChartSeriesBarComponent,
    TdChartTooltipComponent,
    TdChartToolboxComponent,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
})
export class BarDemoModule {}

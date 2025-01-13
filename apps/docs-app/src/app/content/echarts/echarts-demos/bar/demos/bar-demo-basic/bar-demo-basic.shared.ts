import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartSeriesBarComponent } from '@covalent/echarts/bar';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartToolboxComponent } from '@covalent/echarts/toolbox';
import { BarDemoBasicComponent } from './bar-demo-basic.component';

@NgModule({
  declarations: [BarDemoBasicComponent],
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
  ],
  exports: [BarDemoBasicComponent],
})
export class BarBasicSharedModule {}

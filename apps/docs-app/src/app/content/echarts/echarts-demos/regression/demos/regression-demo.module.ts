import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartSeriesRegressionComponent } from '@covalent/echarts/regression';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartToolboxComponent } from '@covalent/echarts/toolbox';
import { RegressionBasicSharedModule } from './regression-demo-basic/regression-demo-basic.shared';

import { RegressionDemoComponent } from './regression-demo.component';
import { RegressionDemoRoutingModule } from './regression-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [RegressionDemoComponent],
  imports: [
    RegressionBasicSharedModule,
    DemoModule,
    RegressionDemoRoutingModule,
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    TdChartSeriesRegressionComponent,
    TdChartTooltipComponent,
    TdChartToolboxComponent,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
})
export class RegressionDemoModule {}

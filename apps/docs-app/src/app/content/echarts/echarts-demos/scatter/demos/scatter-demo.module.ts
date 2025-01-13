import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartToolboxComponent } from '@covalent/echarts/toolbox';
import { TdChartSeriesScatterComponent } from '@covalent/echarts/scatter';

import { ScatterDemoBasicComponent } from './scatter-demo-basic/scatter-demo-basic.component';
import { ScatterDemoComponent } from './scatter-demo.component';
import { ScatterDemoRoutingModule } from './scatter-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [ScatterDemoComponent, ScatterDemoBasicComponent],
  imports: [
    DemoModule,
    ScatterDemoRoutingModule,
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    TdChartTooltipComponent,
    TdChartToolboxComponent,
    TdChartSeriesScatterComponent,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
})
export class ScatterDemoModule {}

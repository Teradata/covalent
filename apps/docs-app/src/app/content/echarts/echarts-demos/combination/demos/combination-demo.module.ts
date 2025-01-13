import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartSeriesLineComponent } from '@covalent/echarts/line';
import { TdChartSeriesBarComponent } from '@covalent/echarts/bar';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartToolboxComponent } from '@covalent/echarts/toolbox';

import { CombinationDemoBasicComponent } from './combination-demo-basic/combination-demo-basic.component';
import { CombinationDemoComponent } from './combination-demo.component';
import { CombinationDemoRoutingModule } from './combination-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [CombinationDemoComponent, CombinationDemoBasicComponent],
  imports: [
    DemoModule,
    CombinationDemoRoutingModule,
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
export class CombinationDemoModule {}

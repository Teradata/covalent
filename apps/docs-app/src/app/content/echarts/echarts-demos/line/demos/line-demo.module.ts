import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartToolboxComponent } from '@covalent/echarts/toolbox';

import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { LineDemoComponent } from './line-demo.component';
import { LineDemoRoutingModule } from './line-demo-routing.module';
import { LineDemoBasicComponent } from './line-demo-basic/line-demo-basic.component';
import { TdChartSeriesLineComponent } from '@covalent/echarts/line';

@NgModule({
  declarations: [LineDemoComponent, LineDemoBasicComponent],
  imports: [
    DemoModule,
    LineDemoRoutingModule,
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    TdChartTooltipComponent,
    TdChartToolboxComponent,
    TdChartSeriesLineComponent,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
})
export class LineDemoModule {}

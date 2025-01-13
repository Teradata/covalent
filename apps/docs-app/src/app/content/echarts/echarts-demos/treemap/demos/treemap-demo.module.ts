import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartToolboxComponent } from '@covalent/echarts/toolbox';
import { TdChartSeriesTreemapComponent } from '@covalent/echarts/treemap';

import { TreemapDemoBasicComponent } from './treemap-demo-basic/treemap-demo-basic.component';
import { TreemapDemoComponent } from './treemap-demo.component';
import { TreemapDemoRoutingModule } from './treemap-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [TreemapDemoComponent, TreemapDemoBasicComponent],
  imports: [
    DemoModule,
    TreemapDemoRoutingModule,
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    TdChartTooltipComponent,
    TdChartToolboxComponent,
    TdChartSeriesTreemapComponent,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
})
export class TreemapDemoModule {}

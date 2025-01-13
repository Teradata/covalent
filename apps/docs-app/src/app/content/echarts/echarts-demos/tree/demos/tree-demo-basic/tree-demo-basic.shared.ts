import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartToolboxComponent } from '@covalent/echarts/toolbox';
import { TdChartSeriesTreeComponent } from '@covalent/echarts/tree';

import { TreeDemoBasicComponent } from './tree-demo-basic.component';

@NgModule({
  declarations: [TreeDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    TdChartTooltipComponent,
    TdChartToolboxComponent,
    TdChartSeriesTreeComponent,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
  exports: [TreeDemoBasicComponent],
})
export class TreeBasicSharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartSeriesClusteringComponent } from '@covalent/echarts/clustering';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartToolboxComponent } from '@covalent/echarts/toolbox';
import { ClusteringBasicSharedModule } from './clustering-demo-basic/clustering-demo-basic.shared';

import { ClusteringDemoComponent } from './clustering-demo.component';
import { ClusteringDemoRoutingModule } from './clustering-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [ClusteringDemoComponent],
  imports: [
    ClusteringBasicSharedModule,
    DemoModule,
    ClusteringDemoRoutingModule,
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    TdChartSeriesClusteringComponent,
    TdChartTooltipComponent,
    TdChartToolboxComponent,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
})
export class ClusteringDemoModule {}

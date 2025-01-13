import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartSeriesLineComponent } from '@covalent/echarts/line';
import { TdChartSeriesBarComponent } from '@covalent/echarts/bar';
import { TdChartSeriesHistogramComponent } from '@covalent/echarts/histogram';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartToolboxComponent } from '@covalent/echarts/toolbox';
import { setEchartRoutes } from '../../echarts-content';
import { DocumentationToolsModule } from '../../../../documentation-tools';
import { HistogramBasicSharedModule } from './demos/histogram-demo-basic/histogram-demo-basic.shared';
import { HistogramDemoBasicComponent } from './demos/histogram-demo-basic/histogram-demo-basic.component';

const routes: Routes = setEchartRoutes({
  overviewDemoComponent: HistogramDemoBasicComponent,
  id: 'histogram',
});

@NgModule({
  imports: [
    HistogramBasicSharedModule,
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    // Covalent Echarts
    CovalentBaseEchartsModule,
    TdChartSeriesLineComponent,
    TdChartSeriesBarComponent,
    TdChartSeriesHistogramComponent,
    TdChartTooltipComponent,
    TdChartToolboxComponent,
    // Docs
    ComponentDetailsModule,
    DocumentationToolsModule,
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class HistogramModule {}

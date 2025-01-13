import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartSeriesLineComponent } from '@covalent/echarts/line';
import { TdChartSeriesBarComponent } from '@covalent/echarts/bar';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartToolboxComponent } from '@covalent/echarts/toolbox';
import { setEchartRoutes } from '../../echarts-content';
import { DocumentationToolsModule } from '../../../../documentation-tools';
import { BarBasicSharedModule } from './demos/bar-demo-basic/bar-demo-basic.shared';
import { BarDemoBasicComponent } from './demos/bar-demo-basic/bar-demo-basic.component';

const routes: Routes = setEchartRoutes({
  overviewDemoComponent: BarDemoBasicComponent,
  id: 'bar',
});

@NgModule({
  imports: [
    BarBasicSharedModule,
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    // Covalent Echarts
    CovalentBaseEchartsModule,
    TdChartSeriesLineComponent,
    TdChartSeriesBarComponent,
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
export class BarModule {}

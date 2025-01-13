import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartSeriesLineComponent } from '@covalent/echarts/line';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartToolboxComponent } from '@covalent/echarts/toolbox';

import { WordcloudDemoComponent } from './wordcloud-demo.component';
import { WordcloudDemoRoutingModule } from './wordcloud-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { TdChartSeriesWordcloudComponent } from '@covalent/echarts/wordcloud';
import { WordcloudDemoSharedModule } from './wordcloud-demo-basic/wordcloud-demo.shared';

@NgModule({
  declarations: [WordcloudDemoComponent],
  imports: [
    WordcloudDemoSharedModule,
    DemoModule,
    WordcloudDemoRoutingModule,
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    TdChartSeriesLineComponent,
    TdChartSeriesWordcloudComponent,
    TdChartTooltipComponent,
    TdChartToolboxComponent,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
})
export class WordcloudDemoModule {}

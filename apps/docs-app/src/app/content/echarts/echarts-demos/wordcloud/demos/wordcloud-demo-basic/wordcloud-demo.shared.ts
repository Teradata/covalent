import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { WordcloudDemoBasicComponent } from './wordcloud-demo-basic.component';
import { TdChartSeriesWordcloudComponent } from '@covalent/echarts/wordcloud';

@NgModule({
  declarations: [WordcloudDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    TdChartTooltipComponent,
    TdChartSeriesWordcloudComponent,
    /** Angular Modules */
    CommonModule,
    // Material
  ],
  exports: [WordcloudDemoBasicComponent],
})
export class WordcloudDemoSharedModule {}

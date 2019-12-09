import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'echarts-wordcloud';

import { TdChartSeriesWordcloudComponent } from './wordcloud.component';

export const WORDCLOUD_MODULE_COMPONENTS: Type<any>[] = [TdChartSeriesWordcloudComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [WORDCLOUD_MODULE_COMPONENTS],
  exports: [WORDCLOUD_MODULE_COMPONENTS],
})
export class CovalentWordcloudEchartsModule {}

import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdChartSeriesHistogramComponent } from './histogram.component';

export const HISTOGRAM_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesHistogramComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [HISTOGRAM_MODULE_COMPONENTS],
  exports: [HISTOGRAM_MODULE_COMPONENTS],
})
export class CovalentHistogramEchartsModule {}

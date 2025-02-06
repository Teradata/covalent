import { NgModule, Type } from '@angular/core';
import { TdChartSeriesHistogramComponent } from './histogram.component';

export const HISTOGRAM_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesHistogramComponent,
];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [HISTOGRAM_MODULE_COMPONENTS],
  exports: [HISTOGRAM_MODULE_COMPONENTS],
})
export class CovalentHistogramEchartsModule {}

import { NgModule, Type } from '@angular/core';
import { TdChartSeriesWordcloudComponent } from './wordcloud.component';

export const WORDCLOUD_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesWordcloudComponent,
];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [WORDCLOUD_MODULE_COMPONENTS],
  exports: [WORDCLOUD_MODULE_COMPONENTS],
})
export class CovalentWordcloudEchartsModule {}

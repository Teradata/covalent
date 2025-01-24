import { NgModule, Type } from '@angular/core';
import { TdChartSeriesLineComponent } from './line.component';

export const LINE_MODULE_COMPONENTS: Type<any>[] = [TdChartSeriesLineComponent];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [LINE_MODULE_COMPONENTS],
  exports: [LINE_MODULE_COMPONENTS],
})
export class CovalentLineEchartsModule {}

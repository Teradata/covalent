import { NgModule, Type } from '@angular/core';
import { TdChartSeriesScatterComponent } from './scatter.component';

export const SCATTER_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesScatterComponent,
];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [SCATTER_MODULE_COMPONENTS],
  exports: [SCATTER_MODULE_COMPONENTS],
})
export class CovalentScatterEchartsModule {}

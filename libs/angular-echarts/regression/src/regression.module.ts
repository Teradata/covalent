import { NgModule, Type } from '@angular/core';
import { TdChartSeriesRegressionComponent } from './regression.component';

export const REGRESSION_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesRegressionComponent,
];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [REGRESSION_MODULE_COMPONENTS],
  exports: [REGRESSION_MODULE_COMPONENTS],
})
export class CovalentRegressionEchartsModule {}

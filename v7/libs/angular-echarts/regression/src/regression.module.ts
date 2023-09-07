import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdChartSeriesRegressionComponent } from './regression.component';

export const REGRESSION_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesRegressionComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [REGRESSION_MODULE_COMPONENTS],
  exports: [REGRESSION_MODULE_COMPONENTS],
})
export class CovalentRegressionEchartsModule {}

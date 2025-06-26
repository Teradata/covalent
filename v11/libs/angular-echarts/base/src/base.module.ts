import { NgModule, Type } from '@angular/core';
import { TdChartComponent } from './chart.component';
import { TdChartXAxisComponent } from './axis/x-axis.component';
import { TdChartYAxisComponent } from './axis/y-axis.component';
import { TdDatasetComponent } from './dataset/dataset.component';

import { registerDefaultThemes } from './utils';

export const BASE_MODULE_COMPONENTS: Type<any>[] = [
  TdChartComponent,
  TdChartXAxisComponent,
  TdChartYAxisComponent,
  TdDatasetComponent,
];

registerDefaultThemes();

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [BASE_MODULE_COMPONENTS],
  exports: [BASE_MODULE_COMPONENTS],
})
export class CovalentBaseEchartsModule {}

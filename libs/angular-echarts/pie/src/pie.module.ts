import { NgModule, Type } from '@angular/core';
import { TdChartSeriesPieComponent } from './pie.component';

export const PIE_MODULE_COMPONENTS: Type<any>[] = [TdChartSeriesPieComponent];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [PIE_MODULE_COMPONENTS],
  exports: [PIE_MODULE_COMPONENTS],
})
export class CovalentPieEchartsModule {}

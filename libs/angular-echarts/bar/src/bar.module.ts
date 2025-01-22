import { NgModule, Type } from '@angular/core';
import { TdChartSeriesBarComponent } from './bar.component';

export const BAR_MODULE_COMPONENTS: Type<any>[] = [TdChartSeriesBarComponent];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [BAR_MODULE_COMPONENTS],
  exports: [BAR_MODULE_COMPONENTS],
})
export class CovalentBarEchartsModule {}

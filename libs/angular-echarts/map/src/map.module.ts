import { NgModule, Type } from '@angular/core';
import { TdChartSeriesMapComponent } from './map.component';

export const MAP_MODULE_COMPONENTS: Type<any>[] = [TdChartSeriesMapComponent];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [MAP_MODULE_COMPONENTS],
  exports: [MAP_MODULE_COMPONENTS],
})
export class CovalentMapEchartsModule {}

import { NgModule, Type } from '@angular/core';
import { TdChartSeriesTreemapComponent } from './treemap.component';

export const TREEMAP_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesTreemapComponent,
];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [TREEMAP_MODULE_COMPONENTS],
  exports: [TREEMAP_MODULE_COMPONENTS],
})
export class CovalentTreemapEchartsModule {}

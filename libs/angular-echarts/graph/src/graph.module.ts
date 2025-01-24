import { NgModule, Type } from '@angular/core';
import { TdChartSeriesGraphComponent } from './graph.component';

export const GRAPH_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesGraphComponent,
];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [GRAPH_MODULE_COMPONENTS],
  exports: [GRAPH_MODULE_COMPONENTS],
})
export class CovalentGraphEchartsModule {}

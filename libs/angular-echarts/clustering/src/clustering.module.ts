import { NgModule, Type } from '@angular/core';
import { TdChartSeriesClusteringComponent } from './clustering.component';

export const CLUSTERING_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesClusteringComponent,
];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [CLUSTERING_MODULE_COMPONENTS],
  exports: [CLUSTERING_MODULE_COMPONENTS],
})
export class CovalentClusteringEchartsModule {}

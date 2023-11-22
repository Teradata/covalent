import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdChartSeriesClusteringComponent } from './clustering.component';

export const CLUSTERING_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesClusteringComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [CLUSTERING_MODULE_COMPONENTS],
  exports: [CLUSTERING_MODULE_COMPONENTS],
})
export class CovalentClusteringEchartsModule {}

import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'echarts/lib/chart/graph';

import { TdChartSeriesGraphComponent } from './graph.component';

export const GRAPH_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesGraphComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    GRAPH_MODULE_COMPONENTS,
  ],
  exports: [
    GRAPH_MODULE_COMPONENTS,
  ],
})
export class CovalentGraphEchartsModule {

}

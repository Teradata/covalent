import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'echarts/lib/chart/treemap';

import { TdChartSeriesTreemapComponent } from './treemap.component';

export const TREEMAP_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesTreemapComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TREEMAP_MODULE_COMPONENTS,
  ],
  exports: [
    TREEMAP_MODULE_COMPONENTS,
  ],
})
export class CovalentTreemapEchartsModule {

}

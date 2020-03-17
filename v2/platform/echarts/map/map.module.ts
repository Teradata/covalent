import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'echarts/lib/chart/map';

import { TdChartSeriesMapComponent } from './map.component';

export const MAP_MODULE_COMPONENTS: Type<any>[] = [TdChartSeriesMapComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [MAP_MODULE_COMPONENTS],
  exports: [MAP_MODULE_COMPONENTS],
})
export class CovalentMapEchartsModule {}

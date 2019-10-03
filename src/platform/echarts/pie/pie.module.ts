import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'echarts/lib/chart/pie';

import { TdChartSeriesPieComponent } from './pie.component';

export const PIE_MODULE_COMPONENTS: Type<any>[] = [TdChartSeriesPieComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [PIE_MODULE_COMPONENTS],
  exports: [PIE_MODULE_COMPONENTS],
})
export class CovalentPieEchartsModule {}

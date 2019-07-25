import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'echarts/lib/chart/sankey';

import { TdChartSeriesSankeyComponent } from './sankey.component';

export const SANKEY_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesSankeyComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SANKEY_MODULE_COMPONENTS,
  ],
  exports: [
    SANKEY_MODULE_COMPONENTS,
  ],
})
export class CovalentSankeyEchartsModule {

}

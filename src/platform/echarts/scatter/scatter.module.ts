import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdChartSeriesScatterComponent } from './scatter.component';

export const SCATTER_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesScatterComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SCATTER_MODULE_COMPONENTS,
  ],
  exports: [
    SCATTER_MODULE_COMPONENTS,
  ],
})
export class CovalentScatterEchartsModule { }

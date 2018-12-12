import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdChartComponent } from './chart.component';
import { TdChartXAxisComponent } from './axis/x-axis.component';
import { TdChartYAxisComponent } from './axis/y-axis.component';

export const BASE_MODULE_COMPONENTS: Type<any>[] = [
  TdChartComponent,
  TdChartXAxisComponent,
  TdChartYAxisComponent,
];

import 'zrender/lib/svg/svg';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BASE_MODULE_COMPONENTS,
  ],
  exports: [
    BASE_MODULE_COMPONENTS,
  ],
})
export class CovalentBaseEchartsModule {

}

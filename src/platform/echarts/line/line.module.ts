import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';

import { TdLineChartComponent } from './line.component';

export const LINE_MODULE_COMPONENTS: Type<any>[] = [
  TdLineChartComponent,
];

@NgModule({
  imports: [
    CommonModule,
    CovalentBaseEchartsModule,
  ],
  declarations: [
    LINE_MODULE_COMPONENTS,
  ],
  exports: [
    LINE_MODULE_COMPONENTS,
  ],
})
export class CovalentLineEchartsModule {

}

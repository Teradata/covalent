import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';

import { TdBarChartComponent } from './bar.component';

export const BAR_MODULE_COMPONENTS: Type<any>[] = [
  TdBarChartComponent,
];

@NgModule({
  imports: [
    CommonModule,
    CovalentBaseEchartsModule,
  ],
  declarations: [
    BAR_MODULE_COMPONENTS,
  ],
  exports: [
    BAR_MODULE_COMPONENTS,
  ],
})
export class CovalentBarEchartsModule {

}

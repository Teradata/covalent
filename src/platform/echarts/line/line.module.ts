import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdChartSeriesLineComponent } from './line.component';

export const LINE_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesLineComponent,
];

@NgModule({
  imports: [
    CommonModule,
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

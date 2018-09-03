import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdChartSeriesBarComponent } from './bar.component';

export const BAR_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesBarComponent,
];

@NgModule({
  imports: [
    CommonModule,
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

import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdBaseChartComponent } from './base.component';
import { TdChartTooltipComponent, TdChartTooltipFormatterDirective } from './tooltip/tooltip.component';
import { TdChartXAxisComponent } from './axis/x-axis.component';
import { TdChartYAxisComponent } from './axis/y-axis.component';

export const BASE_MODULE_COMPONENTS: Type<any>[] = [
  TdBaseChartComponent,
  TdChartTooltipComponent,
  TdChartTooltipFormatterDirective,
  TdChartXAxisComponent,
  TdChartYAxisComponent,
];

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

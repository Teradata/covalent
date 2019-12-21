import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'echarts/lib/component/tooltip';

import { TdChartTooltipComponent, TdChartTooltipFormatterDirective } from './tooltip.component';
import { TdSeriesTooltipComponent } from './series-tooltip.component';

export const TOOLTIP_MODULE_COMPONENTS: Type<any>[] = [
  TdChartTooltipComponent,
  TdChartTooltipFormatterDirective,
  TdSeriesTooltipComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [TOOLTIP_MODULE_COMPONENTS],
  exports: [TOOLTIP_MODULE_COMPONENTS],
})
export class CovalentTooltipEchartsModule {}

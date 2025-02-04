import { NgModule, Type } from '@angular/core';
import {
  TdChartTooltipComponent,
  TdChartTooltipFormatterDirective,
} from './tooltip.component';
import { TdSeriesTooltipComponent } from './series-tooltip.component';

export const TOOLTIP_MODULE_COMPONENTS: Type<any>[] = [
  TdChartTooltipComponent,
  TdChartTooltipFormatterDirective,
  TdSeriesTooltipComponent,
];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [TOOLTIP_MODULE_COMPONENTS],
  exports: [TOOLTIP_MODULE_COMPONENTS],
})
export class CovalentTooltipEchartsModule {}

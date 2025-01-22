import { NgModule, Type } from '@angular/core';
import {
  TdChartToolboxComponent,
  TdChartViewDataFormatterDirective,
} from './toolbox.component';

export const TOOLBOX_MODULE_COMPONENTS: Type<any>[] = [
  TdChartToolboxComponent,
  TdChartViewDataFormatterDirective,
];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [TOOLBOX_MODULE_COMPONENTS],
  exports: [TOOLBOX_MODULE_COMPONENTS],
})
export class CovalentToolboxEchartsModule {}

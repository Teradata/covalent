import { NgModule, Type } from '@angular/core';
import { TdChartSeriesSankeyComponent } from './sankey.component';

export const SANKEY_MODULE_COMPONENTS: Type<any>[] = [
  TdChartSeriesSankeyComponent,
];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [SANKEY_MODULE_COMPONENTS],
  exports: [SANKEY_MODULE_COMPONENTS],
})
export class CovalentSankeyEchartsModule {}

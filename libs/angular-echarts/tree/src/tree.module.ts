import { NgModule, Type } from '@angular/core';
import { TdChartSeriesTreeComponent } from './tree.component';

export const TREE_MODULE_COMPONENTS: Type<any>[] = [TdChartSeriesTreeComponent];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [TREE_MODULE_COMPONENTS],
  exports: [TREE_MODULE_COMPONENTS],
})
export class CovalentTreeEchartsModule {}

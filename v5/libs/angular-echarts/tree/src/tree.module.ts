import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdChartSeriesTreeComponent } from './tree.component';

export const TREE_MODULE_COMPONENTS: Type<any>[] = [TdChartSeriesTreeComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [TREE_MODULE_COMPONENTS],
  exports: [TREE_MODULE_COMPONENTS],
})
export class CovalentTreeEchartsModule {}

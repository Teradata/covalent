import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdCheckboxModule, MdTooltipModule, MdIconModule, MdSelectionModule } from '@angular/material';

import { TdDataTableComponent } from './data-table.component';
import { TdDataTableColumnComponent } from './data-table-column/data-table-column.component';
import { TdDataTableCellComponent } from './data-table-cell/data-table-cell.component';
import { TdDataTableRowComponent } from './data-table-row/data-table-row.component';
import { TdDataTableTableComponent } from './data-table-table/data-table-table.component';
import { TdDataTableService } from './services/data-table.service';
import { TdDataTableTemplateDirective } from './directives/data-table-template.directive';

const TD_DATA_TABLE: Type<any>[] = [
  TdDataTableComponent,
  TdDataTableTemplateDirective,

  TdDataTableColumnComponent,
  TdDataTableCellComponent,
  TdDataTableRowComponent,
  TdDataTableTableComponent,
];

export { TdDataTableComponent, TdDataTableSortingOrder,
         ITdDataTableColumn, ITdDataTableSelectEvent, ITdDataTableSelectAllEvent } from './data-table.component';
export { TdDataTableService } from './services/data-table.service';
export { TdDataTableColumnComponent,
         ITdDataTableSortChangeEvent } from './data-table-column/data-table-column.component';
export { TdDataTableCellComponent } from './data-table-cell/data-table-cell.component';
export { TdDataTableRowComponent } from './data-table-row/data-table-row.component';
export { TdDataTableTableComponent } from './data-table-table/data-table-table.component';

@NgModule({
  imports: [
    CommonModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdIconModule,
    MdSelectionModule,
  ],
  declarations: [
    TD_DATA_TABLE,
  ],
  exports: [
    TD_DATA_TABLE,
  ],
  providers: [
    TdDataTableService,
  ],
})
export class CovalentDataTableModule {

}

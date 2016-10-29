import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { TdDataTableComponent } from './data-table.component';
import { TdDataTableColumnComponent } from './data-table-column/data-table-column.component';
import { TdDataTableCellComponent } from './data-table-cell/data-table-cell.component';
import { TdDataTableRowComponent } from './data-table-row/data-table-row.component';
import { TdDataTableService } from './services/data-table.service';

import { TdDataTableTableDirective } from './directives/table.directive';
import { TdDataTableHeadDirective } from './directives/head.directive';
import { TdDataTableBodyDirective } from './directives/body.directive';

export const TD_DATA_TABLE_DIRECTIVES: Type<any>[] = [
  TdDataTableComponent,
  TdDataTableColumnComponent,
  TdDataTableCellComponent,
  TdDataTableRowComponent,

  TdDataTableTableDirective,
  TdDataTableHeadDirective,
  TdDataTableBodyDirective,
];

@NgModule({
  imports: [
    MaterialModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TD_DATA_TABLE_DIRECTIVES,
  ],
  exports: [
    TD_DATA_TABLE_DIRECTIVES,
  ],
})
export class CovalentDataTableModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentDataTableModule,
      providers: [ TdDataTableService ],
    };
  }
}

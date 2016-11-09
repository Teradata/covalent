import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { TdDataTableComponent } from './data-table.component';
import { TdTemplateDirective } from './directives/template.directive';

import { TdDataTableTableDirective } from './directives/table.directive';
import { TdDataTableHeadDirective } from './directives/head.directive';
import { TdDataTableBodyDirective } from './directives/body.directive';
import { TdDataTableRowDirective } from './directives/row.directive';
import { TdDataTableColumnDirective } from './directives/column.directive';
import { TdDataTableCellDirective } from './directives/cell.directive';

export const TD_DATA_TABLE_DIRECTIVES: Type<any>[] = [
  TdDataTableComponent,
  TdTemplateDirective,

  TdDataTableTableDirective,
  TdDataTableHeadDirective,
  TdDataTableBodyDirective,
  TdDataTableRowDirective,
  TdDataTableColumnDirective,
  TdDataTableCellDirective,
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
      providers: [],
    };
  }
}

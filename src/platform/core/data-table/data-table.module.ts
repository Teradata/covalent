import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatPseudoCheckboxModule } from '@angular/material/core';

import { TdDataTableComponent } from './data-table.component';
import { TdDataTableColumnComponent } from './data-table-column/data-table-column.component';
import { TdDataTableCellComponent } from './data-table-cell/data-table-cell.component';
import { TdDataTableRowComponent, TdDataTableColumnRowComponent } from './data-table-row/data-table-row.component';
import { TdDataTableTableComponent } from './data-table-table/data-table-table.component';
import { TdDataTableTemplateDirective } from './directives/data-table-template.directive';

import { DATA_TABLE_PROVIDER } from './services/data-table.service';

const TD_DATA_TABLE: Type<any>[] = [
  TdDataTableComponent,
  TdDataTableTemplateDirective,

  TdDataTableColumnComponent,
  TdDataTableCellComponent,
  TdDataTableRowComponent,
  TdDataTableColumnRowComponent,
  TdDataTableTableComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatIconModule,
    MatPseudoCheckboxModule,
  ],
  declarations: [
    TD_DATA_TABLE,
  ],
  exports: [
    TD_DATA_TABLE,
  ],
  providers: [
    DATA_TABLE_PROVIDER,
  ],
})
export class CovalentDataTableModule {

}

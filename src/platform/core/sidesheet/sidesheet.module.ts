import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';

import { TdSidesheetComponent, 
         TdSidesheetHeaderComponent, 
         TdSidesheetContentDirective, 
         TdSidesheetTitleDirective, 
         TdSidesheetActionsDirective } from './sidesheet.component';

const TD_SIDESHEET: Type<any>[] = [
  TdSidesheetComponent,
  TdSidesheetHeaderComponent,
  TdSidesheetContentDirective,
  TdSidesheetTitleDirective,
  TdSidesheetActionsDirective,
];

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
  ],
  declarations: [
    TD_SIDESHEET,
  ],
  exports: [
    TD_SIDESHEET,
  ],
})
export class CovalentSidesheetModule {

}

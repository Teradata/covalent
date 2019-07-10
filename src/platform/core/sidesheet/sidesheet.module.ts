import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

import { TdSidesheetComponent, TdSidesheetTitle } from './sidesheet.component';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
  ],
  declarations: [
    TdSidesheetComponent, 
    TdSidesheetTitle, 
  ],
  exports: [
    TdSidesheetComponent, 
    TdSidesheetTitle, 
  ],
})
export class CovalentSidesheetModule {

}

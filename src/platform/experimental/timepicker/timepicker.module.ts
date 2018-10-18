import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { TdTimepickerComponent } from './timepicker.component';
import { TdTimepickerInputComponent } from './timepicker-input.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
  ],
  declarations: [
    TdTimepickerComponent,
    TdTimepickerInputComponent,
  ],
  exports: [
    TdTimepickerComponent,
    TdTimepickerInputComponent,
  ],
})
export class CovalentTimepickerModule {

}

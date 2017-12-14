import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { TdMessageComponent, TdMessageContainerDirective } from './message.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
  ],
  declarations: [
    TdMessageComponent,
    TdMessageContainerDirective,
  ],
  exports: [
    TdMessageComponent,
    TdMessageContainerDirective,
  ],
})
export class CovalentMessageModule {

}

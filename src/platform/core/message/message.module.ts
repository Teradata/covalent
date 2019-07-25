import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { TdMessageComponent, TdMessageContainerDirective } from './message.component';

const TD_MESSAGE: Type<any>[] = [TdMessageComponent, TdMessageContainerDirective];

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [TD_MESSAGE],
  exports: [TD_MESSAGE],
})
export class CovalentMessageModule {}

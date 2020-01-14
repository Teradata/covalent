import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { TdMicroStrategyEmbedComponent } from './microstrategy-embed.component';

const TD_MICROSTRATEGY_EMBED: Type<any>[] = [TdMicroStrategyEmbedComponent];

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [TD_MICROSTRATEGY_EMBED],
  exports: [TD_MICROSTRATEGY_EMBED],
})
export class CovalentMicroStrategyModule {}

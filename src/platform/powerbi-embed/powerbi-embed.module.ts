import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { TdPowerBIEmbedComponent } from './powerbi-embed.component';

const TD_POWER_BI_EMBED: Type<any>[] = [TdPowerBIEmbedComponent];

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [TD_POWER_BI_EMBED],
  exports: [TD_POWER_BI_EMBED],
})
export class CovalentPowerBIModule {}

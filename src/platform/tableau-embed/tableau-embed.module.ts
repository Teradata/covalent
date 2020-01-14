import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import 'tableau-api';

import { TdTableauEmbedComponent } from './tableau-embed.component';

const TD_TABLEAU_EMBED: Type<any>[] = [TdTableauEmbedComponent];

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [TD_TABLEAU_EMBED],
  exports: [TD_TABLEAU_EMBED],
})
export class CovalentTableauModule {}

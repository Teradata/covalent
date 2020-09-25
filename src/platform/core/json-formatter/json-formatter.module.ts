import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

import { TdJsonFormatterComponent } from './json-formatter.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatTooltipModule, MatIconModule, ScrollingModule, MatButtonModule],
  declarations: [TdJsonFormatterComponent],
  exports: [TdJsonFormatterComponent],
})
export class CovalentJsonFormatterModule {}

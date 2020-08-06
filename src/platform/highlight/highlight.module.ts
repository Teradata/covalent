import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { TdHighlightComponent } from './highlight.component';
import { HighlightClipboardComponent } from './highlight-clipboard/highlight-clipboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [CommonModule, ClipboardModule, MatIconModule, MatTooltipModule],
  declarations: [TdHighlightComponent, HighlightClipboardComponent],
  exports: [TdHighlightComponent, HighlightClipboardComponent],
})
export class CovalentHighlightModule {}

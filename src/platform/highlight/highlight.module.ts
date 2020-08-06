import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { TdHighlightComponent } from './highlight.component';
import { HighlightClipboardComponent } from './highlight-clipboard/highlight-clipboard.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, ClipboardModule, MatIconModule],
  declarations: [TdHighlightComponent, HighlightClipboardComponent],
  exports: [TdHighlightComponent, HighlightClipboardComponent],
})
export class CovalentHighlightModule {}

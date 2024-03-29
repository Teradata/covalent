import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { TdHighlightComponent } from './highlight.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TdCopyCodeButtonComponent } from './copy-code-button/copy-code-button.component';

@NgModule({
  imports: [
    CommonModule,
    ClipboardModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  declarations: [TdHighlightComponent, TdCopyCodeButtonComponent],
  exports: [TdHighlightComponent],
})
export class CovalentHighlightModule {}

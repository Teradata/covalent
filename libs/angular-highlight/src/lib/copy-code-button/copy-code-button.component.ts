import {
  Component,
  Input,
  ViewChild,
  HostListener,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, MatTooltip } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

export interface ICopyCodeTooltips {
  copy?: string;
  copied?: string;
}

export interface IRawToggleLabels {
  viewRaw?: string;
  viewCode?: string;
}

@Component({
  selector: 'td-copy-code-button',
  templateUrl: './copy-code-button.component.html',
  styleUrls: ['./copy-code-button.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ClipboardModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatButtonModule,
  ],
})
export class TdCopyCodeButtonComponent {
  // private _copyCodeTooltips: ICopyCodeTooltips = {};
  @Input() copiedContent!: string;
  @Input() copyCodeToClipboard? = false;
  /**
   * copyCodeTooltips?: ICopyCodeTooltips
   *
   * Tooltips for copy button to copy and upon copying.
   */
  @Input() copyCodeTooltips?: ICopyCodeTooltips = {};

  @Input() toggleRawButton = false;
  @Input() rawToggleLabels?: IRawToggleLabels = {};

  rawToggle = false;

  @Output() toggleRaw = new EventEmitter<boolean>();

  @ViewChild('copyButton') copyButton!: MatButtonToggle;
  @ViewChild('rawButton') rawButton!: MatButtonToggle;

  get copyTooltip(): string {
    return (this.copyCodeTooltips && this.copyCodeTooltips.copy) || 'Copy';
  }

  get copiedTooltip(): string {
    return (this.copyCodeTooltips && this.copyCodeTooltips.copied) || 'Copied';
  }

  get rawToggleText(): string {
    if (this.rawToggle) {
      return this.rawToggleLabels?.viewCode || 'View code';
    } else {
      return this.rawToggleLabels?.viewRaw || 'Raw';
    }
  }

  @ViewChild('tooltip') tooltip!: MatTooltip;

  textCopied(event: boolean): void {
    if (event) {
      this.tooltip.hide();
      this.tooltip.message = this.copiedTooltip;
      this.tooltip.show();
    }
  }
  @HostListener('mouseleave')
  initializeTooltip(): void {
    setTimeout(() => {
      this.tooltip.message = this.copyTooltip;
    }, 200);
  }

  toggleRawClicked(): void {
    this.rawToggle = !this.rawToggle;
    this.toggleRaw.emit();
    this.rawButton.checked = false;
  }

  copyClicked(): void {
    this.copyButton.checked = false;
  }
}

import { Component, Input, ViewChild, HostListener } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

export interface ICopyCodeTooltips {
  copy?: string;
  copied?: string;
}

@Component({
  selector: 'td-copy-code-button',
  templateUrl: './copy-code-button.component.html',
  styleUrls: ['./copy-code-button.component.scss'],
})
export class TdCopyCodeButtonComponent {
  // private _copyCodeTooltips: ICopyCodeTooltips = {};
  @Input() copiedContent!: string;
  @Input() copyCodeToClipboard = false;
  /**
   * copyCodeTooltips?: ICopyCodeTooltips
   *
   * Tooltips for copy button to copy and upon copying.
   */
  @Input() copyCodeTooltips?: ICopyCodeTooltips = {};

  get copyTooltip(): string {
    return (this.copyCodeTooltips && this.copyCodeTooltips.copy) || 'Copy';
  }

  get copiedTooltip(): string {
    return (this.copyCodeTooltips && this.copyCodeTooltips.copied) || 'Copied';
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
}

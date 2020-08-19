import { Component, OnInit, Input, ViewChild } from '@angular/core';
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
  private _copyCodeTooltips: ICopyCodeTooltips = {};
  @Input() copiedContent: string;
  @Input() copyCodeToClipboard: boolean = false;
  /**
   * copyCodeTooltips?: ICopyCodeTooltips
   *
   * Tooltips for copy button to copy and upon copying.
   */
  @Input('copyCodeTooltips')
  set copyCodeTooltips(copyCodeTooltips: ICopyCodeTooltips) {
    this._copyCodeTooltips.copy = copyCodeTooltips.copy;
    this._copyCodeTooltips.copied = copyCodeTooltips.copied;
  }
  get copyCodeTooltips(): ICopyCodeTooltips {
    return this._copyCodeTooltips;
  }

  get copyTooltip(): string {
    return this._copyCodeTooltips.copy || 'Copy';
  }

  get copiedTooltip(): string {
    return this._copyCodeTooltips.copied || 'Copied';
  }

  tooltipMessage: boolean = false;
  @ViewChild('tooltip') tooltip: MatTooltip;

  textCopied(event: boolean): void {
    if (event) {
      this.tooltip.hide();
      this.tooltip.message = this.copiedTooltip;
      this.tooltip.show();
      setTimeout(this.hideTooltip.bind(this), 1500);
    }
  }

  hideTooltip(): void {
    this.tooltip.hide();
    this.initializeTooltip();
  }

  initializeTooltip(): void {
    setTimeout(() => {
      this.tooltip.message = this.copyTooltip;
    }, 500);
  }
}

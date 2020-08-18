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
  private _copyCodeTooltips: ICopyCodeTooltips = {
    copy: 'Copy',
    copied: 'Copied',
  };

  @Input() copiedContent: string;
  @Input() copyCodeToClipboard: boolean = false;
  /**
   * copyCodeTooltips?: ICopyCodeTooltips
   *
   * tooltips to show when we hover on the copy button and when code gets copied
   */
  @Input('copyCodeTooltips')
  set copyCodeTooltips(copyCodeTooltips: ICopyCodeTooltips) {
    if (copyCodeTooltips && copyCodeTooltips.copy) {
      this._copyCodeTooltips.copy = copyCodeTooltips.copy;
    }
    if (copyCodeTooltips && copyCodeTooltips.copied) {
      this._copyCodeTooltips.copied = copyCodeTooltips.copied;
    }
  }
  get copyCodeTooltips(): ICopyCodeTooltips {
    return this._copyCodeTooltips;
  }
  @ViewChild('tooltip') tooltip: MatTooltip;

  textCopied(event: boolean): void {
    if (event) {
      this.tooltip.message = this._copyCodeTooltips.copied;
      this.tooltip.show();
      setTimeout(() => {
        this.tooltip.hide();
        this.tooltip.message = this._copyCodeTooltips.copy;
      }, 2000);
    }
  }
}

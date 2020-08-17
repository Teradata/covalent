import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { ICopyCodeTooltips } from '..';

@Component({
  selector: 'td-copy-code-button',
  templateUrl: './copy-code-button.component.html',
  styleUrls: ['./copy-code-button.component.scss'],
})
export class TdCopyCodeButtonComponent {
  private _copyCodeTooltips: ICopyCodeTooltips = {
    copyToClipboardTooltip: 'Copy',
    copyToClipboardCopiedTooltip: 'Copied',
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
    if (copyCodeTooltips && copyCodeTooltips.copyToClipboardTooltip) {
      this._copyCodeTooltips.copyToClipboardTooltip = copyCodeTooltips.copyToClipboardTooltip;
    }
    if (copyCodeTooltips && copyCodeTooltips.copyToClipboardCopiedTooltip) {
      this._copyCodeTooltips.copyToClipboardCopiedTooltip = copyCodeTooltips.copyToClipboardCopiedTooltip;
    }
  }
  get copyCodeTooltips(): ICopyCodeTooltips {
    return this._copyCodeTooltips;
  }
  @ViewChild('tooltip') tooltip: MatTooltip;

  textCopied(event: boolean): void {
    if (event) {
      this.tooltip.message = this._copyCodeTooltips.copyToClipboardCopiedTooltip;
      this.tooltip.show();
      setTimeout(() => {
        this.tooltip.hide();
        this.tooltip.message = this._copyCodeTooltips.copyToClipboardTooltip;
      }, 2000);
    }
  }
}

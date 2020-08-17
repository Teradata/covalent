import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'td-copy-code-button',
  templateUrl: './copy-code-button.component.html',
  styleUrls: ['./copy-code-button.component.scss'],
})
export class TdCopyCodeButtonComponent {
  private _copyToClipboardCopiedTooltip: string = 'Copied';

  @Input() copiedContent: string;
  @Input() copyCodeToClipboard: boolean = false;
  @Input() copyToClipboardTooltip: string = 'Copy';
  @Input('copyToClipboardCopiedTooltip')
  set copyToClipboardCopiedTooltip(copyToClipboardCopiedTooltip: string) {
    this._copyToClipboardCopiedTooltip = copyToClipboardCopiedTooltip;
  }
  get copyToClipboardCopiedTooltip(): string {
    return this._copyToClipboardCopiedTooltip;
  }
  @ViewChild('tooltip') tooltip: MatTooltip;

  textCopied(event: boolean): void {
    if (event) {
      this.tooltip.message = this._copyToClipboardCopiedTooltip;
      this.tooltip.show();
      setTimeout(() => {
        this.tooltip.hide();
        this.tooltip.message = this.copyToClipboardTooltip;
      }, 2000);
    }
  }
}

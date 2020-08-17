import { Component } from '@angular/core';
import { ICopyCodeTooltips } from '@covalent/highlight';

@Component({
  selector: 'highlight-demo-copy-code',
  templateUrl: './highlight-demo-copy-code.component.html',
  styleUrls: ['./highlight-demo-copy-code.component.scss'],
})
export class HighlightDemoCopyCodeComponent {
  css: string = `
  .flex-container {
    display: flex;
  }
  `;
  tooltipsConfig: ICopyCodeTooltips = {
    copyToClipboardTooltip: 'Copy text',
    copyToClipboardCopiedTooltip: 'Text copied',
  };
}

import { Component } from '@angular/core';
import { ICopyCodeTooltips } from '@covalent/highlight';

@Component({
  selector: 'highlight-demo-copy-code',
  templateUrl: './highlight-demo-copy-code.component.html',
  styleUrls: ['./highlight-demo-copy-code.component.scss'],
})
export class HighlightDemoCopyCodeComponent {
  css = `
  .flex-container {
    display: flex;
  }
  `;
  tooltipsConfig: ICopyCodeTooltips = {
    copy: 'Copy text',
    copied: 'Text copied',
  };
}

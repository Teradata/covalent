import { Component } from '@angular/core';

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
}

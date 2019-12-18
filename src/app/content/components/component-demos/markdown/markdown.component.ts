import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'markdown-demo',
  styleUrls: ['./markdown.component.scss'],
  templateUrl: './markdown.component.html',
  preserveWhitespaces: true,
})
export class MarkdownDemoComponent {
  anchor: string;

  jumpToH1(): void {
    this.anchor = 'heading-1';
  }

  jumpToH2(): void {
    this.anchor = 'heading-2';
  }
}

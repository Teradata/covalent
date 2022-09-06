import { Component } from '@angular/core';

@Component({
  selector: 'markdown-demo',
  styleUrls: ['./markdown.component.scss'],
  templateUrl: './markdown.component.html',
})
export class MarkdownDemoComponent {
  anchor!: string;
  markdown = `
    # Heading (H1)
    ## Sub Heading (H2)
    ### Steps (H3)
  `;

  jumpToH1(): void {
    this.anchor = 'heading-1';
  }

  jumpToH2(): void {
    this.anchor = 'heading-2';
  }
}

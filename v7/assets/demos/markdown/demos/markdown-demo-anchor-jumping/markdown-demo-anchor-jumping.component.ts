import { Component } from '@angular/core';

@Component({
  selector: 'markdown-demo-anchor-jumping',
  styleUrls: ['./markdown-demo-anchor-jumping.component.scss'],
  templateUrl: './markdown-demo-anchor-jumping.component.html',
})
export class MarkdownDemoAnchorJumpingComponent {
  anchor!: string;
  markdown = `
    * [Heading 1](#heading-1)
    * [Heading 2](#heading-2)

    # Heading 1

    ## Heading 2`;

  jumpToH1(): void {
    this.anchor = 'heading-1';
  }

  jumpToH2(): void {
    this.anchor = 'heading-2';
  }
}

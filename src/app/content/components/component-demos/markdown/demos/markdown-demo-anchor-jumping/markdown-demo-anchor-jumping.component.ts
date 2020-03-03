import { Component } from '@angular/core';

@Component({
  selector: 'markdown-demo-anchor-jumping',
  styleUrls: ['./markdown-demo-anchor-jumping.component.scss'],
  templateUrl: './markdown-demo-anchor-jumping.component.html',
  preserveWhitespaces: true,
})
export class MarkdownDemoAnchorJumpingComponent {
  anchor: string;

  jumpToH1(): void {
    this.anchor = 'heading-1';
  }

  jumpToH2(): void {
    this.anchor = 'heading-2';
  }
}

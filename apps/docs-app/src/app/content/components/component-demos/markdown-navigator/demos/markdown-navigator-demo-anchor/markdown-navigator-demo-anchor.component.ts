import { Component } from '@angular/core';
import { IMarkdownNavigatorItem } from '@covalent/markdown-navigator';

@Component({
  selector: 'markdown-navigator-demo-anchor',
  styleUrls: ['./markdown-navigator-demo-anchor.component.scss'],
  templateUrl: './markdown-navigator-demo-anchor.component.html',
})
export class MarkdownNavigatorDemoAnchorComponent {
  items: IMarkdownNavigatorItem[] = [
    {
      title: 'Covalent Browser Support',
      url: 'https://github.com/teradata/covalent/blob/master/README.md',
      anchor: 'browser-support',
    },
    {
      title: 'Angular Commit Message Format',
      url: 'https://github.com/angular/angular/blob/master/CONTRIBUTING.md',
      anchor: 'commit-message-format',
    },
  ];
}

import { Component } from '@angular/core';
import { IMarkdownNavigatorItem } from '@covalent/markdown-navigator';

function compareByTitle(o1: IMarkdownNavigatorItem, o2: IMarkdownNavigatorItem): boolean {
  return o1.title === o2.title;
}
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
      title: 'External Object Store',
      childrenUrl: 'https://www.teradata.com/product-help/UseCases/use_cases.json',
      startAtLink: { title: 'External Object Store' },
    },
    {
      title: 'Angular Commit Message Format',
      url: 'https://github.com/angular/angular/blob/master/CONTRIBUTING.md',
      anchor: 'commit-message-format',
    },
  ];

  compareWith: (o1: IMarkdownNavigatorItem, o2: IMarkdownNavigatorItem) => boolean = compareByTitle;
}

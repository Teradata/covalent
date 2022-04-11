import { Component } from '@angular/core';
import { IMarkdownNavigatorItem } from '@covalent/markdown-navigator';

@Component({
  selector: 'markdown-navigator-demo-children-url',
  styleUrls: ['./markdown-navigator-demo-children-url.component.scss'],
  templateUrl: './markdown-navigator-demo-children-url.component.html',
})
export class MarkdownNavigatorDemoChildrenUrlComponent {
  items: IMarkdownNavigatorItem[] = [
    {
      title: 'Url children demo',
      childrenUrl: 'assets/demos-data/children_url_1.json',
    },
  ];
}

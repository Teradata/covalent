import { Component } from '@angular/core';
import { IMarkdownNavigatorItem } from '@covalent/markdown-navigator';

@Component({
  selector: 'markdown-navigator-demo-children-url-start-at',
  styleUrls: ['./markdown-navigator-demo-children-url-start-at.component.scss'],
  templateUrl: './markdown-navigator-demo-children-url-start-at.component.html',
})
export class MarkdownNavigatorDemoChildrenUrlStartAtComponent {
  items: IMarkdownNavigatorItem[] = [
    {
      id: 'test-url-children',
      title: '🔥',
      childrenUrl: '/assets/demos-data/children_url_1.json',
    },
  ];
  startAt: IMarkdownNavigatorItem[] = [{ id: 'test-url-children' }, { id: 'up_up_and_away' }, { id: 'blast_off' }];
}

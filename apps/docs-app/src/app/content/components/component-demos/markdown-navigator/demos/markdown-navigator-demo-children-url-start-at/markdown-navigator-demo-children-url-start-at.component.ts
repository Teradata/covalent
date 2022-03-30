import { Component } from '@angular/core';
import { IMarkdownNavigatorItem } from '@covalent/markdown-navigator';

@Component({
  selector: 'markdown-navigator-demo-children-url-start-at',
  styleUrls: ['./markdown-navigator-demo-children-url-start-at.component.scss'],
  templateUrl: './markdown-navigator-demo-children-url-start-at.component.html',
})
export class MarkdownNavigatorDemoChildrenUrlStartAtComponent {
  startAt: IMarkdownNavigatorItem[] = [
    { id: 'url-children-demo' },
    { id: 'child-2' },
    { id: 'grandchild-2' },
  ];
  items: IMarkdownNavigatorItem[] = [
    {
      id: 'url-children-demo',
      title: 'Url children demo',
      childrenUrl: 'assets/demos-data/children_url_1.json',
      /*
      For ref:

      children_url_1.json:
      [
        {
          "title": "Child 1",
          "id": "child-1",
          "markdownString": "> This is child 1"
        },
        {
          "title": "Child 2",
          "id": "child-2",
          "markdownString": "> This is child 2",
          "childrenUrl": "/assets/demos-data/children_url_2.json"
        }
      ]

      children_url_2.json:
      [
        {
          "title": "Grandchild 1",
          "id": "grandchild-1",
          "markdownString": "> This is grandchild 1"
        },
        {
          "title": "Grandchild 2",
          "id": "grandchild-2",
          "markdownString": "> This is grandchild 2"
        }
      ]
      */
    },
  ];
}

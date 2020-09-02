import { Component } from '@angular/core';
import { IMarkdownNavigatorItem } from '@covalent/markdown-navigator';

function compareByTitle(o1: IMarkdownNavigatorItem, o2: IMarkdownNavigatorItem): boolean {
  return o1.title === o2.title;
}
@Component({
  selector: 'markdown-navigator-demo-start-at-onclick-children-url',
  templateUrl: './markdown-navigator-demo-start-at-onclick-children-url.component.html',
  styleUrls: ['./markdown-navigator-demo-start-at-onclick-children-url.component.scss'],
})
export class MarkdownNavigatorDemoStartAtOnclickChildrenUrlComponent {
  items: IMarkdownNavigatorItem[] = [
    {
      id: 'external_obj_store',
      title: 'External Object Store',
      childrenUrl: 'https://www.teradata.com/product-help/UseCases/use_cases.json',
      startAtLink: { title: 'External Object Store' },
    },
    {
      id: 'url-children-demo',
      title: 'Url children demo',
      childrenUrl: '/assets/demos-data/children_url_3.json',
      /*
      For ref:

      children_url_3.json:
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
          "childrenUrl": "/assets/demos-data/children_url_2.json",
          "startAtLink": {"id" : "grandchild-2"}
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
  compareWith: (o1: IMarkdownNavigatorItem, o2: IMarkdownNavigatorItem) => boolean = compareByTitle;
}

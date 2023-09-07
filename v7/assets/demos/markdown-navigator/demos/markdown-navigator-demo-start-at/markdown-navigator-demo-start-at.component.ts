import { Component } from '@angular/core';
import { IMarkdownNavigatorItem } from '@covalent/markdown-navigator';

function compareByTitle(
  o1: IMarkdownNavigatorItem,
  o2: IMarkdownNavigatorItem
): boolean {
  return o1.title === o2.title;
}

@Component({
  selector: 'markdown-navigator-demo-start-at',
  styleUrls: ['./markdown-navigator-demo-start-at.component.scss'],
  templateUrl: './markdown-navigator-demo-start-at.component.html',
})
export class MarkdownNavigatorDemoStartAtComponent {
  items: IMarkdownNavigatorItem[] = [
    {
      title: 'Item A',
      id: 'A',
      children: [
        {
          title: 'Item A1',
          id: 'A1',
        },
        {
          title: 'Item A2',
          id: 'A2',
        },
        {
          title: 'Item A3',
          id: 'A3',
        },
      ],
    },
  ];
  startAt!: IMarkdownNavigatorItem;
  compareWith?: (
    o1: IMarkdownNavigatorItem,
    o2: IMarkdownNavigatorItem
  ) => boolean;
  selection!: string;

  handleChange(): void {
    // there are 3 ways to find item to start at
    // by reference, id, or by using a custom compareWith function
    // choose your weapon 😈
    switch (this.selection) {
      case 'reference':
        this.startAt = { id: 'A1' };
        this.compareWith = undefined;

        break;
      case 'id':
        this.startAt = { id: 'A2' };
        this.compareWith = undefined;
        break;
      case 'custom':
        this.startAt = { title: 'Item A3' };
        this.compareWith = compareByTitle;
        break;
      default:
        break;
    }
  }
}

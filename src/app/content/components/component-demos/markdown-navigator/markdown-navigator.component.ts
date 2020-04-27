import { Component } from '@angular/core';
import {
  IMarkdownNavigatorItem,
  TdMarkdownNavigatorWindowService,
  IMarkdownNavigatorWindowConfig,
} from '@covalent/markdown-navigator';

function prettyJson(items: IMarkdownNavigatorItem[]): string {
  return JSON.stringify(items, undefined, 4);
}

const singleLevelTree: IMarkdownNavigatorItem[] = [
  {
    url: 'https://github.com/Teradata/covalent/blob/develop/README.md',
  },
];
const biLevelTree: IMarkdownNavigatorItem[] = [
  {
    url: 'https://github.com/Teradata/covalent/blob/develop/README.md',
    title: 'Covalent',
  },
  {
    url: 'https://raw.githubusercontent.com/angular/angular/master/README.md',
    title: 'Angular',
  },
  {
    markdownString: '\n\n# Raw markdown example\n \n> Amazing\n\n1. List\n2. of\n3. items\n\n',
    title: 'Raw markdown',
  },
];
const multiLevelTree: IMarkdownNavigatorItem[] = [
  {
    title: 'Covalent',
    children: [
      {
        title: 'Components',
        children: [
          {
            url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/src/platform/core/loading/README.md',
            title: 'tdLoading',
          },
        ],
      },
    ],
  },
  biLevelTree[1],
  biLevelTree[2],
];

@Component({
  selector: 'markdown-navigator-demo',
  styleUrls: ['./markdown-navigator.component.scss'],
  templateUrl: './markdown-navigator.component.html',
})
export class MarkdownNavigatorDemoComponent {
  public options: { name: string; value: IMarkdownNavigatorItem[] }[] = [
    { name: 'Multi-level', value: multiLevelTree },
    { name: 'Bi-level', value: biLevelTree },
    {
      name: 'Single-level',
      value: singleLevelTree,
    },
  ];
  public selected: { name: string; value: IMarkdownNavigatorItem[] } = this.options[0];
  public currentTree: IMarkdownNavigatorItem[] = this.selected.value;
  public startAt: IMarkdownNavigatorItem;
  public input: string = prettyJson(this.currentTree);

  constructor(private _markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) {}

  public compareByTitle: (o1: IMarkdownNavigatorItem, o2: IMarkdownNavigatorItem) => boolean = (
    o1: IMarkdownNavigatorItem,
    o2: IMarkdownNavigatorItem,
  ): boolean => o1.title === o2.title;

  public get windowConfig(): IMarkdownNavigatorWindowConfig {
    return { items: this.currentTree, startAt: this.startAt, compareWith: this.compareByTitle };
  }

  public selectOption(): void {
    this.startAt = undefined;
    this.use(this.selected.value);
  }

  public use(items: IMarkdownNavigatorItem[]): void {
    this.currentTree = items;
    this.input = prettyJson(this.currentTree);
    if (this._markdownNavigatorWindowService.isOpen) {
      this.openWindow();
    }
  }

  public applyInput(): void {
    this.use(JSON.parse(this.input));
  }

  public demoStartAt(): void {
    this.selected = this.options[0];
    this.startAt = { title: 'tdLoading' };
    this.use(JSON.parse(JSON.stringify(this.selected.value)));
  }

  public openWindow(): void {
    this._markdownNavigatorWindowService.open(this.windowConfig);
  }
}

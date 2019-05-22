import { Component, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';

enum ItemType {
  Url = 'Url',
  Markdown = 'Markdown',
}

interface IHelpMenuDataItem {
  title: string;
  url?: string;
  httpOptions?: object;
  markdownString?: string; // raw markdown
  anchor?: string;
  children?: IHelpMenuDataItem[];
}

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnChanges {
  @Input() items: IHelpMenuDataItem[];

  @Output() minimized: EventEmitter<any> = new EventEmitter();

  // todo these would go outside
  @Output() maximized: EventEmitter<any> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  parentStack: IHelpMenuDataItem[][] = []; // parents

  currentMarkdownItem: IHelpMenuDataItem; // currently rendered

  currentMenuItems: IHelpMenuDataItem[] = []; // current menu items

  get showGoBackButton(): boolean {
    return this.parentStack.length > 0;
  }

  get showMenu(): boolean {
    return this.currentMenuItems && this.currentMenuItems.length > 0;
  }

  get showTdMarkdownLoader(): boolean {
    return !!this.currentMarkdownItem && !!this.currentMarkdownItem.url;
  }

  get showTdMarkdown(): boolean {
    return !!this.currentMarkdownItem && !!this.currentMarkdownItem.markdownString;
  }

  get url(): string {
    if (this.currentMarkdownItem) {
      return this.currentMarkdownItem.url;
    }
    return undefined;
  }
  get httpOptions(): object {
    if (this.currentMarkdownItem) {
      return this.currentMarkdownItem.httpOptions;
    }
  }
  get markdownString(): string {
    if (this.currentMarkdownItem) {
      return this.currentMarkdownItem.markdownString;
    }
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.reset();
    }
  }

  reset(): void {
    // TODO
    // if single item and no children
    if (this.items && this.items.length === 1 && (!this.items[0].children || this.items[0].children.length === 0)) {
      // jump
      this.currentMenuItems = [];
      this.currentMarkdownItem = this.items[0];
    } else {
      this.currentMenuItems = this.items;
      this.currentMarkdownItem = undefined;
    }
    this.parentStack = [];
  }

  handleItemSelected(item: IHelpMenuDataItem): void {
    this.parentStack = [...this.parentStack, this.currentMenuItems];
    if (item.children && item.children.length > 0) {
      // has children, go inside
      this.currentMenuItems = item.children;
    } else {
      // don't show menu
      this.currentMenuItems = [];
      // render markdown
      this.currentMarkdownItem = item;
    }
  }

  goUp(): void {
    if (this.parentStack.length > 0) {
      this.currentMenuItems = this.parentStack[this.parentStack.length - 1];
      this.parentStack = this.parentStack.slice(0, -1);
      this.currentMarkdownItem = undefined;
    }
  }

  getTitle(item: IHelpMenuDataItem): string {
    return item.title;
  }

  // todo these go outside
  minimize(): void {
    // emit minimize event
  }

  maximize(): void {
    // emit maximize event
  }

  close(): void {
    // emit close event
  }
}

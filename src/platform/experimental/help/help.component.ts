import { Component, Input, OnChanges, SimpleChanges, HostListener } from '@angular/core';
import { IHelpMenuDataItem, IHelpComponentLabels, DEFAULT_HELP_COMP_LABELS } from './help.utils';
import { removeLeadingHash, isAnchorLink, MarkdownLoaderService } from '@covalent/markdown';

function getTitleFromUrl(url: string): string {
  if (url) {
    const temp: URL = new URL(url);
    if (temp.hash) {
      return removeLeadingHash(temp.hash);
    } else {
      const path: string[] = temp.pathname.split('/');
      const fileName: string = path[path.length - 1];
      return fileName.replace(/\.[^/.]+$/, ''); // remove .md
    }
  }
  return undefined;
}

function getTitleFromMarkdownString(markdownString: string): string {
  if (markdownString) {
    const firstLine: string = markdownString.split(/[\r\n]+/).find((line: string) => !!line);
    return removeLeadingHash(firstLine).trim();
  }
  return undefined;
}

function isMarkdownHref(anchor: HTMLAnchorElement): boolean {
  return !isAnchorLink(anchor) && anchor.pathname.endsWith('.md');
}

@Component({
  selector: 'td-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnChanges {
  /**
   * items: IHelpMenuDataItem[]
   *
   * List of IHelpMenuDataItems to be rendered
   */
  @Input() items: IHelpMenuDataItem[];

  /**
   * labels?: IHelpComponentLabels
   *
   * Translated labels
   */
  @Input() labels: IHelpComponentLabels;

  historyStack: IHelpMenuDataItem[][] = []; // history
  currentMarkdownItem: IHelpMenuDataItem; // currently rendered
  currentMenuItems: IHelpMenuDataItem[] = []; // current menu items

  loading: boolean = false;

  constructor(private _markdownUrlLoaderService: MarkdownLoaderService) {}

  @HostListener('click', ['$event'])
  clickListener(event: Event): void {
    const element: HTMLElement = <HTMLElement>event.srcElement;
    if (element.matches('a[href]') && isMarkdownHref(<HTMLAnchorElement>element)) {
      this.handleLinkClick(event);
    }
  }

  get showGoBackButton(): boolean {
    return this.historyStack.length > 0;
  }

  get showMenu(): boolean {
    return this.currentMenuItems && this.currentMenuItems.length > 0;
  }

  get showTdMarkdownLoader(): boolean {
    return !!this.currentMarkdownItem && !!this.currentMarkdownItem.url && !this.showTdMarkdown;
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

  get anchor(): string {
    if (this.currentMarkdownItem) {
      return this.currentMarkdownItem.anchor;
    }
  }

  get showEmptyState(): boolean {
    return !this.items || this.items.length < 1;
  }

  get goHomeLabel(): string {
    return (this.labels && this.labels.goHome) || DEFAULT_HELP_COMP_LABELS.goHome;
  }

  get goBackLabel(): string {
    return (this.labels && this.labels.goBack) || DEFAULT_HELP_COMP_LABELS.goBack;
  }

  get emptyStateLabel(): string {
    return (this.labels && this.labels.emptyState) || DEFAULT_HELP_COMP_LABELS.emptyState;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      this.reset();
    }
  }

  reset(): void {
    // if single item and no children
    if (this.items && this.items.length === 1 && (!this.items[0].children || this.items[0].children.length === 0)) {
      this.currentMenuItems = [];
      this.currentMarkdownItem = this.items[0];
    } else {
      this.currentMenuItems = this.items;
      this.currentMarkdownItem = undefined;
    }
    this.historyStack = [];
  }

  handleItemSelected(item: IHelpMenuDataItem): void {
    if (this.currentMenuItems.length === 0) {
      // clicked on a markdown link within the current markdown file
      this.historyStack = [...this.historyStack, [this.currentMarkdownItem]];
    } else {
      this.historyStack = [...this.historyStack, this.currentMenuItems];
    }

    if (
      item.children &&
      item.children.length === 1 &&
      (!item.children[0].children || item.children[0].children.length === 0)
    ) {
      // clicked on item with one child that has no children
      // don't show menu
      this.currentMenuItems = [];
      // render markdown
      this.currentMarkdownItem = item.children[0];
    } else if (item.children && item.children.length > 0) {
      // has children, go inside
      this.currentMenuItems = item.children;
    } else {
      // don't show menu
      this.currentMenuItems = [];
      // render markdown
      this.currentMarkdownItem = item;
    }
  }

  goBack(): void {
    if (this.historyStack.length > 0) {
      const parent: IHelpMenuDataItem[] = this.historyStack[this.historyStack.length - 1];
      if (parent.length === 1 && (!parent[0].children || parent[0].children.length === 0)) {
        this.currentMenuItems = [];
        this.currentMarkdownItem = parent[0];
      } else {
        this.currentMenuItems = parent;
        this.currentMarkdownItem = undefined;
      }
      this.historyStack = this.historyStack.slice(0, -1);
    }
  }

  getTitle(item: IHelpMenuDataItem): string {
    return (
      item.title ||
      removeLeadingHash(item.anchor) ||
      getTitleFromUrl(item.url) ||
      getTitleFromMarkdownString(item.markdownString)
    );
  }

  async handleLinkClick(event: Event): Promise<void> {
    event.preventDefault();
    const link: HTMLAnchorElement = <HTMLAnchorElement>event.target;
    const url: URL = new URL(link.href);
    this.loading = true;
    try {
      const markdownString: string = await this._markdownUrlLoaderService.load(url.href);
      // pass in url to be able to use currentMarkdownItem.url later on
      this.handleItemSelected({ markdownString, url: url.href });
    } catch (error) {
      const win: Window = window.open(url.href, '_blank');
      win.focus();
    } finally {
      this.loading = false;
    }
  }
}

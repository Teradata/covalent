import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  HostListener,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Type,
  Output,
  EventEmitter,
  SecurityContext,
} from '@angular/core';
import { removeLeadingHash, isAnchorLink, TdMarkdownLoaderService } from '@covalent/markdown';
import { ITdFlavoredMarkdownButtonClickEvent } from '@covalent/flavored-markdown';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

export interface IMarkdownNavigatorItem {
  title?: string;
  url?: string;
  httpOptions?: object;
  markdownString?: string; // raw markdown
  anchor?: string;
  children?: IMarkdownNavigatorItem[];
  childrenUrl?: string;
  description?: string;
  icon?: string;
  footer?: Type<any>;
}

export interface IMarkdownNavigatorLabels {
  goHome?: string;
  goBack?: string;
  emptyState?: string;
}

export type IMarkdownNavigatorCompareWith = (o1: IMarkdownNavigatorItem, o2: IMarkdownNavigatorItem) => boolean;

export const DEFAULT_MARKDOWN_NAVIGATOR_LABELS: IMarkdownNavigatorLabels = {
  goHome: 'Go home',
  goBack: 'Go back',
  emptyState: 'No item(s) to display',
};

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
function defaultCompareWith(o1: IMarkdownNavigatorItem, o2: IMarkdownNavigatorItem): boolean {
  return o1 === o2;
}

function getAncestors(
  items: IMarkdownNavigatorItem[],
  item: IMarkdownNavigatorItem,
  compareWith: IMarkdownNavigatorCompareWith,
): IMarkdownNavigatorItem[] {
  if (items) {
    for (const child of items) {
      if (compareWith(child, item)) {
        return [child];
      }
      const ancestors: IMarkdownNavigatorItem[] = getAncestors(child.children, item, compareWith);
      if (ancestors) {
        return [child, ...ancestors];
      }
    }
  }
  return undefined;
}

@Component({
  selector: 'td-markdown-navigator',
  templateUrl: './markdown-navigator.component.html',
  styleUrls: ['./markdown-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdMarkdownNavigatorComponent implements OnChanges {
  /**
   * items: IMarkdownNavigatorItem[]
   *
   * List of IMarkdownNavigatorItems to be rendered
   */
  @Input() items: IMarkdownNavigatorItem[];

  /**
   * labels?: IMarkdownNavigatorLabels
   *
   * Translated labels
   */
  @Input() labels: IMarkdownNavigatorLabels;

  /**
   * startAt?: IMarkdownNavigatorItem
   *
   * Item to start to
   */
  @Input() startAt: IMarkdownNavigatorItem;

  /**
   * footer?: Type<any>
   *
   * Component to be displayed in footer
   */
  @Input() footer: Type<any>;

  /**
   * compareWith?: IMarkdownNavigatorCompareWith
   *
   * Function used to find startAt item
   * Defaults to comparison by strict equality (===)
   */
  @Input() compareWith: IMarkdownNavigatorCompareWith;

  @Output() buttonClicked: EventEmitter<ITdFlavoredMarkdownButtonClickEvent> = new EventEmitter();

  @ViewChild('markdownWrapper') markdownWrapper: ElementRef;

  historyStack: IMarkdownNavigatorItem[] = []; // history
  currentMarkdownItem: IMarkdownNavigatorItem; // currently rendered
  currentMenuItems: IMarkdownNavigatorItem[] = []; // current menu items

  loading: boolean = false;

  markdownLoaderError: string;
  childrenUrlError: string;

  constructor(
    private _markdownUrlLoaderService: TdMarkdownLoaderService,
    private _changeDetectorRef: ChangeDetectorRef,
    private _sanitizer: DomSanitizer,
    private _http: HttpClient,
  ) {}

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

  get showHomeButton(): boolean {
    return this.historyStack.length > 1;
  }

  get showHeader(): boolean {
    return this.showHomeButton || this.showGoBackButton || !!this.currentItemTitle;
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

  get footerComponent(): any {
    if (this.currentMarkdownItem && this.currentMarkdownItem.footer) {
      return this.currentMarkdownItem.footer;
    }
    return this.footer;
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
    return (this.labels && this.labels.goHome) || DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goHome;
  }

  get goBackLabel(): string {
    return (this.labels && this.labels.goBack) || DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goBack;
  }

  get emptyStateLabel(): string {
    return (this.labels && this.labels.emptyState) || DEFAULT_MARKDOWN_NAVIGATOR_LABELS.emptyState;
  }

  get currentItemTitle(): string {
    if (this.historyStack.length < 1) {
      return '';
    } else if (this.currentMarkdownItem) {
      return this.getTitle(this.currentMarkdownItem);
    } else if (this.historyStack.length > 0) {
      return this.getTitle(this.historyStack[this.historyStack.length - 1]);
    }
    return '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      this.reset();
      if (this.items && this.startAt) {
        this._jumpTo(this.startAt);
      }
    }
  }

  hasChildrenOrChildrenUrl(item: IMarkdownNavigatorItem): boolean {
    return (item.children && item.children.length > 0) || !!item.childrenUrl;
  }
  clearErrors(): void {
    this.markdownLoaderError = undefined;
    this.childrenUrlError = undefined;
  }

  reset(): void {
    this.loading = false;
    this.clearErrors();
    // if single item and no children
    if (this.items && this.items.length === 1 && !this.hasChildrenOrChildrenUrl(this.items[0])) {
      this.currentMenuItems = [];
      this.currentMarkdownItem = this.items[0];
    } else {
      this.currentMenuItems = this.items;
      this.currentMarkdownItem = undefined;
    }
    this.historyStack = [];
    this._changeDetectorRef.markForCheck();
  }

  goBack(): void {
    this.loading = false;
    this.clearErrors();
    if (this.historyStack.length > 1) {
      const parent: IMarkdownNavigatorItem = this.historyStack[this.historyStack.length - 2];
      this.currentMarkdownItem = parent;
      this.historyStack = this.historyStack.slice(0, -1);
      this.setChildrenAsCurrentMenuItems(parent);
    } else {
      // one level down just go to root
      this.reset();
    }
    this._changeDetectorRef.markForCheck();
  }

  handleItemSelected(item: IMarkdownNavigatorItem): void {
    this.clearErrors();
    this.currentMarkdownItem = item;
    this.historyStack = [...this.historyStack, item];
    this.setChildrenAsCurrentMenuItems(item);
    this._changeDetectorRef.markForCheck();
  }

  async setChildrenAsCurrentMenuItems(item: IMarkdownNavigatorItem): Promise<void> {
    this.currentMenuItems = [];
    this.loading = true;
    this._changeDetectorRef.markForCheck();

    const stackSnapshot: IMarkdownNavigatorItem[] = this.historyStack;
    let children: IMarkdownNavigatorItem[] = [];
    if (item.children) {
      children = item.children;
    } else if (item.childrenUrl) {
      children = await this.loadChildrenUrl(item);
    }
    const newStackSnapshot: IMarkdownNavigatorItem[] = this.historyStack;
    if (
      stackSnapshot.length === newStackSnapshot.length &&
      stackSnapshot.every((stackItem: IMarkdownNavigatorItem, index: number) => stackItem === newStackSnapshot[index])
    ) {
      this.currentMenuItems = children;
    }

    this.loading = false;
    this._changeDetectorRef.markForCheck();
  }

  async loadChildrenUrl(item: IMarkdownNavigatorItem): Promise<IMarkdownNavigatorItem[]> {
    const sanitizedUrl: string = this._sanitizer.sanitize(SecurityContext.URL, item.childrenUrl);
    try {
      return await this._http
        .get<IMarkdownNavigatorItem[]>(sanitizedUrl, { ...item.httpOptions })
        .toPromise();
    } catch (error) {
      this.handleChildrenUrlError(error);
      return [];
    }
  }

  getTitle(item: IMarkdownNavigatorItem): string {
    if (item) {
      return (
        removeLeadingHash(item.anchor) ||
        item.title ||
        getTitleFromUrl(item.url) ||
        getTitleFromMarkdownString(item.markdownString) ||
        ''
      ).trim();
    }
  }

  getIcon(item: IMarkdownNavigatorItem): string {
    if (item) {
      return item.icon || 'subject';
    }
  }

  handleChildrenUrlError(error: Error): void {
    this.childrenUrlError = error.message;
    this._changeDetectorRef.markForCheck();
  }
  handleMarkdownLoaderError(error: Error): void {
    this.markdownLoaderError = error.message;
    this._changeDetectorRef.markForCheck();
  }

  private _jumpTo(item: IMarkdownNavigatorItem): void {
    this.reset();
    if (this.items && this.items.length > 0) {
      const ancestors: IMarkdownNavigatorItem[] = getAncestors(
        this.items,
        item,
        this.compareWith || defaultCompareWith,
      );
      (ancestors || []).forEach((ancestor: IMarkdownNavigatorItem) => this.handleItemSelected(ancestor));
    }
    this._changeDetectorRef.markForCheck();
  }

  private async handleLinkClick(event: Event): Promise<void> {
    event.preventDefault();
    const link: HTMLAnchorElement = <HTMLAnchorElement>event.target;
    const url: URL = new URL(link.href);
    this.loading = true;
    this._changeDetectorRef.markForCheck();
    try {
      const markdownString: string = await this._markdownUrlLoaderService.load(url.href);
      // pass in url to be able to use currentMarkdownItem.url later on
      this.handleItemSelected({ markdownString, url: url.href });
      this.markdownWrapper.nativeElement.scrollTop = 0;
    } catch (error) {
      const win: Window = window.open(url.href, '_blank');
      win.focus();
    } finally {
      this.loading = false;
    }
    this._changeDetectorRef.markForCheck();
  }
}

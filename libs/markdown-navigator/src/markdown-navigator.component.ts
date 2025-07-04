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
  inject,
} from '@angular/core';
import {
  removeLeadingHash,
  isAnchorLink,
  TdMarkdownLoaderService,
} from '@covalent/markdown';
import {
  ITdFlavoredMarkdownButtonClickEvent,
  TdFlavoredMarkdownComponent,
  TdFlavoredMarkdownLoaderComponent,
} from '@covalent/flavored-markdown';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ICopyCodeTooltips } from '@covalent/highlight';
import { firstValueFrom } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TdDialogComponent } from '@covalent/core/dialogs';
import { TdMessageComponent } from '@covalent/core/message';
import { TdBreadcrumbsComponent } from '@covalent/core/breadcrumbs';
import { CommonModule } from '@angular/common';

export interface IMarkdownNavigatorItem {
  id?: string;
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
  startAtLink?: IMarkdownNavigatorItem;
}

export interface IMarkdownNavigatorLabels {
  goHome?: string;
  goBack?: string;
  emptyState?: string;
}

export type IMarkdownNavigatorCompareWith = (
  o1: IMarkdownNavigatorItem,
  o2: IMarkdownNavigatorItem,
) => boolean;

export const DEFAULT_MARKDOWN_NAVIGATOR_LABELS: IMarkdownNavigatorLabels = {
  goHome: 'Go home',
  goBack: 'Go back',
  emptyState: 'No item(s) to display',
};

@Component({
  selector: 'td-markdown-navigator',
  templateUrl: './markdown-navigator.component.html',
  styleUrls: ['./markdown-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    TdFlavoredMarkdownComponent,
    TdFlavoredMarkdownLoaderComponent,
    TdMessageComponent,
    TdBreadcrumbsComponent,
  ],
  providers: [TdMarkdownLoaderService],
})
export class TdMarkdownNavigatorComponent implements OnChanges {
  private _markdownUrlLoaderService = inject(TdMarkdownLoaderService);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _sanitizer = inject(DomSanitizer);
  private _http = inject(HttpClient);

  /**
   * items: IMarkdownNavigatorItem[]
   *
   * List of IMarkdownNavigatorItems to be rendered
   */
  @Input() items?: IMarkdownNavigatorItem[];

  /**
   * labels?: IMarkdownNavigatorLabels
   *
   * Translated labels
   */
  @Input() labels?: IMarkdownNavigatorLabels;

  /**
   * startAt?: IMarkdownNavigatorItem | IMarkdownNavigatorItem[];
   *
   * Item or path to start at
   */
  @Input() startAt?: IMarkdownNavigatorItem | IMarkdownNavigatorItem[];

  /**
   * copyCodeToClipboard?: boolean
   *
   * Display copy button on code snippets to copy code to clipboard.
   *
   */
  @Input() copyCodeToClipboard? = false;

  /**
   * copyCodeTooltips?: ICopyCodeTooltips
   *
   * Tooltips for copy button to copy and upon copying.
   */
  @Input() copyCodeTooltips?: ICopyCodeTooltips = {};

  /**
   * footer?: Type<any>
   *
   * Component to be displayed in footer
   */
  @Input() footer?: any;

  /**
   * compareWith?: IMarkdownNavigatorCompareWith
   *
   * Function used to find startAt item
   * Defaults to comparison by strict equality (===)
   */
  @Input() compareWith?: IMarkdownNavigatorCompareWith;

  @Output() buttonClicked: EventEmitter<ITdFlavoredMarkdownButtonClickEvent> =
    new EventEmitter();
  @Output() itemSelected: EventEmitter<IMarkdownNavigatorItem> =
    new EventEmitter();

  @ViewChild('markdownWrapper') markdownWrapper!: ElementRef;

  historyStack: IMarkdownNavigatorItem[] = []; // history
  currentMarkdownItem?: IMarkdownNavigatorItem; // currently rendered
  currentMenuItems?: IMarkdownNavigatorItem[] = []; // current menu items

  loading = false;

  markdownLoaderError?: string;
  childrenUrlError?: string;

  @HostListener('click', ['$event'])
  clickListener(event: Event): void {
    const element: HTMLElement = <HTMLElement>event.srcElement;
    if (
      element.matches('a[href]') &&
      isMarkdownHref(<HTMLAnchorElement>element)
    ) {
      this.handleLinkClick(event);
    }
  }

  get showGoBackButton(): boolean {
    return this.historyStack.length > 0;
  }

  get showHeader(): boolean {
    return !!this.currentItemTitle;
  }

  get showMenu(): boolean {
    const showMenu = this.currentMenuItems && this.currentMenuItems.length > 0;
    return showMenu ?? false;
  }

  get showTdMarkdownLoader(): boolean {
    return (
      !!this.currentMarkdownItem &&
      !!this.currentMarkdownItem.url &&
      !this.showTdMarkdown
    );
  }

  get showTdMarkdown(): boolean {
    return (
      !!this.currentMarkdownItem && !!this.currentMarkdownItem.markdownString
    );
  }

  get url(): string | undefined {
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
  get httpOptions(): object | undefined {
    if (this.currentMarkdownItem) {
      return this.currentMarkdownItem.httpOptions;
    }
    return undefined;
  }
  get markdownString(): string | undefined {
    if (this.currentMarkdownItem) {
      return this.currentMarkdownItem.markdownString;
    }
    return undefined;
  }

  get anchor(): string | undefined {
    if (this.currentMarkdownItem) {
      return this.currentMarkdownItem.anchor;
    }
    return undefined;
  }

  get showEmptyState(): boolean {
    return !this.items || this.items.length < 1;
  }

  get goHomeLabel(): string | undefined {
    return (
      (this.labels && this.labels.goHome) ||
      DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goHome
    );
  }

  get goBackLabel(): string | undefined {
    return (
      (this.labels && this.labels.goBack) ||
      DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goBack
    );
  }

  get emptyStateLabel(): string | undefined {
    return (
      (this.labels && this.labels.emptyState) ||
      DEFAULT_MARKDOWN_NAVIGATOR_LABELS.emptyState
    );
  }

  get currentItemTitle(): string {
    if (this.currentMarkdownItem) {
      return this.getTitle(this.currentMarkdownItem);
    } else if (this.historyStack.length > 0) {
      return this.getTitle(this.historyStack[this.historyStack.length - 1]);
    }
    return '';
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes['items']) {
      this.reset();
    }
    if (changes['startAt'] && this.items && this.startAt) {
      this._jumpTo(this.startAt, undefined);
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
    if (
      this.items &&
      this.items.length === 1 &&
      !this.hasChildrenOrChildrenUrl(this.items[0])
    ) {
      this.currentMenuItems = [];
      this.currentMarkdownItem = this.items[0];
    } else {
      this.currentMenuItems = this.items;
      this.currentMarkdownItem = undefined;
    }
    this.historyStack = [];
    this.itemSelected.emit(undefined);
    this._changeDetectorRef.markForCheck();
  }

  goBack(goBackLength = 2): void {
    this.loading = false;
    this.clearErrors();
    let parent: IMarkdownNavigatorItem | undefined =
      this.historyStack[this.historyStack.length - goBackLength];

    if (parent?.startAtLink) {
      parent = this.historyStack[this.historyStack.length - 3]
        ? this.historyStack[this.historyStack.length - 3]
        : undefined;
      this.historyStack = this.historyStack.slice(0, -goBackLength);
    }

    if (parent) {
      this.currentMarkdownItem = parent;
      this.historyStack = this.historyStack.slice(
        0,
        this.historyStack.length - goBackLength + 1,
      );
      this.setChildrenAsCurrentMenuItems(parent);
    } else {
      this.reset();
    }
    this.itemSelected.emit(parent);
    this._changeDetectorRef.markForCheck();
  }

  handleItemSelected(item: IMarkdownNavigatorItem): void {
    this.clearErrors();
    this.currentMarkdownItem = item;
    this.historyStack = [...this.historyStack, item];
    this.setChildrenAsCurrentMenuItems(item);
    this.itemSelected.emit(item);
    this._changeDetectorRef.markForCheck();
  }

  async setChildrenAsCurrentMenuItems(
    item: IMarkdownNavigatorItem,
  ): Promise<void> {
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
    if (children && children.length && item.startAtLink) {
      this._jumpTo(item.startAtLink, children);
    }
    const newStackSnapshot: IMarkdownNavigatorItem[] = this.historyStack;
    if (
      stackSnapshot.length === newStackSnapshot.length &&
      stackSnapshot.every(
        (stackItem: IMarkdownNavigatorItem, index: number) =>
          stackItem === newStackSnapshot[index],
      )
    ) {
      this.currentMenuItems = children;
    }

    this.loading = false;
    this._changeDetectorRef.markForCheck();
  }

  async loadChildrenUrl(
    item: IMarkdownNavigatorItem,
  ): Promise<IMarkdownNavigatorItem[]> {
    const sanitizedUrl =
      this._sanitizer.sanitize(SecurityContext.URL, item.childrenUrl ?? null) ??
      '';
    try {
      return await firstValueFrom<IMarkdownNavigatorItem[]>(
        this._http.get<IMarkdownNavigatorItem[]>(sanitizedUrl, {
          ...item.httpOptions,
        }),
      );
    } catch (error: any) {
      this.handleChildrenUrlError(error);
      return [];
    }
  }

  getTitle(item: IMarkdownNavigatorItem): string {
    if (!item) {
      return '';
    }
    return (
      removeLeadingHash(item.anchor ?? '') ||
      item.title ||
      getTitleFromUrl(item.url ?? '') ||
      getTitleFromMarkdownString(item.markdownString ?? '') ||
      ''
    ).trim();
  }

  getIcon(item: IMarkdownNavigatorItem): string {
    return item?.icon || 'subject';
  }

  handleChildrenUrlError(error: Error): void {
    this.childrenUrlError = error.message;
    this._changeDetectorRef.markForCheck();
  }
  handleMarkdownLoaderError(error: Error): void {
    this.markdownLoaderError = error ? error.message : '';
    this._changeDetectorRef.markForCheck();
  }

  private async _jumpTo(
    itemOrPath: IMarkdownNavigatorItem | IMarkdownNavigatorItem[],
    children?: IMarkdownNavigatorItem[],
  ): Promise<boolean> {
    const historyStack: IMarkdownNavigatorItem[] = this.historyStack;
    let path: IMarkdownNavigatorItem[] = [];

    if (this.items?.length) {
      if (Array.isArray(itemOrPath)) {
        path = await this.followPath(this.items, itemOrPath);
      } else if (children && children.length > 0) {
        this.historyStack = historyStack;
        path = this.findPath(children, itemOrPath);
      } else {
        path = this.findPath(this.items, itemOrPath);
      }
      path.forEach((pathItem: IMarkdownNavigatorItem, index) => {
        if (index === 0) {
          this.reset();
        }

        this.handleItemSelected(pathItem);
      });
    }

    return !!path.length;
  }

  private async followPath(
    items: IMarkdownNavigatorItem[],
    path: IMarkdownNavigatorItem[],
  ): Promise<IMarkdownNavigatorItem[]> {
    let pathItems: IMarkdownNavigatorItem[] = [];
    let currentLevel: IMarkdownNavigatorItem[] = items;
    const compareWith: IMarkdownNavigatorCompareWith =
      this.compareWith || defaultCompareWith;
    for (const pathItem of path) {
      const foundItem: IMarkdownNavigatorItem | undefined = currentLevel.find(
        (item: IMarkdownNavigatorItem) => compareWith(pathItem, item),
      );

      if (foundItem) {
        pathItems = [...pathItems, foundItem];

        if (foundItem.children) {
          currentLevel = foundItem.children;
        } else if (foundItem.childrenUrl) {
          currentLevel = await this.loadChildrenUrl(foundItem);
        }
      } else {
        break;
      }
    }
    if (pathItems.length !== path.length) {
      pathItems = [];
    }
    return pathItems;
  }

  private findPath(
    items?: IMarkdownNavigatorItem[],
    item?: IMarkdownNavigatorItem,
  ): IMarkdownNavigatorItem[] {
    const compareWith: IMarkdownNavigatorCompareWith =
      this.compareWith || defaultCompareWith;
    if (items) {
      for (const child of items) {
        if (item && compareWith(child, item)) {
          return [child];
        }
        const ancestors: IMarkdownNavigatorItem[] = this.findPath(
          child.children,
          item,
        );
        if (ancestors.length) {
          return [child, ...ancestors];
        }
      }
    }
    return [];
  }

  private async handleLinkClick(event: Event): Promise<void> {
    event.preventDefault();
    const link: HTMLAnchorElement = <HTMLAnchorElement>event.target;
    const url: URL = new URL(link.href);
    const urlParts = url.href.split('/');
    const id = urlParts[urlParts.length - 1].split('.md')[0];
    this.loading = true;
    this._changeDetectorRef.markForCheck();
    const pathFound = await this._jumpTo({ id });

    if (pathFound) {
      return;
    }

    try {
      const markdownString: string = await this._markdownUrlLoaderService.load(
        url.href,
      );
      // pass in url to be able to use currentMarkdownItem.url later on
      this.handleItemSelected({ markdownString, url: url.href });
      this.markdownWrapper.nativeElement.scrollTop = 0;
    } catch (error) {
      const win = window.open(url.href, '_blank');
      win?.focus();
    } finally {
      this.loading = false;
    }
    this._changeDetectorRef.markForCheck();
  }
}

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
  return '';
}

function getTitleFromMarkdownString(markdownString: string): string {
  if (markdownString) {
    const firstLine: string =
      markdownString.split(/[\r\n]+/).find((line: string) => !!line) ?? '';
    return removeLeadingHash(firstLine).trim();
  }
  return '';
}

function isMarkdownHref(anchor: HTMLAnchorElement): boolean {
  return !isAnchorLink(anchor) && anchor.pathname.endsWith('.md');
}
function defaultCompareWith(
  o1: IMarkdownNavigatorItem,
  o2: IMarkdownNavigatorItem,
): boolean {
  if (o1.id && o2.id) {
    return o1.id === o2.id;
  }
  return o1 === o2;
}

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
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TdDialogComponent } from '@covalent/core/dialogs';
import { TdMessageComponent } from '@covalent/core/message';
import {
  TdBreadcrumbsComponent,
  TdBreadcrumbComponent,
} from '@covalent/core/breadcrumbs';
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
    TdBreadcrumbComponent,
  ],
  providers: [TdMarkdownLoaderService],
})
export class TdMarkdownNavigatorComponent implements OnChanges {
  constructor(
    private _markdownUrlLoaderService: TdMarkdownLoaderService,
    private _changeDetectorRef: ChangeDetectorRef,
    private _sanitizer: DomSanitizer,
    private _http: HttpClient,
    private _matIconRegistry: MatIconRegistry,
  ) {
    this._matIconRegistry.registerFontClassAlias(
      'covalent-icons',
      'covalent-icons mat-ligature-font',
    );
  }
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
    const element: HTMLElement = <HTMLElement>event.target;
    // Use closest() to handle clicks on nested elements inside links
    const anchor: HTMLAnchorElement | null = element.closest('a[href]');

    if (anchor && isMarkdownHref(anchor)) {
      this.handleLinkClick(event, anchor);
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

  get navigationBreadcrumbs(): IMarkdownNavigatorItem[] {
    return this.historyStack.slice(0, -1);
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
    const icon = item?.icon || 'subject';
    return icon.split(';')[0];
  }

  isCovalentIcon(item: IMarkdownNavigatorItem): boolean {
    if (!item?.icon) return false;
    return item?.icon?.includes(';covalent');
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
    shouldReset = true,
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

      // When navigating through internal links (shouldReset = false),
      // only navigate to the final destination, not the entire path,
      // to avoid duplicating parent items already in historyStack
      if (!shouldReset && path.length > 0) {
        const destination = path[path.length - 1];
        this.handleItemSelected(destination);
      } else {
        path.forEach((pathItem: IMarkdownNavigatorItem, index) => {
          if (index === 0 && shouldReset) {
            this.reset();
          }

          this.handleItemSelected(pathItem);
        });
      }
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
        // Also try to match by URL filename pattern for internal links
        if (
          item?.url &&
          child.url &&
          this.urlsMatchByFilename(child.url, item.url)
        ) {
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

  private urlsMatchByFilename(url1: string, url2: string): boolean {
    try {
      // Extract filename and strip query params (?...) and hash fragments (#...)
      const filename1 =
        url1.split('/').pop()?.split('?')[0].split('#')[0] ?? '';
      const filename2 =
        url2.split('/').pop()?.split('?')[0].split('#')[0] ?? '';
      return filename1 !== '' && filename2 !== '' && filename1 === filename2;
    } catch {
      return false;
    }
  }

  private async handleLinkClick(
    event: Event,
    link: HTMLAnchorElement,
  ): Promise<void> {
    event.preventDefault();
    const url: URL = new URL(link.href);
    const urlParts = url.href.split('/');
    const id = urlParts[urlParts.length - 1].split('.md')[0];

    // Capture link text for better UX - Phase 1
    const linkText = link.textContent?.trim() || '';

    this.loading = true;
    this._changeDetectorRef.markForCheck();

    // Try to find by ID first (relative navigation, preserve history)
    const pathFound = await this._jumpTo({ id }, undefined, false);

    if (pathFound) {
      return;
    }

    // Try to find by URL pattern - Phase 2 (relative navigation, preserve history)
    const filename = urlParts[urlParts.length - 1];
    const pathFoundByUrl = await this._jumpTo(
      { url: filename },
      undefined,
      false,
    );

    if (pathFoundByUrl) {
      return;
    }

    try {
      const markdownString: string = await this._markdownUrlLoaderService.load(
        url.href,
      );
      // Pass link text as title for immediate UX improvement - Phase 1
      this.handleItemSelected({
        markdownString,
        url: url.href,
        title: linkText || undefined, // Use link text if available
      });
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

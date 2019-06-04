import { Component, Input, SimpleChanges, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { IHelpMenuDataItem } from '../help.utils';
import { MarkdownLoaderService } from '../markdown-loader/markdown-loader.service';

enum ItemType {
  Url = 'Url',
  Markdown = 'Markdown',
}

const removeHash: (str: string) => string = (str: string) => {
  if (str) {
    return str.replace(/^#+/, '');
  }
  return undefined;
};

const normalize: (str: string) => string = (str: string) => {
  if (str) {
    return removeHash(str.replace(/\W+/g, '')).toLowerCase();
  }
  return undefined;
};

const getTitleFromUrl: (url: string) => string = (url: string) => {
  if (url) {
    const temp: URL = new URL(url);
    if (temp.hash) {
      return removeHash(temp.hash);
    } else {
      const path: string[] = temp.pathname.split('/');
      const fileName: string = path[path.length - 1];
      return fileName.replace(/\.[^/.]+$/, ''); // remove .md
    }
  }
  return undefined;
};

const getTitleFromMarkdownString: (markdownString: string) => string = (markdownString: string) => {
  if (markdownString) {
    const firstLine: string = markdownString.split(/[\r\n]+/).find((line: string) => !!line);
    return removeHash(firstLine).trim();
  }
  return undefined;
};

const rawGithubHref: (href: string) => string = (href: string) => {
  const url: URL = new URL(href);
  if (url.pathname.startsWith('/raw/')) {
    return href;
  } else {
    url.hostname = 'raw.githubusercontent.com';
    url.pathname = url.pathname.split('/blob', 2).join('');
    return url.href;
  }
};

const genFullPath: (currentHref: string, rawHref: string) => string = (currentHref: string, rawHref: string) => {
  // TODO: this assumes it is on github

  const currentUrl: URL = new URL(currentHref);
  const path: string = currentUrl.pathname
    .split('/')
    .slice(1, -1)
    .join('/');
  const correctUrl: URL = new URL(currentHref);

  if (rawHref.startsWith('/')) {
    // url is relative to top level
    const orgAndRepo: string = path
      .split('/')
      .slice(0, 3)
      .join('/');
    correctUrl.pathname = `${orgAndRepo}${rawHref}`;
  } else {
    correctUrl.pathname = `${path}/${rawHref}`;
  }
  return correctUrl.href;
};

const openInNewTab: (href: string) => void = (href: string) => {
  const win: Window = window.open(href, '_blank');
  win.focus();
};

@Component({
  selector: 'td-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnChanges {
  @Input() items: IHelpMenuDataItem[];

  historyStack: IHelpMenuDataItem[][] = []; // history
  currentMarkdownItem: IHelpMenuDataItem; // currently rendered
  currentMenuItems: IHelpMenuDataItem[] = []; // current menu items

  loading: boolean = false;
  handleLinkClickBound: EventListenerOrEventListenerObject;

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

  constructor(private _elementRef: ElementRef, private _markdownUrlLoaderService: MarkdownLoaderService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.reset();
    }
  }

  reset(): void {
    this.removeLinkListeners();
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
      removeHash(item.anchor) ||
      getTitleFromUrl(item.url) ||
      getTitleFromMarkdownString(item.markdownString)
    );
  }

  handleContentReady(): void {
    if (this.currentMarkdownItem.anchor) {
      this.scrollToAnchor(this.currentMarkdownItem.anchor);
    }
    this.handleLinkClickBound = this.handleLinkClick.bind(this);
    this.attachLinkListeners();
  }

  // TODO: should this be inside flavored-markdown?
  // Also expose this to allow to be called from outside?
  scrollToAnchor(anchor: string): void {
    if (anchor) {
      const headings: HTMLElement[] = Array.from(
        this._elementRef.nativeElement.querySelectorAll('h1, h2, h3, h4, h5, h6'),
      );
      const anchorNormalized: string = normalize(anchor);
      const headingToJumpTo: HTMLElement = headings.find((heading: HTMLElement) => {
        const headingNormalized: string = normalize(heading.innerHTML);
        return headingNormalized === anchorNormalized;
      });
      if (headingToJumpTo) {
        headingToJumpTo.scrollIntoView({ behavior: 'auto' });
      } else {
        console.warn(`Could not jump to heading '${anchor}'`);
      }
    }
  }

  attachLinkListeners(): void {
    this._elementRef.nativeElement
      .querySelectorAll('a[href]')
      .forEach((link: HTMLElement) => link.addEventListener('click', this.handleLinkClickBound));
  }

  removeLinkListeners(): void {
    this._elementRef.nativeElement
      .querySelectorAll('a[href]')
      .forEach((link: HTMLElement) => link.removeEventListener('click', this.handleLinkClickBound));
  }

  async handleLinkClick(event: Event): Promise<void> {
    event.preventDefault();

    const url: URL = new URL((<HTMLAnchorElement>event.target).href);

    if (url.host === window.location.host) {
      // hosts match, meaning URL has been malformed by showdown
      // url is either an anchor or a relative url

      if (url.pathname === '/') {
        // url is an anchor
        if (url.hash) {
          this.scrollToAnchor(url.hash);
        }
      } else {
        // url is relative
        // TODO: Might not handle ../../ correctly
        if (!url.href.endsWith('.md')) {
          // not a markdown file, open in a new tab
          openInNewTab(url.href);
        } else {
          const rawHref: string = (<HTMLAnchorElement>event.target).getAttribute('href');

          // try to create the full href, assumes github
          const correctHref: string = genFullPath(this.currentMarkdownItem.url, rawHref);
          this.loading = true;
          try {
            const markdownString: string = await this._markdownUrlLoaderService.load(correctHref);
            this.handleItemSelected({ markdownString, url: correctHref }); // pass in url to be able to use currentMarkdownItem.url later on

            const hash: string = new URL(correctHref).hash;
            if (hash) {
              this.scrollToAnchor(hash);
            }
          } catch (error) {
            // not valid, just open in new tab
            openInNewTab(correctHref);
          } finally {
            this.loading = false;
          }
        }
      }
    } else {
      // url is external
      if (!url.href.endsWith('.md')) {
        // not a markdown file, open in a new tab
        openInNewTab(url.href);
      } else {
        this.loading = true;
        try {
          // try to get url
          let correctUrl: string = url.href;
          if (url.hostname === 'github.com') {
            correctUrl = rawGithubHref(url.href);
          }
          const markdownString: string = await this._markdownUrlLoaderService.load(correctUrl);

          this.handleItemSelected({ markdownString, url: correctUrl }); // pass in url to be able to use currentMarkdownItem.url later on

          const hash: string = new URL(correctUrl).hash;
          if (hash) {
            this.scrollToAnchor(hash);
          }
        } catch (error) {
          // not valid, just open in new tab
          openInNewTab(url.href);
        } finally {
          this.loading = false;
        }
      }
    }
  }
}

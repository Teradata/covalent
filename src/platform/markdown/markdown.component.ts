import {
  Component,
  AfterViewInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  Renderer2,
  SecurityContext,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  HostBinding,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  scrollToAnchor,
  normalizeAnchor,
  isAnchorLink,
  removeTrailingHash,
  rawGithubHref,
  isGithubHref,
} from './markdown-utils';

declare const require: any;
/* tslint:disable-next-line */
let showdown: any = require('showdown/dist/showdown.js');

// TODO: assumes it is a github url
// allow override somehow
function generateAbsoluteHref(currentHref: string, relativeHref: string): string {
  if (currentHref && relativeHref) {
    const currentUrl: URL = new URL(currentHref);
    const path: string = currentUrl.pathname
      .split('/')
      .slice(1, -1)
      .join('/');
    const correctUrl: URL = new URL(currentHref);

    if (relativeHref.startsWith('/')) {
      // url is relative to top level
      const orgAndRepo: string = path
        .split('/')
        .slice(0, 3)
        .join('/');
      correctUrl.pathname = `${orgAndRepo}${relativeHref}`;
    } else {
      correctUrl.pathname = `${path}/${relativeHref}`;
    }
    return correctUrl.href;
  }
  return undefined;
}

function normalizeHtmlHrefs(html: string, currentHref: string): string {
  if (currentHref) {
    const document: Document = new DOMParser().parseFromString(html, 'text/html');
    document.querySelectorAll('a[href]').forEach((link: HTMLAnchorElement) => {
      const url: URL = new URL(link.href);
      const originalHash: string = url.hash;
      if (isAnchorLink(link)) {
        if (originalHash) {
          url.hash = normalizeAnchor(originalHash);
          link.href = url.hash;
        }
      } else if (url.host === window.location.host) {
        // hosts match, meaning URL MIGHT have been malformed by showdown
        // url is a relative url or just a link to a part of the application
        if (url.pathname.endsWith('.md')) {
          // only check .md urls

          const hrefWithoutHash: string = removeTrailingHash(link.getAttribute('href'));

          url.href = generateAbsoluteHref(currentHref, hrefWithoutHash);

          if (originalHash) {
            url.hash = normalizeAnchor(originalHash);
          }
          link.href = url.href;
        }
        link.target = '_blank';
      } else {
        // url is absolute
        if (url.pathname.endsWith('.md')) {
          if (originalHash) {
            url.hash = normalizeAnchor(originalHash);
          }
          link.href = url.href;
        }
        link.target = '_blank';
      }
    });

    return new XMLSerializer().serializeToString(document);
  }
  return html;
}

function normalizeImageSrcs(html: string, currentHref: string): string {
  if (currentHref) {
    const document: Document = new DOMParser().parseFromString(html, 'text/html');
    document.querySelectorAll('img[src]').forEach((image: HTMLImageElement) => {
      const src: string = image.getAttribute('src');
      try {
        /* tslint:disable-next-line:no-unused-expression */
        new URL(src);
        if (isGithubHref(src)) {
          image.src = rawGithubHref(src);
        }
      } catch {
        image.src = generateAbsoluteHref(isGithubHref(currentHref) ? rawGithubHref(currentHref) : currentHref, src);
      }
    });

    return new XMLSerializer().serializeToString(document);
  }
  return html;
}

function addIdsToHeadings(html: string): string {
  if (html) {
    const document: Document = new DOMParser().parseFromString(html, 'text/html');
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading: HTMLElement) => {
      const id: string = normalizeAnchor(heading.innerHTML);
      heading.setAttribute('id', id);
    });
    return new XMLSerializer().serializeToString(document);
  }
  return html;
}

@Component({
  selector: 'td-markdown',
  styleUrls: ['./markdown.component.scss'],
  templateUrl: './markdown.component.html',
})
export class TdMarkdownComponent implements OnChanges, AfterViewInit, OnDestroy {
  private _content: string;
  private _simpleLineBreaks: boolean = false;
  private _hostedUrl: string;
  private _anchor: string;
  private handleAnchorClicksBound: EventListenerOrEventListenerObject;
  private _viewInit: boolean = false;
  /**
   * .td-markdown class added to host so ::ng-deep gets scoped.
   */
  @HostBinding('class') class: string = 'td-markdown';

  /**
   * content?: string
   *
   * Markdown format content to be parsed as html markup.
   *
   * e.g. README.md content.
   */
  @Input('content')
  set content(content: string) {
    this._content = content;
  }

  /**
   * simpleLineBreaks?: string
   *
   * Sets whether newline characters inside paragraphs and spans are parsed as <br/>.
   * Defaults to false.
   */
  @Input('simpleLineBreaks')
  set simpleLineBreaks(simpleLineBreaks: boolean) {
    this._simpleLineBreaks = simpleLineBreaks;
  }

  /**
   * hostedUrl?: string
   *
   * If markdown contains relative paths, this is required to generate correct urls.
   *
   */
  @Input('hostedUrl')
  set hostedUrl(hostedUrl: string) {
    this._hostedUrl = hostedUrl;
  }

  /**
   * anchor?: string
   *
   * Anchor to jump to.
   *
   */
  @Input('anchor')
  set anchor(anchor: string) {
    this._anchor = anchor;
  }

  /**
   * contentReady?: function
   * Event emitted after the markdown content rendering is finished.
   */
  @Output('contentReady') onContentReady: EventEmitter<undefined> = new EventEmitter<undefined>();

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef, private _domSanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    // only anchor changed
    if (changes.anchor && !changes.content && !changes.simpleLineBreaks && !changes.hostedUrl) {
      scrollToAnchor(this._elementRef.nativeElement, this._anchor);
    } else {
      this.refresh();
    }
  }

  ngAfterViewInit(): void {
    if (!this._content) {
      this._loadContent((<HTMLElement>this._elementRef.nativeElement).textContent);
    }
    this._viewInit = true;
  }

  ngOnDestroy(): void {
    this.removeAnchorListeners();
  }

  refresh(): void {
    if (this._content) {
      this._loadContent(this._content);
    } else if (this._viewInit) {
      this._loadContent((<HTMLElement>this._elementRef.nativeElement).textContent);
    }
  }

  /**
   * General method to parse a string markdown into HTML Elements and load them into the container
   */
  private _loadContent(markdown: string): void {
    if (markdown && markdown.trim().length > 0) {
      // Clean container
      this._renderer.setProperty(this._elementRef.nativeElement, 'innerHTML', '');
      // Parse html string into actual HTML elements.
      let divElement: HTMLDivElement = this._elementFromString(this._render(markdown));
    }
    this.removeAnchorListeners();
    this.handleAnchorClicksBound = this.handleAnchorClicks.bind(this);
    this.attachAnchorListeners();
    // TODO: timeout required since resizing of html elements occurs which causes a change in the scroll position
    setTimeout(() => scrollToAnchor(this._elementRef.nativeElement, this._anchor), 250);
    this.onContentReady.emit();
  }

  private async handleAnchorClicks(event: Event): Promise<void> {
    event.preventDefault();
    const url: URL = new URL((<HTMLAnchorElement>event.target).href);
    const hash: string = decodeURI(url.hash);
    scrollToAnchor(this._elementRef.nativeElement, hash);
  }

  private attachAnchorListeners(): void {
    // TODO: rxjs fromEvent
    Array.from(this._elementRef.nativeElement.querySelectorAll('a[href]'))
      .filter((link: HTMLAnchorElement) => isAnchorLink(link))
      .forEach((link: HTMLAnchorElement) => link.addEventListener('click', this.handleAnchorClicksBound));
  }

  private removeAnchorListeners(): void {
    Array.from(this._elementRef.nativeElement.querySelectorAll('a[href]'))
      .filter((link: HTMLAnchorElement) => isAnchorLink(link))
      .forEach((link: HTMLAnchorElement) => link.removeEventListener('click', this.handleAnchorClicksBound));
  }

  private _elementFromString(markupStr: string): HTMLDivElement {
    // Renderer2 doesnt have a parsing method, so we have to sanitize and use [innerHTML]
    // to parse the string into DOM element for now.
    const div: HTMLDivElement = this._renderer.createElement('div');
    this._renderer.appendChild(this._elementRef.nativeElement, div);
    const html: string = this._domSanitizer.sanitize(SecurityContext.HTML, markupStr);
    const htmlWithAbsoluteHrefs: string = normalizeHtmlHrefs(html, this._hostedUrl);
    const htmlWithAbsoluteImgSrcs: string = normalizeImageSrcs(htmlWithAbsoluteHrefs, this._hostedUrl);
    const htmlWithHeadingIds: string = addIdsToHeadings(htmlWithAbsoluteImgSrcs);
    div.innerHTML = htmlWithHeadingIds;
    return div;
  }

  private _render(markdown: string): string {
    // Trim leading and trailing newlines
    markdown = markdown.replace(/^(\s|\t)*\n+/g, '').replace(/(\s|\t)*\n+(\s|\t)*$/g, '');
    // Split markdown by line characters
    let lines: string[] = markdown.split('\n');

    // check how much indentation is used by the first actual markdown line
    let firstLineWhitespace: string = lines[0].match(/^(\s|\t)*/)[0];

    // Remove all indentation spaces so markdown can be parsed correctly
    let startingWhitespaceRegex: RegExp = new RegExp('^' + firstLineWhitespace);
    lines = lines.map(function(line: string): string {
      return line.replace(startingWhitespaceRegex, '');
    });

    // Join lines again with line characters
    let markdownToParse: string = lines.join('\n');

    // Convert markdown into html
    let converter: any = new showdown.Converter();
    converter.setOption('ghCodeBlocks', true);
    converter.setOption('tasklists', true);
    converter.setOption('tables', true);
    converter.setOption('simpleLineBreaks', this._simpleLineBreaks);
    let html: string = converter.makeHtml(markdownToParse);
    return html;
  }
}

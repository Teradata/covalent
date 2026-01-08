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
  HostBinding,
  NgZone,
  OnDestroy,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  scrollToAnchor,
  genHeadingId,
  isAnchorLink,
  removeTrailingHash,
  rawGithubHref,
  isGithubHref,
  isRawGithubHref,
  renderVideoElements,
  isFileLink,
} from './markdown-utils/markdown-utils';

import * as showdown from 'showdown';

function isAbsoluteUrl(currentHref: string): boolean {
  // Regular Expression to check url
  const RgExp = new RegExp('^(?:[a-z]+:)?//', 'i');
  return RgExp.test(currentHref);
}

// TODO: assumes it is a github url
// allow override somehow
function generateHref(currentHref: string, relativeHref: string): string {
  if (currentHref && relativeHref) {
    if (isAbsoluteUrl(currentHref)) {
      const currentUrl: URL = new URL(currentHref);
      const path: string = currentUrl.pathname
        .split('/')
        .slice(1, -1)
        .join('/');
      const correctUrl: URL = new URL(currentHref);

      if (relativeHref.startsWith('/')) {
        // url is relative to top level
        const orgAndRepo: string = path.split('/').slice(0, 3).join('/');
        correctUrl.pathname = `${orgAndRepo}${relativeHref}`;
      } else {
        correctUrl.pathname = `${path}/${relativeHref}`;
      }
      return correctUrl.href;
    } else {
      const path: string = currentHref.split('/').slice(0, -1).join('/');

      if (relativeHref.startsWith('/')) {
        return `${path}${relativeHref}`;
      } else {
        return `${path}/${relativeHref}`;
      }
    }
  }
  return '';
}

function normalizeHtmlHrefs(
  html: string,
  currentHref: string,
  fileLinkExtensions?: string[],
): string {
  if (currentHref) {
    const document: Document = new DOMParser().parseFromString(
      html,
      'text/html',
    );
    document
      .querySelectorAll<HTMLAnchorElement>('a[href]')
      .forEach((link: HTMLAnchorElement) => {
        const url: URL = new URL(link.href);
        const originalHash: string = url.hash;
        const isFileAnchorLink = isFileLink(link, fileLinkExtensions);
        if (isAnchorLink(link)) {
          if (originalHash) {
            url.hash = genHeadingId(originalHash);
            link.href = url.hash;
          }
        } else if (url.host === window.location.host) {
          // hosts match, meaning URL MIGHT have been malformed by showdown
          // url is a relative url or just a link to a part of the application
          if (url.pathname.endsWith('.md') || isFileAnchorLink) {
            // only check .md urls or urls ending with the fileLinkExtensions

            const hrefWithoutHash: string = removeTrailingHash(
              link.getAttribute('href'),
            );

            url.href = generateHref(currentHref, hrefWithoutHash);

            if (originalHash) {
              url.hash = genHeadingId(originalHash);
            }
            link.href = url.href;
          }
          link.target = isFileAnchorLink ? '_self' : '_blank';
        } else {
          // url is absolute
          if (url.pathname.endsWith('.md')) {
            if (originalHash) {
              url.hash = genHeadingId(originalHash);
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
    const document: Document = new DOMParser().parseFromString(
      html,
      'text/html',
    );
    document
      .querySelectorAll<HTMLImageElement>('img[src]')
      .forEach((image: HTMLImageElement) => {
        const src = image.getAttribute('src') ?? '';
        try {
          /* tslint:disable-next-line:no-unused-expression */
          new URL(src);
          if (isGithubHref(src)) {
            image.src = rawGithubHref(src);
          }
        } catch {
          image.src = generateHref(
            isGithubHref(currentHref)
              ? rawGithubHref(currentHref)
              : currentHref,
            src,
          );
        }
        // gh svgs need to have ?sanitize=true
        if (isRawGithubHref(image.src)) {
          const url: URL = new URL(image.src);
          if (url.pathname.endsWith('.svg')) {
            url.searchParams.set('sanitize', 'true');
            image.src = url.href;
          }
        }
      });

    return new XMLSerializer().serializeToString(document);
  }
  return html;
}

function addIdsToHeadings(html: string): string {
  if (html) {
    const document: Document = new DOMParser().parseFromString(
      html,
      'text/html',
    );
    document
      .querySelectorAll('h1, h2, h3, h4, h5, h6')
      .forEach((heading: Element) => {
        const strippedInnerHTML = stripAllHtmlTags(heading.innerHTML);
        const id: string = genHeadingId(strippedInnerHTML);
        heading.setAttribute('id', id);
      });
    return new XMLSerializer().serializeToString(document);
  }
  return html;
}

function changeStyleAlignmentToClass(html: string) {
  if (html) {
    const document: Document = new DOMParser().parseFromString(
      html,
      'text/html',
    );
    ['right', 'center', 'left'].forEach((alignment: string) => {
      document
        .querySelectorAll(`[style*='text-align:${alignment}']`)
        .forEach((style: Element) => {
          style.setAttribute('class', `markdown-align-${alignment}`);
        });
    });

    return new XMLSerializer().serializeToString(document);
  }

  return html;
}

// Strips all the html tags in the html sand returns the text
function stripAllHtmlTags(input: string): string {
  let sanitized = input;
  let previous;

  do {
    previous = sanitized;
    sanitized = sanitized.replace(/<[^>]+>/g, '');
  } while (previous !== sanitized);

  return sanitized;
}

@Component({
  selector: 'td-markdown',
  styleUrls: ['./markdown.component.scss'],
  templateUrl: './markdown.component.html',
})
export class TdMarkdownComponent
  implements OnChanges, AfterViewInit, OnDestroy
{
  private _content!: string;
  private _simpleLineBreaks = false;
  private _hostedUrl!: string;
  private _anchor!: string;
  private _viewInit = false;
  private _fileLinkExtensions!: string[] | undefined;
  private _anchorListener?: VoidFunction;
  /**
   * .td-markdown class added to host so ::ng-deep gets scoped.
   */
  @HostBinding('class') class = 'td-markdown';

  /**
   * content?: string
   *
   * Markdown format content to be parsed as html markup.
   *
   * e.g. README.md content.
   */
  @Input()
  set content(content: string) {
    this._content = content;
  }

  /**
   * simpleLineBreaks?: string
   *
   * Sets whether newline characters inside paragraphs and spans are parsed as <br/>.
   * Defaults to false.
   */
  @Input()
  set simpleLineBreaks(simpleLineBreaks: boolean) {
    this._simpleLineBreaks = simpleLineBreaks;
  }

  /**
   * hostedUrl?: string
   *
   * If markdown contains relative paths, this is required to generate correct urls.
   *
   */
  @Input()
  set hostedUrl(hostedUrl: string) {
    this._hostedUrl = hostedUrl;
  }

  /**
   * anchor?: string
   *
   * Anchor to jump to.
   *
   */
  @Input()
  set anchor(anchor: string) {
    this._anchor = anchor;
  }

  /**
   * The file extensions to monitor for in anchor tags. If an anchor's `href` ends
   * with these extensions, an event will be emitted instead of performing the default click action.
   * Example values: [".ipynb", ".zip", ".docx"]
   */
  @Input()
  set fileLinkExtensions(extensions: string[] | undefined) {
    this._fileLinkExtensions = extensions;
  }

  /**
   * Event emitted when an anchor tag with an `href` matching the specified
   * fileLinkExtensions is clicked. The emitted value is the URL of the clicked anchor.
   */
  @Output() fileLinkClicked = new EventEmitter<URL>();

  /**
   * contentReady?: function
   * Event emitted after the markdown content rendering is finished.
   */
  @Output() contentReady: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    private _domSanitizer: DomSanitizer,
    private _ngZone: NgZone,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    // only anchor changed
    if (
      changes['anchor'] &&
      !changes['content'] &&
      !changes['simpleLineBreaks'] &&
      !changes['hostedUrl']
    ) {
      scrollToAnchor(this._elementRef.nativeElement, this._anchor, true);
    } else {
      this.refresh();
    }
  }

  ngAfterViewInit(): void {
    if (!this._content) {
      this._loadContent(
        (<HTMLElement>this._elementRef.nativeElement).textContent,
      );
    }
    this._viewInit = true;

    // Caretaker note: the `scrollToAnchor` calls `element.scrollIntoView`, a native synchronous DOM
    // API and it doesn't require Angular running `ApplicationRef.tick()` each time the markdown component is clicked.
    // Host listener (added through `@HostListener`) cause Angular to add an event listener within the Angular zone.
    // It also calls `markViewDirty()` before calling the actual listener (the decorated class method).
    this._ngZone.runOutsideAngular(() => {
      this._anchorListener = this._renderer.listen(
        this._elementRef.nativeElement,
        'click',
        (event: MouseEvent) => {
          const element: HTMLElement = <HTMLElement>event.srcElement;
          if (
            element.matches('a[href]') &&
            isAnchorLink(<HTMLAnchorElement>element)
          ) {
            this.handleAnchorClicks(event);
          } else if (
            element.matches('a[href]') &&
            isFileLink(<HTMLAnchorElement>element, this._fileLinkExtensions)
          ) {
            this.handleFileAnchorClicks(event);
          }
        },
      );
    });
  }

  ngOnDestroy(): void {
    this._anchorListener?.();
  }

  refresh(): void {
    if (this._content) {
      this._loadContent(this._content);
    } else if (this._viewInit) {
      this._loadContent(
        (<HTMLElement>this._elementRef.nativeElement).textContent,
      );
    }
  }

  /**
   * General method to parse a string markdown into HTML Elements and load them into the container
   */
  private _loadContent(markdown: string | null): void {
    if (markdown && markdown.trim().length > 0) {
      // Clean container
      this._renderer.setProperty(
        this._elementRef.nativeElement,
        'innerHTML',
        '',
      );
      // Parse html string into actual HTML elements.
      this._elementFromString(this._render(markdown));
    }
    // TODO: timeout required since resizing of html elements occurs which causes a change in the scroll position
    this._ngZone.runOutsideAngular(() =>
      setTimeout(
        () =>
          scrollToAnchor(this._elementRef.nativeElement, this._anchor, true),
        250,
      ),
    );
    this.contentReady.emit();
  }

  private handleAnchorClicks(event: Event): void {
    event.preventDefault();
    const url: URL = new URL((<HTMLAnchorElement>event.target).href);
    const hash: string = decodeURI(url.hash);
    scrollToAnchor(this._elementRef.nativeElement, hash, true);
  }

  private handleFileAnchorClicks(event: Event): void {
    event.preventDefault();
    const url: URL = new URL((<HTMLAnchorElement>event.target).href);
    this.fileLinkClicked.emit(url);
  }

  private _elementFromString(markupStr: string): HTMLDivElement {
    // Renderer2 doesnt have a parsing method, so we have to sanitize and use [innerHTML]
    // to parse the string into DOM element for now.
    const div: HTMLDivElement = this._renderer.createElement('div');
    this._renderer.appendChild(this._elementRef.nativeElement, div);

    const html: string =
      this._domSanitizer.sanitize(
        SecurityContext.STYLE,
        changeStyleAlignmentToClass(markupStr),
      ) ?? '';

    const htmlWithAbsoluteHrefs: string = normalizeHtmlHrefs(
      html,
      this._hostedUrl,
      this._fileLinkExtensions,
    );
    const htmlWithAbsoluteImgSrcs: string = normalizeImageSrcs(
      htmlWithAbsoluteHrefs,
      this._hostedUrl,
    );
    const htmlWithHeadingIds: string = addIdsToHeadings(
      htmlWithAbsoluteImgSrcs,
    );
    const htmlWithVideos: SafeHtml = renderVideoElements(htmlWithHeadingIds);
    this._renderer.setProperty(div, 'innerHTML', htmlWithVideos);
    return div;
  }

  private _render(markdown: string): string {
    // Trim leading and trailing newlines
    markdown = markdown
      .replace(/^(\s|\t)*\n+/g, '')
      .replace(/(\s|\t)*\n+(\s|\t)*$/g, '');

    // Preprocess markdown to fix common formatting issues
    markdown = this._preprocessMarkdown(markdown);

    // Split markdown by line characters
    let lines: string[] = markdown.split('\n');

    // check how much indentation is used by the first actual markdown line
    const firstLineWhitespaceMatch = lines[0].match(/^(\s|\t)*/);
    const firstLineWhitespace: string = firstLineWhitespaceMatch
      ? firstLineWhitespaceMatch[0]
      : '';

    // Remove all indentation spaces so markdown can be parsed correctly
    const startingWhitespaceRegex = new RegExp('^' + firstLineWhitespace);
    lines = lines.map(function (line: string): string {
      return line.replace(startingWhitespaceRegex, '');
    });

    // Join lines again with line characters
    const markdownToParse: string = lines.join('\n');

    // Convert markdown into html
    const converter: showdown.Converter = new showdown.Converter();
    converter.setOption('ghCodeBlocks', true);
    converter.setOption('ghCompatibleHeaderId', true);
    converter.setOption('tasklists', true);
    converter.setOption('tables', true);
    converter.setOption('literalMidWordUnderscores', true);
    converter.setOption('simpleLineBreaks', this._simpleLineBreaks);
    converter.setOption('disableForced4SpacesIndentedSublists', true);
    converter.setOption('smoothLivePreview', true);
    converter.setOption('smartIndentationFix', true);
    converter.setOption('requireSpaceBeforeHeadingText', true);
    converter.setOption('emoji', true);
    converter.setOption('literalMidWordUnderscores', true);
    converter.setOption('smoothLivePreview', true);
    converter.setOption('smartIndentationFix', true);

    return converter.makeHtml(markdownToParse);
  }

  /**
   * Preprocesses markdown to create correct visual hierarchy based on context patterns.
   * Uses hierarchy inference instead of problem detection.
   */
  private _preprocessMarkdown(markdown: string): string {
    if (!markdown || markdown.trim().length === 0) {
      return markdown;
    }

    const lines = markdown.split('\n');
    const processedLines: string[] = [];
    const hierarchyStack: Array<{ marker: string; level: number }> = [];

    for (const line of lines) {
      const trimmedLine = line.trim();

      if (trimmedLine === '') {
        processedLines.push(line);
        continue;
      }

      // Detect ordered list (always level 0)
      const orderedMatch = line.match(/^(\s*)(\d+)\.\s+(.*)$/);
      if (orderedMatch) {
        hierarchyStack.length = 0;
        processedLines.push(line);
        continue;
      }

      // Detect bullet list
      const bulletMatch = line.match(/^(\s*)([*\-+])\s+(.*)$/);
      if (bulletMatch) {
        const marker = bulletMatch[2];
        const content = bulletMatch[3];
        const level = this._inferHierarchyLevel(marker, hierarchyStack);
        const indent = ' '.repeat(level * 3); // 3 spaces per level
        const fixedLine = `${indent}${marker} ${content}`;
        processedLines.push(fixedLine);
        continue;
      }

      processedLines.push(line);
      if (!line.match(/^\s/) && trimmedLine !== '') {
        hierarchyStack.length = 0;
      }
    }

    return processedLines.join('\n');
  }

  /**
   * Infers hierarchy level based on marker patterns and context stack.
   */
  private _inferHierarchyLevel(
    currentMarker: string,
    stack: Array<{ marker: string; level: number }>,
  ): number {
    const existingIndex = stack.findIndex(
      (item) => item.marker === currentMarker,
    );

    if (existingIndex >= 0) {
      stack.length = existingIndex + 1;
      return stack[existingIndex].level;
    } else {
      const newLevel = stack.length + 1;
      stack.push({ marker: currentMarker, level: newLevel });
      return newLevel;
    }
  }
}

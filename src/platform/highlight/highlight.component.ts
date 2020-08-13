import {
  Component,
  AfterViewInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  Renderer2,
  SecurityContext,
  ViewChild,
  ChangeDetectorRef,
  AfterViewChecked,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare const require: any;
/* tslint:disable-next-line */
let hljs: any = require('highlight.js/lib');

@Component({
  selector: 'td-highlight',
  styleUrls: ['./highlight.component.scss'],
  templateUrl: './highlight.component.html',
})
export class TdHighlightComponent implements AfterViewInit, AfterViewChecked {
  private _initialized: boolean = false;

  private _content: string;
  private _lang: string = 'typescript';

  private _copyToClipboardCopiedTooltip: string = 'Copied';

  /**
   * content?: string
   *
   * Code content to be parsed as highlighted html.
   * Used to load data dynamically.
   *
   * e.g. `.html`, `.ts` , etc.
   */
  @Input('content')
  set content(content: string) {
    this._content = content;
    if (this._initialized) {
      this._loadContent(this._content);
    }
  }

  /**
   * copyToClipboard?: boolean
   *
   * Used to display copy button for the code snippets
   */
  @Input() copyToClipboard: boolean = false;

  /**
   * copyToClipboardTooltip?: string
   *
   * tooltip to show on hover of the copy button
   */
  @Input() copyToClipboardTooltip: string = 'Copy';

  /**
   * copyToClipboardCopiedTooltip?: string
   *
   * message to show when text gets copied
   */
  @Input('copyToClipboardCopiedTooltip')
  set copyToClipboardCopiedTooltip(copyToClipboardCopiedTooltip: string) {
    this._copyToClipboardCopiedTooltip = copyToClipboardCopiedTooltip ? copyToClipboardCopiedTooltip : 'Copied';
  }

  /**
   * lang?: string
   *
   * Language of the code content to be parsed as highlighted html.
   * Defaults to `typescript`
   *
   * e.g. `typescript`, `html` , etc.
   */
  @Input('lang')
  set lang(lang: string) {
    if (!lang) {
      throw new Error('Error: language attribute must be defined in TdHighlightComponent.');
    }
    this._lang = lang;
    if (this._initialized) {
      this._loadContent(this._content);
    }
  }

  copyContent: string;

  /**
   * contentReady?: function
   * Event emitted after the highlight content rendering is finished.
   */
  @Output() contentReady: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('highlightComponent') highlightComp: ElementRef;
  @ViewChild('copyComponent') copyComp: ElementRef;

  @ViewChild('tooltip') tooltip: any;

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    private _domSanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
  ) {}

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    if (!this._content) {
      this._loadContent((<HTMLElement>this.highlightComp.nativeElement).textContent);
    } else {
      this._loadContent(this._content);
    }
    this._initialized = true;
  }

  textCopied(event: EventEmitter<boolean>): void {
    if (event) {
      this.tooltip.message = this._copyToClipboardCopiedTooltip;
      this.tooltip.show();
      setTimeout(() => {
        this.tooltip.hide();
        this.tooltip.message = this.copyToClipboardTooltip;
      }, 2000);
    }
  }

  /**
   * General method to parse a string of code into HTML Elements and load them into the container
   */
  private _loadContent(code: string): void {
    if (code && code.trim().length > 0) {
      // Clean container
      this._renderer.setProperty(this._elementRef.nativeElement, 'innerHTML', '');
      // Parse html string into actual HTML elements.
      this._elementFromString(this._render(code));
      if (this.copyToClipboard) {
        this._renderer.appendChild(this._elementRef.nativeElement, this.copyComp.nativeElement);
      }
    }
    this.contentReady.emit();
  }

  private _elementFromString(codeStr: string): HTMLPreElement {
    // Renderer2 doesnt have a parsing method, so we have to sanitize and use [innerHTML]
    // to parse the string into DOM element for now.
    const preElement: HTMLPreElement = this._renderer.createElement('pre');
    this._renderer.appendChild(this._elementRef.nativeElement, preElement);
    const codeElement: HTMLElement = this._renderer.createElement('code');
    this._renderer.appendChild(preElement, codeElement);
    // Set .highlight class into <code> element
    this._renderer.addClass(codeElement, 'highlight');
    codeElement.innerHTML = this._domSanitizer.sanitize(SecurityContext.HTML, codeStr);
    return preElement;
  }

  private _render(contents: string): string {
    // Trim leading and trailing newlines
    contents = contents.replace(/^(\s|\t)*\n+/g, '').replace(/(\s|\t)*\n+(\s|\t)*$/g, '');
    // Split markup by line characters
    let lines: string[] = contents.split('\n');

    // check how much indentation is used by the first actual code line
    const firstLineWhitespace: string = lines[0].match(/^(\s|\t)*/)[0];

    // Remove all indentation spaces so code can be parsed correctly
    const startingWhitespaceRegex: RegExp = new RegExp('^' + firstLineWhitespace);
    lines = lines.map(function (line: string): string {
      return line
        .replace('=""', '') // remove empty values
        .replace(startingWhitespaceRegex, '')
        .replace(/\s+$/, ''); // remove trailing white spaces
    });

    const codeToParse: string = lines
      .join('\n')
      .replace(/\{ \{/gi, '{{')
      .replace(/\} \}/gi, '}}')
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>'); // replace with < and > to render HTML in Angular
    this.copyContent = codeToParse;
    // Parse code with highlight.js depending on language
    const highlightedCode: any = hljs.highlight(this._lang, codeToParse, true);
    highlightedCode.value = highlightedCode.value
      .replace(/=<span class="hljs-value">""<\/span>/gi, '')
      .replace('<head>', '')
      .replace('<head/>', '');
    return highlightedCode.value;
  }
}

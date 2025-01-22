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
import { MatTooltip } from '@angular/material/tooltip';
import {
  ICopyCodeTooltips,
  IRawToggleLabels,
  TdCopyCodeButtonComponent,
} from './copy-code-button/copy-code-button.component';

import hljs, { HighlightResult } from 'highlight.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'td-highlight',
  styleUrls: ['./highlight.component.scss'],
  templateUrl: './highlight.component.html',
  imports: [CommonModule, TdCopyCodeButtonComponent],
})
export class TdHighlightComponent implements AfterViewInit, AfterViewChecked {
  private _initialized = false;

  private _content!: string;
  private _lang = 'typescript';

  private _showRaw = false;

  /**
   * content?: string
   *
   * Code content to be parsed as highlighted html.
   * Used to load data dynamically.
   *
   * e.g. `.html`, `.ts` , etc.
   */
  @Input()
  set content(content: string) {
    this._content = content;
    if (this._initialized) {
      this._loadContent(this._content);
    }
  }

  /**
   * copyCodeToClipboard?: boolean
   *
   * Display copy button on code snippets to copy code to clipboard.
   */
  @Input() copyCodeToClipboard? = false;

  /**
   * copyCodeTooltips?: ICopyCodeTooltips
   *
   * Tooltips for copy button to copy and upon copying.
   */
  @Input() copyCodeTooltips?: ICopyCodeTooltips = {};

  /**
   * toggleRawButton?: boolean
   *
   * Display button to toggle raw code.
   */
  @Input() toggleRawButton = false;

  /**
   * rawToggleLabels?: IRawToggleLabels
   *
   * Labels for raw toggle button.
   */
  @Input() rawToggleLabels?: IRawToggleLabels = {};

  /**
   * lang?: string
   *
   * Language of the code content to be parsed as highlighted html.
   * Defaults to `typescript`
   *
   * e.g. `typescript`, `html` , etc.
   */

  @Input()
  set codeLang(lang: string) {
    this.setLanguage(lang);
  }
  /** @deprecated - removed completely @4.0.0 */
  @Input()
  set lang(lang: string) {
    // tslint:disable-next-line: no-console
    console.warn(
      'DEPRECATION WARNING: switch to codeLang attribute as lang attribute is deprecated.'
    );
    this.setLanguage(lang);
  }

  copyContent!: string;

  /**
   * contentReady?: function
   * Event emitted after the highlight content rendering is finished.
   */
  @Output() contentReady: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('highlightComponent') highlightComp!: ElementRef;
  @ViewChild('copyComponent') copyComp!: ElementRef;

  @ViewChild('tooltip') tooltip!: MatTooltip;

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    private _domSanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    if (!this._content) {
      this._content =
        (<HTMLElement>this.highlightComp.nativeElement).textContent || '';
    }
    this._loadContent(this._content);

    this._initialized = true;
  }

  setLanguage(lang: string): void {
    if (!lang) {
      throw new Error(
        'Error: language attribute must be defined in TdHighlightComponent.'
      );
    }
    this._lang = lang;
    if (this._initialized) {
      this._loadContent(this._content);
    }
  }

  toggleRawClicked(): void {
    this._showRaw = !this._showRaw;
    this._elementRef.nativeElement.querySelector('pre').style.display = this
      ._showRaw
      ? 'none'
      : 'block';
    this._elementRef.nativeElement.querySelector('.raw').style.display = this
      ._showRaw
      ? 'block'
      : 'none';
  }

  /**
   * General method to parse a string of code into HTML Elements and load them into the container
   */
  private _loadContent(code: string | null): void {
    if (code && code.trim().length > 0) {
      // Clean container
      this._renderer.setProperty(
        this._elementRef.nativeElement,
        'innerHTML',
        ''
      );

      this._elementFromString(code);

      if (this.copyCodeToClipboard) {
        this._renderer.appendChild(
          this._elementRef.nativeElement,
          this.copyComp.nativeElement
        );
      }
    }
    this.contentReady.emit();
  }

  private _elementFromString(codeStr: string): void {
    // Renderer2 doesnt have a parsing method, so we have to sanitize and use [innerHTML]
    // to parse the string into DOM element for now.
    const preElement: HTMLPreElement = this._renderer.createElement('pre');
    this._renderer.appendChild(this._elementRef.nativeElement, preElement);
    const codeElement: HTMLElement = this._renderer.createElement('code');
    this._renderer.appendChild(preElement, codeElement);
    // Set .highlight class into <code> element
    this._renderer.addClass(codeElement, 'highlight');

    const highlightedCode = this._render(codeStr);

    codeElement.innerHTML =
      this._domSanitizer.sanitize(SecurityContext.HTML, highlightedCode) ?? '';

    if (this.toggleRawButton) {
      const divElement: HTMLDivElement = this._renderer.createElement('div');
      divElement.className = 'raw';
      this._renderer.appendChild(this._elementRef.nativeElement, divElement);
      divElement.innerHTML =
        this._domSanitizer.sanitize(SecurityContext.HTML, codeStr) ?? '';
      this._renderer.setStyle(divElement, 'display', 'none');
    }
  }

  private _render(contents: string): string {
    // Trim leading and trailing newlines
    contents = contents
      .replace(/^(\s|\t)*\n+/g, '')
      .replace(/(\s|\t)*\n+(\s|\t)*$/g, '');
    // Split markup by line characters
    let lines: string[] = contents.split('\n');

    // check how much indentation is used by the first actual code line
    const firstLineWhitespaceMatch = lines[0].match(/^(\s|\t)*/);
    const firstLineWhitespace = firstLineWhitespaceMatch
      ? firstLineWhitespaceMatch[0]
      : null;

    // Remove all indentation spaces so code can be parsed correctly
    const startingWhitespaceRegex = new RegExp('^' + firstLineWhitespace);
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
    const highlightedCode: HighlightResult = hljs.highlight(codeToParse, {
      language: this._lang,
      ignoreIllegals: true,
    });
    highlightedCode.value = highlightedCode.value
      .replace(/=<span class="hljs-value">""<\/span>/gi, '')
      .replace('<head>', '')
      .replace('<head/>', '');
    return highlightedCode.value;
  }
}

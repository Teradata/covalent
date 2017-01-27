import { Component, AfterViewInit, ElementRef, Input, Renderer, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/* tslint:disable-next-line */
let hljs: any = require('highlight.js/lib');

@Component({
  selector: 'td-highlight',
  styleUrls: ['./highlight.component.scss'],
  templateUrl: './highlight.component.html',
})
export class TdHighlightComponent implements AfterViewInit {

  private _content: string;

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
    this._loadContent(this._content);
  }

  /**
   * lang?: string
   *
   * Language of the code content to be parsed as highlighted html.
   * Defaults to `typescript`
   *
   * e.g. `typescript`, `html` , etc.
   */
  @Input('lang') language: string = 'typescript';

  constructor(private _renderer: Renderer,
              private _elementRef: ElementRef,
              private _domSanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {
    if (!this.language) {
      throw new Error('Error: language attribute must be defined in TdHighlightComponent.');
    }
    if (!this._content) {
      this._loadContent((<HTMLElement>this._elementRef.nativeElement).textContent);
    }
  }
  /**
   * General method to parse a string of code into HTML Elements and load them into the container
   */
  private _loadContent(code: string): void {
    if (code && code.trim().length > 0) {
      // Parse html string into actual HTML elements.
      let preElement: HTMLPreElement = this._elementFromString(this._render(code));
      // Clean container
      this._renderer.setElementProperty(this._elementRef.nativeElement, 'innerHTML', '');
      // Project DIV element into container
      this._renderer.projectNodes(this._elementRef.nativeElement, [preElement]);
    }
  }

  private _elementFromString(codeStr: string): HTMLPreElement {
    // Renderer doesnt have a parsing method, so we have to sanitize and use [innerHTML]
    // to parse the string into DOM element for now.
    const preElement: HTMLPreElement = this._renderer.createElement(this._elementRef.nativeElement, 'pre');
    const codeElement: HTMLElement = this._renderer.createElement(preElement, 'code');
    // Set .highlight class into <code> element
    this._renderer.setElementClass(codeElement, 'highlight', true);
    codeElement.innerHTML = this._domSanitizer.sanitize(SecurityContext.HTML, codeStr);
    return preElement;
  }

  private _render(contents: string): string {
    // Trim leading and trailing newlines
    contents = contents.replace(/^(\s|\t)*\n+/g, '')
                       .replace(/(\s|\t)*\n+(\s|\t)*$/g, '');
    // Split markup by line characters
    let lines: string[] = contents.split('\n');

    // check how much indentation is used by the first actual code line
    let firstLineWhitespace: string = lines[0].match(/^(\s|\t)*/)[0];

    // Remove all indentation spaces so code can be parsed correctly
    let startingWhitespaceRegex: RegExp = new RegExp('^' + firstLineWhitespace);
    lines = lines.map(function(line: string): string {
      return line
        .replace('=""', '') // remove empty values
        .replace(startingWhitespaceRegex, '')
        .replace(/\s+$/, ''); // remove trailing white spaces
    });

    let codeToParse: string =  lines.join('\n')
    .replace(/\{ \{/gi, '{{').replace(/\} \}/gi, '}}')
    .replace(/&lt;/gi, '<').replace(/&gt;/gi, '>');  // replace with < and > to render HTML in angular 2

    // Parse code with highlight.js depending on language
    let highlightedCode: any = hljs.highlight(this.language, codeToParse, true);
    highlightedCode.value = highlightedCode.value
      .replace(/=<span class="hljs-value">""<\/span>/gi, '')
      .replace('<head>', '')
      .replace('<head/>', '');
    return highlightedCode.value;
  }
}

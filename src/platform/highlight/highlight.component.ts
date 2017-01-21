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
      throw 'Error: [lang] input must be defined in TdHighlightComponent.';
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
    // Split markup by line characters
    let lines: string[] = contents.split('\n');

    // Remove empty start lines only
    this._removeEmptyElementAtStart(lines);
    // Remove empty ending lines only
    this._removeEmptyElementAtEnd(lines);

    // check how much indentation is used by the first actual code line
    let firstLineWhitespace: string = '';
    for (let line of lines) {
      if (line && line.trim().length > 0) {
        firstLineWhitespace = line.match(/^\s*/)[0];
        break;
      }
    }

    // Remove all indentation spaces so code can be parsed correctly
    let startingWhitespaceRegex: RegExp = new RegExp('^' + firstLineWhitespace);
    lines = lines.map(function(line: string): string {
      return line
        .replace('=""', '') // remove empty values
        .replace(startingWhitespaceRegex, '')
        .replace(/\s+$/, '');
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

  /**
   * Method to remove empty lines at the beggining of the array
   */
  private _removeEmptyElementAtStart(elements: string[]): void {
    let emptyLines: number = 0;
    for (; emptyLines < elements.length; emptyLines++) {
      if (elements[emptyLines].trim().length > 0) {
        break;
      }
    }
    while (emptyLines--) {
      elements.shift();
    }
  }

  /**
   * Method to remove empty lines at the end of the array
   */
  private _removeEmptyElementAtEnd(elements: string[]): void {
    let emptyLines: number = elements.length - 1;
    for (; emptyLines >= 0; emptyLines--) {
      if (elements[emptyLines].trim().length > 0) {
        break;
      }
    }
    emptyLines = (elements.length - 1) - emptyLines;
    while (emptyLines--) {
      elements.pop();
    }
  }
}

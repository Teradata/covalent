import { Component, AfterViewInit, ViewChild, ElementRef, Input, Renderer } from '@angular/core';
/* tslint:disable-next-line */ 
let hljs: any = require('highlight.js/lib');

@Component({
  selector: 'td-highlight',
  styleUrls: ['./highlight.component.scss'],
  templateUrl: './highlight.component.html',
})
export class TdHighlightComponent implements AfterViewInit {

  @Input('lang') language: string = 'javascript';

  @ViewChild('highlight') content: ElementRef;

  constructor(private renderer: Renderer) {

  }

  ngAfterViewInit(): void {
    if (!this.language) {
      throw 'Error: language attribute must be defined in TdHighlightComponent.';
    }
    let codeElement: HTMLElement = this.content.nativeElement;
    let code: string = codeElement.innerHTML;
    this.renderer.detachView([].slice.call(codeElement.childNodes));
    this.renderer.setElementClass(codeElement, 'highlight', true);
    codeElement.innerHTML = this._render(code);
  }

  private _render(contents: string): string {
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

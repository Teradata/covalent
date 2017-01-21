import { Component, AfterViewInit, ElementRef, Input, Renderer, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare var showdown: any;

@Component({
  selector: 'td-markdown',
  styleUrls: ['./markdown.component.scss'],
  templateUrl: './markdown.component.html',
})
export class TdMarkdownComponent implements AfterViewInit {

  private _content: string;

  /**
   * content?: string
   * 
   * Markdown format content to be parsed as html markup.
   * Used to load data dynamically.
   * 
   * e.g. Resource file.
   */
  @Input('content')
  set content(content: string) {
    this._content = content;
    this._loadContent(this._content);
  }

  constructor(private _renderer: Renderer,
              private _elementRef: ElementRef,
              private _domSanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {
    if (!this._content) {
      this._loadContent((<HTMLElement>this._elementRef.nativeElement).textContent);
    }
  }

  /**
   * General method to parse a string markdown into HTML Elements and load them into the container
   */
  private _loadContent(markdown: string): void {
    if (markdown && markdown.trim().length > 0) {
      // Parse html string into actual HTML elements.
      let divElement: HTMLDivElement = this._elementFromString(this._render(markdown));
      // Clean container
      this._renderer.setElementProperty(this._elementRef.nativeElement, 'innerHTML', '');
      // Project DIV element into container
      this._renderer.projectNodes(this._elementRef.nativeElement, [divElement]);
    }
  }

  private _elementFromString(markupStr: string): HTMLDivElement {
    // Renderer doesnt have a parsing method, so we have to sanitize and use [innerHTML]
    // to parse the string into DOM element for now.
    const div: HTMLDivElement = this._renderer.createElement(this._elementRef.nativeElement, 'div');
    div.innerHTML = this._domSanitizer.sanitize(SecurityContext.HTML, markupStr);
    return div;
  }

  private _render(markup: string): string {
    // Split markup by line characters
    let lines: string[] = markup.split('\n');

    // check how much indentation is used by the first actual markup line
    let firstLineWhitespace: string = '';
    for (let line of lines) {
      if (line && line.trim().length > 0) {
        firstLineWhitespace = line.match(/^\s*/)[0];
        break;
      }
    }

    // Remove all indentation spaces so markup can be parsed correctly
    let startingWhitespaceRegex: RegExp = new RegExp('^' + firstLineWhitespace);
    lines = lines.map(function(line: string): string {
      return line.replace(startingWhitespaceRegex, '');
    });

    // Join lines again with line characters
    let codeToParse: string =  lines.join('\n');

    // Convert markup into html
    let converter: any = new showdown.Converter();
    converter.setOption('ghCodeBlocks', true);
    converter.setOption('tasklists', true);
    converter.setOption('tables', true);
    let html: string = converter.makeHtml(codeToParse);
    return html;
  }

}

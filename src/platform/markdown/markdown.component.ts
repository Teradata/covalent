import { Component, AfterViewInit, ElementRef, Input, Output, EventEmitter, Renderer2, SecurityContext } from '@angular/core';
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
   * e.g. README.md content.
   */
  @Input('content')
  set content(content: string) {
    this._content = content;
    this._loadContent(this._content);
  }

  /**
   * contentReady?: function
   * Event emitted after the markdown content rendering is finished.
   */
  @Output('contentReady') onContentReady: EventEmitter<undefined> = new EventEmitter<undefined>();

  constructor(private _renderer: Renderer2,
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
      // Clean container
      this._renderer.setProperty(this._elementRef.nativeElement, 'innerHTML', '');
      // Parse html string into actual HTML elements.
      let divElement: HTMLDivElement = this._elementFromString(this._render(markdown));
    }
    this.onContentReady.emit();
  }

  private _elementFromString(markupStr: string): HTMLDivElement {
    // Renderer2 doesnt have a parsing method, so we have to sanitize and use [innerHTML]
    // to parse the string into DOM element for now.
    const div: HTMLDivElement = this._renderer.createElement('div');
    this._renderer.appendChild(this._elementRef.nativeElement, div);
    div.innerHTML = this._domSanitizer.sanitize(SecurityContext.HTML, markupStr);
    return div;
  }

  private _render(markdown: string): string {
    // Trim leading and trailing newlines
    markdown = markdown.replace(/^(\s|\t)*\n+/g, '')
                       .replace(/(\s|\t)*\n+(\s|\t)*$/g, '');
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
    let markdownToParse: string =  lines.join('\n');

    // Convert markdown into html
    let converter: any = new showdown.Converter();
    converter.setOption('ghCodeBlocks', true);
    converter.setOption('tasklists', true);
    converter.setOption('tables', true);
    let html: string = converter.makeHtml(markdownToParse);
    return html;
  }

}

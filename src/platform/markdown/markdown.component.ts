import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var showdown: any;

@Component({
  selector: 'td-markdown',
  styleUrls: ['./markdown.component.scss'],
  templateUrl: './markdown.component.html',
})
export class TdMarkdownComponent implements AfterViewInit {

  private _content: string;
  markup: string;

  @ViewChild('markdown') container: ElementRef;

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

  ngAfterViewInit(): void {
    if (!this._content) {
      this._loadContent(this.container.nativeElement.innerText);
    }
  }

  private _loadContent(markdown: string): void {
    if (markdown && markdown.trim().length > 0) {
      this.markup = this._render(markdown);
    }
  }

  private _render(markup: string): string {
    // Split markup by line characters
    let lines: string[] = markup.split('\n');

    // check how much indentation is used by the first actual markup line
    let whiteSpacesInfront: number = 0;
    for (let i: number = 0; i < lines.length; i++) {
      let line: string = lines[i];
      if (line.trim().length > 0) {
        whiteSpacesInfront = line.match(/^\s*/)[0].length;
        break;
      }
    }

    // Remove all indentation spaces so markup can be parsed correctly
    let startingWhitespaceRegex: RegExp = new RegExp('^\\s{' + whiteSpacesInfront + '}');
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

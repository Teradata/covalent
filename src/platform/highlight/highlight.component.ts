import { Component, AfterViewInit, ViewChild, ElementRef, Input, Renderer } from '@angular/core';
/* tslint:disable-next-line */ 
let hljs: any = require('highlight.js/lib');

@Component({
  selector: 'td-highlight',
  styleUrls: ['highlight.component.scss'],
  templateUrl: 'highlight.component.html',
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
    this.render(code, codeElement);
  }

  render(contents: string, codeElement: HTMLElement): void {
    let lines: string[] = contents.split('\n');

    // Remove empty lines
    lines = lines.filter(function(line: string): boolean {
      return line.trim().length > 0;
    });
    // Make it so each line starts at 0 whitespace
    let firstLineWhitespace: string = lines[0].match(/^\s*/)[0];
    let startingWhitespaceRegex: RegExp = new RegExp('^' + firstLineWhitespace);
    lines = lines.map(function(line: string): string {
      return line
        .replace('=""', '') // remove empty values
        .replace(startingWhitespaceRegex, '')
        .replace(/\s+$/, '');
    });

    this.renderer.setElementClass(codeElement, 'highlight', true);

    let codeToParse: string =  lines.join('\n')
    .replace(/\{ \{/gi, '{{').replace(/\} \}/gi, '}}')
    .replace(/&lt;/gi, '<').replace(/&gt;/gi, '>');  // replace with < and > to render HTML in angular 2
    if (this.language === 'html') { // need to use CDATA for HTML
      this.renderer.createText(codeElement, codeToParse, undefined);
      hljs.highlightBlock(codeElement);
    } else {
      let highlightedCode: any = hljs.highlight(this.language, codeToParse, true);
      highlightedCode.value = highlightedCode.value
        .replace(/=<span class="hljs-value">""<\/span>/gi, '')
        .replace('<head>', '')
        .replace('<head/>', '');
      codeElement.innerHTML = highlightedCode.value;
    }
  }
}

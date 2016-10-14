import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var showdown: any;

@Component({
  selector: 'td-markdown',
  styleUrls: ['markdown.component.scss'],
  templateUrl: 'markdown.component.html',
})
export class TdMarkdownComponent implements AfterViewInit {

  @ViewChild('markdown') content: ElementRef;

  ngAfterViewInit(): void {
    let code: string = this.content.nativeElement.innerText;
    this.content.nativeElement.innerHTML = this.render(code);
  }

  render(contents: string): string {
    let converter: any = new showdown.Converter();
    converter.setOption('ghCodeBlocks', true);
    converter.setOption('tasklists', true);
    let html: string = converter.makeHtml(contents);
    return html;
  }

}

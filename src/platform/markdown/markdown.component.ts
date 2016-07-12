import { Component, AfterViewInit, ViewChild, ElementRef, Renderer } from '@angular/core';

declare var showdown: any;

@Component({
  moduleId: module.id,
  selector: 'td-markdown',
  styleUrls: ['markdown.component.css'],
  templateUrl: 'markdown.component.html',
})
export class TdMarkdownComponent implements AfterViewInit {

  @ViewChild('markdown') content: ElementRef;

  constructor(private renderer: Renderer) {

  }

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

import { Component, Directive, AfterViewInit, ElementRef, Input, Renderer2, SecurityContext, Type, ComponentFactory,
         ViewContainerRef, ComponentFactoryResolver, Injector, ComponentRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MatCheckbox } from '@angular/material';
import { TdHighlightComponent } from '@covalent/highlight';
import { TdMarkdownComponent } from '@covalent/markdown';
import { TdDataTableComponent, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumnWidth } from '@covalent/core';

@Directive({
  selector: '[tdPrettyMarkdownContainer]',
})
export class TdPrettyMarkdownContainerDirective {

  constructor(public viewContainerRef: ViewContainerRef,
              private _renderer: Renderer2) { }

  clear(): void {
    this._renderer.setProperty(this.viewContainerRef.element.nativeElement, 'innerHTML', '');
    this.viewContainerRef.clear();
  }
}

export interface IReplacerFunc<T> {
    (componentRef: ComponentRef<T>, ...args: any[]): void;
}

@Component({
  selector: 'td-pretty-markdown',
  styleUrls: ['./pretty-markdown.component.scss'],
  templateUrl: './pretty-markdown.component.html',
})
export class TdPrettyMarkdownComponent implements AfterViewInit {

  private _content: string;

  private _components: {} = {};

  @Input('content')
  set content(content: string) {
    this._content = content;
    this._loadContent(this._content);
  }

  @ViewChild(TdPrettyMarkdownContainerDirective) container: TdPrettyMarkdownContainerDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
              private _renderer: Renderer2,
              private _injector: Injector) {}

  ngAfterViewInit(): void {
    if (!this._content) {
      this._loadContent((<HTMLElement>this.container.viewContainerRef.element.nativeElement).textContent);
    }
  }

  private _loadContent(markdown: string): void {
    if (markdown && markdown.trim().length > 0) {
      this.container.clear();
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
      markdown = lines.join('\n');
      markdown = this._replaceCheckbox(markdown);
      markdown = this._replaceTables(markdown);
      markdown = this._replaceCodeBlocks(markdown);
      let keys: string[] = Object.keys(this._components);
      // need to sort the placeholders in order of encounter in markdown content
      keys = keys.sort((compA: string, compB: string) => {
        return markdown.indexOf(compA) > markdown.indexOf(compB) ? 1 : -1;
      });
      this._render(markdown, keys[0], keys);
    }
  }

  private _render(markdown: string, key: string, keys: string[]): void {
    if (!markdown) {
      return;
    }
    if (markdown.indexOf(key) > -1) {
      let markdownParts: string[] = markdown.split(key);
      keys.shift();
      this._render(markdownParts[0], undefined, undefined);
      this.container.viewContainerRef.insert(this._components[key].hostView, this.container.viewContainerRef.length);
      this._components[key] = undefined;
      delete this._components[key];
      this._render(markdownParts[1], keys[0], keys);
    } else {
      let contentRef: ComponentRef<TdMarkdownComponent> = this._componentFactoryResolver
        .resolveComponentFactory(TdMarkdownComponent).create(this._injector);
      contentRef.instance.content = markdown;
      this.container.viewContainerRef.insert(contentRef.hostView, this.container.viewContainerRef.length);
    }
  }

  private _replaceComponent<T>(markdown: string, type: Type<T>, regExp: RegExp, replacerFunc: IReplacerFunc<T>): string {
    let componentIndex: number = 0;
    return markdown.replace(regExp, (...args: any[]) => {
      let componentFactory: ComponentFactory<T> = this._componentFactoryResolver.resolveComponentFactory(type);
      let componentRef: ComponentRef<T> = componentFactory.create(this._injector);
      replacerFunc(componentRef, ...args);
      let key: string = '[' + componentFactory.selector + '-placeholder-' + componentIndex++ + ']';
      this._components[key] = componentRef;
      return key;
    });
  }

  private _replaceCheckbox(markdown: string): string {
    let checkboxRegExp: RegExp = /(?:^|\n)- \[(x| )\](.*)/gi;
    return this._replaceComponent(markdown, MatCheckbox, checkboxRegExp,
                                  (componentRef: ComponentRef<MatCheckbox>, match: string, checked: string, label: string) => {
      componentRef.instance.checked = !!checked.trim();
      componentRef.instance.disabled = true;
      componentRef.instance.labelPosition = 'after';
      this._renderer.setProperty((<HTMLElement>componentRef.instance._inputElement.nativeElement)
                                        .getElementsByClassName('mat-checkbox-label')[0], 'innerHTML', label);
    });
  }

  private _replaceCodeBlocks(markdown: string): string {
    let codeBlockRegExp: RegExp = /(?:^|\n)```(.*)\n([\s\S]*?)\n```/g;
    return this._replaceComponent(markdown, TdHighlightComponent, codeBlockRegExp,
                                  (componentRef: ComponentRef<TdHighlightComponent>, match: string, language: string, codeblock: string) => {
      if (language) {
        componentRef.instance.language = language;
      }
      componentRef.instance.content = codeblock;
    });
  }

  private _replaceTables(markdown: string): string {
    let tableRgx: RegExp = /^ {0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm;
    return this._replaceComponent(markdown, TdDataTableComponent, tableRgx,
                                  (componentRef: ComponentRef<TdDataTableComponent>, match: string, language: string, codeblock: string) => {
      let dataTableLines: string[] = match.replace(/(\s|\t)*\n+(\s|\t)*$/g, '').split('\n');
      let columns: string[] = dataTableLines[0].split('|')
                              .filter((col: string) => { return col; })
                              .map((s: string) => { return s.trim(); });
      let alignment: string[] = dataTableLines[1].split('|').filter((v: string) => { return v; }).map((s: string) => { return s.trim(); });
      componentRef.instance.columns = columns.map((col: string, index: number) => {
        let widths: string[] = alignment[index].split('---');
        let min: number = parseInt(widths[0], 10);
        let max: number = parseInt(widths[1], 10);
        let width: ITdDataTableColumnWidth = {min: min, max: max};
        if (isNaN(min) && isNaN(max)) {
          width = undefined;
        } else if (isNaN(max)) {
          width.max = undefined;
        } else if (isNaN(min)) {
          width.min = undefined;
        }
        return {
          label: col,
          name: col.toLowerCase().trim(),
          numeric: /^--*[ \t]*:[ \t]*$/.test(alignment[index]),
          width: width,
        };
      });

      let data: any[] = [];
      for (let i: number = 2; i < dataTableLines.length; i++) {
        let rowSplit: string[] = dataTableLines[i].split('|')
                                                      .filter((cell: string) => { return cell; })
                                                      .map((s: string) => { return s.trim(); });
        let row: any = {};
        columns.forEach((col: string, index: number) => {
          row[col.toLowerCase().trim()] = rowSplit[index].replace(/`(.*)`/, (m: string, value: string) => {
            return value;
          });
        });
        data.push(row);
      }
      componentRef.instance.data = data;
      componentRef.instance.sortable = true;
      componentRef.instance.onSortChange.subscribe((event: ITdDataTableSortChangeEvent) => {
        componentRef.instance.data = data.sort((a: any, b: any) => {
          let compA: any = a[event.name];
          let compB: any = b[event.name];
          let direction: number = 0;
          if (!Number.isNaN(Number.parseFloat(compA)) && !Number.isNaN(Number.parseFloat(compB))) {
            direction = Number.parseFloat(compA) - Number.parseFloat(compB);
          } else {
            if (compA < compB) {
              direction = -1;
            } else if (compA > compB) {
              direction = 1;
            }
          }
          return direction * (event.order === TdDataTableSortingOrder.Descending ? -1 : 1);
        });
        componentRef.instance.refresh();
      });
    });
  }
}

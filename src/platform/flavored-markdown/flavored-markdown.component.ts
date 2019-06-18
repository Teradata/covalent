import {
  Component,
  Directive,
  AfterViewInit,
  Input,
  Renderer2,
  Type,
  ComponentFactory,
  ChangeDetectorRef,
  EventEmitter,
  Output,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  ComponentRef,
  ViewChild,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  ElementRef,
} from '@angular/core';

import { MatCheckbox } from '@angular/material/checkbox';
import { TdFlavoredListComponent, IFlavoredListItem } from './cfm-list/cfm-list.component';
import { TdHighlightComponent } from '@covalent/highlight';
import { TdMarkdownComponent, scrollToAnchor } from '@covalent/markdown';
import { TdDataTableComponent, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumnWidth } from '@covalent/core/data-table';

@Directive({
  selector: '[tdFlavoredMarkdownContainer]',
})
export class TdFlavoredMarkdownContainerDirective {

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
  selector: 'td-flavored-markdown',
  styleUrls: ['./flavored-markdown.component.scss'],
  templateUrl: './flavored-markdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdFlavoredMarkdownComponent implements AfterViewInit, OnChanges {

  private _content: string;
  private _simpleLineBreaks: boolean = false;
  private _hostedUrl: string;
  private _anchor: string;

  private _components: {} = {};
  private _viewInit: boolean = false;

  /**
   * content?: string
   *
   * Markdown format content to be parsed as material/covalent markup.
   *
   * e.g. README.md content.
   */
  @Input('content')
  set content(content: string) {
    this._content = content;
  }

  /**
   * simpleLineBreaks?: string
   *
   * Sets whether newline characters inside paragraphs and spans are parsed as <br/>.
   * Defaults to false.
   */
  @Input('simpleLineBreaks')
  set simpleLineBreaks(simpleLineBreaks: boolean) {
    this._simpleLineBreaks = simpleLineBreaks;
  }

  /**
   * hostedUrl?: string
   *
   * If markdown contains relative paths, this is required to generate correct urls
   *
   */
  @Input('hostedUrl')
  set hostedUrl(hostedUrl: string) {
    this._hostedUrl = hostedUrl;
  }

  /**
   * anchor?: string
   *
   * Anchor to jump to
   *
   */
  @Input('anchor')
  set anchor(anchor: string) {
    this._anchor = anchor;
  }

  /**
   * contentReady?: function
   * Event emitted after the markdown content rendering is finished.
   */
  @Output('contentReady') onContentReady: EventEmitter<undefined> = new EventEmitter<undefined>();

  @ViewChild(TdFlavoredMarkdownContainerDirective) container: TdFlavoredMarkdownContainerDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
              private _renderer: Renderer2,
              private _changeDetectorRef: ChangeDetectorRef,
              private _injector: Injector,
              private _elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    // only anchor changed
    if (changes.anchor && !changes.content && !changes.simpleLineBreaks && !changes.hostedUrl) {
      scrollToAnchor(this._elementRef.nativeElement, this._anchor);
    } else {
      this.refresh();
    }
  }

  ngAfterViewInit(): void {
    if (!this._content) {
      this._loadContent((<HTMLElement>this.container.viewContainerRef.element.nativeElement).textContent);
      Promise.resolve().then(() => {
        this._viewInit = true;
        this._changeDetectorRef.markForCheck();
      });
    }
  }

  refresh(): void {
    if (this._content) {
      this._loadContent(this._content);
    } else if (this._viewInit) {
      this._loadContent((<HTMLElement>this.container.viewContainerRef.element.nativeElement).textContent);
    }
    this._changeDetectorRef.markForCheck();
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
      markdown = [...lines, '', ''].join('\n');
      markdown = this._replaceCodeBlocks(markdown);
      markdown = this._replaceCheckbox(markdown);
      markdown = this._replaceTables(markdown);
      markdown = this._replaceLists(markdown);
      let keys: string[] = Object.keys(this._components);
      // need to sort the placeholders in order of encounter in markdown content
      keys = keys.sort((compA: string, compB: string) => {
        return markdown.indexOf(compA) > markdown.indexOf(compB) ? 1 : -1;
      });
      this._render(markdown, keys[0], keys);
       // TODO: timeout required since resizing of html elements occurs which causes a change in the scroll position
      setTimeout(() => scrollToAnchor(this._elementRef.nativeElement, this._anchor), 250);
      this.onContentReady.emit();
      Promise.resolve().then(() => {
        this._changeDetectorRef.markForCheck();
      });
    }
  }

  private _render(markdown: string, key: string, keys: string[]): void {
    if (!markdown) {
      return;
    }
    if (key && markdown.indexOf(key) > -1) {
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
      contentRef.instance.hostedUrl = this._hostedUrl;
      contentRef.instance.simpleLineBreaks = this._simpleLineBreaks;
      contentRef.instance.refresh();
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
      this._renderer.setProperty((<HTMLElement>componentRef.instance._elementRef.nativeElement)
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
                                  (componentRef: ComponentRef<TdDataTableComponent>, match: string) => {
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
          const rowSplitCell: string = rowSplit[index];
          if (rowSplitCell) {
            row[col.toLowerCase().trim()] = rowSplitCell.replace(/`(.*)`/, (m: string, value: string) => {
              return value;
            });
          }
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
      setTimeout(() => {
        componentRef.instance.refresh();
      });
    });
  }

  private _replaceLists(markdown: string): string {
    let listRegExp: RegExp = /(?:^|\n)(( *\+)[ |\t](.*)\n)+/g;
    return this._replaceComponent(markdown, TdFlavoredListComponent, listRegExp,
      (componentRef: ComponentRef<TdFlavoredListComponent>, match: string) => {
        let lineTexts: string[] = match.split(new RegExp('\\n {' + (match.indexOf('+') - 1).toString() + '}\\+[ |\\t]'));
        lineTexts.shift();
        let lines: IFlavoredListItem[] = [];
        lineTexts.forEach((text: string, index: number) => {
          let sublineTexts: string[] = text.split(/\n *\+ /);
          lines.push({
            line: sublineTexts.shift(),
            sublines: sublineTexts.map((subline: string) => {
              return subline.trim();
            }),
          });
        });
        componentRef.instance.lines = lines;
      });
  }
}

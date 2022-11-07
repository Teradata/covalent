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
  HostBinding,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { MatCheckbox } from '@angular/material/checkbox';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  TdFlavoredListComponent,
  IFlavoredListItem,
} from './cfm-list/cfm-list.component';
import { TdHighlightComponent, ICopyCodeTooltips } from '@covalent/highlight';

import { TdMarkdownComponent, scrollToAnchor } from '@covalent/markdown';

export interface ITdFlavoredMarkdownButtonClickEvent {
  text: string;
  data: string;
}

export interface ITdFlavoredMarkDownTableColumn {
  label: string;
  name: string;
  numeric: boolean;
}

@Component({
  template: `
    <mat-table [dataSource]="dataSource" matSort>
      <!-- Column Definition -->
      <ng-template ngFor let-column [ngForOf]="columnDefs">
        <ng-container [matColumnDef]="column.name">
          <mat-header-cell *matHeaderCellDef mat-sort-header>{{
            column.label
          }}</mat-header-cell>
          <mat-cell *matCellDef="let row">{{ row[column.name] }}</mat-cell>
        </ng-container>
      </ng-template>
      <!-- Header and Row Declarations -->
      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
    </mat-table>
  `,
})
export class TdFlavoredMarkdownTableComponent implements OnInit, AfterViewInit {
  @Input() columnDefs: ITdFlavoredMarkDownTableColumn[] = [];
  @Input() data!: unknown[];
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns!: string[];
  dataSource!: MatTableDataSource<unknown>;

  ngOnInit(): void {
    this.displayedColumns = this.columnDefs.map(
      (c: ITdFlavoredMarkDownTableColumn) => c.name
    );
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}

@Component({
  template: `
    <button mat-raised-button (click)="emitClick()">
      {{ text }}
    </button>
  `,
})
export class TdFlavoredMarkdownButtonComponent {
  @HostBinding('style.display') display = 'inline-block';
  @Input() text = '';
  @Input() data = '';
  @Output()
  clicked: EventEmitter<ITdFlavoredMarkdownButtonClickEvent> = new EventEmitter<ITdFlavoredMarkdownButtonClickEvent>();
  emitClick(): void {
    this.clicked.emit({ text: this.text, data: this.data });
  }
}

@Directive({
  selector: '[tdFlavoredMarkdownContainer]',
})
export class TdFlavoredMarkdownContainerDirective {
  constructor(
    public viewContainerRef: ViewContainerRef,
    private _renderer: Renderer2
  ) {}

  clear(): void {
    this._renderer.setProperty(
      this.viewContainerRef.element.nativeElement,
      'innerHTML',
      ''
    );
    this.viewContainerRef.clear();
  }
}

export type IReplacerFunc<T> = (
  componentRef: ComponentRef<T>,
  ...args: any[]
) => void;

@Component({
  selector: 'td-flavored-markdown',
  styleUrls: ['./flavored-markdown.component.scss'],
  templateUrl: './flavored-markdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdFlavoredMarkdownComponent
  implements AfterViewInit, OnChanges, OnDestroy
{
  private _content!: string;
  private _simpleLineBreaks = false;
  private _hostedUrl!: string;
  private _anchor!: string;

  private _components: { [key: string]: ComponentRef<unknown> } = {};
  private _viewInit = false;
  /**
   * content?: string
   *
   * Markdown format content to be parsed as material/covalent markup.
   *
   * e.g. README.md content.
   */
  @Input()
  set content(content: string) {
    this._content = content;
  }

  /**
   * simpleLineBreaks?: string
   *
   * Sets whether newline characters inside paragraphs and spans are parsed as <br/>.
   * Defaults to false.
   */
  @Input()
  set simpleLineBreaks(simpleLineBreaks: boolean) {
    this._simpleLineBreaks = simpleLineBreaks;
  }

  /**
   * hostedUrl?: string
   *
   * If markdown contains relative paths, this is required to generate correct urls
   *
   */
  @Input()
  set hostedUrl(hostedUrl: string) {
    this._hostedUrl = hostedUrl;
  }

  /**
   * anchor?: string
   *
   * Anchor to jump to
   *
   */
  @Input()
  set anchor(anchor: string) {
    this._anchor = anchor;
  }

  /**
   * copyCodeToClipboard?: boolean
   *
   * Display copy button on code snippets to copy code to clipboard.
   *
   */
  @Input() copyCodeToClipboard? = false;

  /**
   * copyCodeTooltips?: ICopyCodeTooltips
   *
   * Tooltips for copy button to copy and upon copying.
   */
  @Input() copyCodeTooltips?: ICopyCodeTooltips = {};

  /**
   * useCfmList?: boolean = false;
   * Use CFM list component instead of vanilla markdown list. Used in covalent documentation app.
   */
  @Input() useCfmList? = false;

  /**
   * contentReady?: function
   * Event emitted after the markdown content rendering is finished.
   */
  @Output() contentReady: EventEmitter<undefined> =
    new EventEmitter<undefined>();

  /**
   * buttonClicked?: ITdFlavoredMarkdownButtonClickEvent
   * Event emitted when a button is clicked
   * Is an object containing text and data of button
   */
  @Output()
  buttonClicked: EventEmitter<ITdFlavoredMarkdownButtonClickEvent> = new EventEmitter<ITdFlavoredMarkdownButtonClickEvent>();

  @ViewChild(TdFlavoredMarkdownContainerDirective, { static: true })
  container!: TdFlavoredMarkdownContainerDirective;

  private _destroy$ = new Subject<void>();

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _renderer: Renderer2,
    private _changeDetectorRef: ChangeDetectorRef,
    private _injector: Injector,
    private _elementRef: ElementRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    // only anchor changed
    if (
      changes['anchor'] &&
      !changes['content'] &&
      !changes['simpleLineBreaks'] &&
      !changes['hostedUrl']
    ) {
      scrollToAnchor(this._elementRef.nativeElement, this._anchor, false);
    } else {
      this.refresh();
    }
  }

  ngAfterViewInit(): void {
    if (!this._content) {
      this._loadContent(
        (<HTMLElement>this.container.viewContainerRef.element.nativeElement)
          .textContent ?? ''
      );
      Promise.resolve().then(() => {
        this._viewInit = true;
        this._changeDetectorRef.markForCheck();
      });
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  refresh(): void {
    if (this._content) {
      this._loadContent(this._content);
    } else if (this._viewInit) {
      this._loadContent(
        (<HTMLElement>this.container.viewContainerRef.element.nativeElement)
          .textContent ?? ''
      );
    }
    this._changeDetectorRef.markForCheck();
  }

  private _loadContent(markdown: string): void {
    if (markdown && markdown.trim().length > 0) {
      this.container.clear();
      markdown = markdown
        .replace(/^(\s|\t)*\n+/g, '')
        .replace(/(\s|\t)*\n+(\s|\t)*$/g, '');
      // Split markdown by line characters
      let lines: string[] = markdown.split('\n');

      // check how much indentation is used by the first actual markdown line
      const firstLineWhitespaceMatch = lines[0].match(/^(\s|\t)*/);
      const firstLineWhitespace = firstLineWhitespaceMatch
        ? firstLineWhitespaceMatch[0]
        : null;

      // Remove all indentation spaces so markdown can be parsed correctly
      // Remove all \r characters
      const startingWhitespaceRegex = new RegExp('^' + firstLineWhitespace);
      lines = lines.map(function (line: string): string {
        return line.replace(startingWhitespaceRegex, '').replace('\r', '');
      });

      // Join lines again with line characters
      markdown = [...lines, '', ''].join('\n');
      markdown = this._replaceCodeBlocks(markdown);
      markdown = this._replaceCheckbox(markdown);
      markdown = this._replaceTables(markdown);
      markdown = this._replaceButtons(markdown);

      if (this.useCfmList) {
        markdown = this._replaceLists(markdown);
      }

      const keys: string[] = Object.keys(this._components);
      // need to sort the placeholders in order of encounter in markdown content
      keys.sort((compA: string, compB: string) => {
        return markdown.indexOf(compA) > markdown.indexOf(compB) ? 1 : -1;
      });
      this._render(markdown, keys[0], keys);
      // TODO: timeout required since resizing of html elements occurs which causes a change in the scroll position
      setTimeout(
        () =>
          scrollToAnchor(this._elementRef.nativeElement, this._anchor, false),
        250
      );
      this.contentReady.emit();
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
      const markdownParts: string[] = markdown.split(key);
      keys.shift();
      this._render(markdownParts[0], '', []);
      this.container.viewContainerRef.insert(
        this._components[key].hostView,
        this.container.viewContainerRef.length
      );
      delete this._components[key];
      this._render(markdownParts[1], keys[0], keys);
    } else {
      const contentRef: ComponentRef<TdMarkdownComponent> =
        this._componentFactoryResolver
          .resolveComponentFactory(TdMarkdownComponent)
          .create(this._injector);
      contentRef.instance.content = markdown;
      contentRef.instance.hostedUrl = this._hostedUrl;
      contentRef.instance.simpleLineBreaks = this._simpleLineBreaks;
      contentRef.instance.refresh();
      this.container.viewContainerRef.insert(
        contentRef.hostView,
        this.container.viewContainerRef.length
      );
    }
  }

  private _replaceComponent<T>(
    markdown: string,
    type: Type<T>,
    regExp: RegExp,
    replacerFunc: IReplacerFunc<T>
  ): string {
    let componentIndex = 0;
    return markdown.replace(regExp, (...args: any[]) => {
      const componentFactory: ComponentFactory<T> =
        this._componentFactoryResolver.resolveComponentFactory(type);
      const componentRef: ComponentRef<T> = componentFactory.create(
        this._injector
      );
      replacerFunc(componentRef, ...args);
      const key: string =
        '[' +
        componentFactory.selector +
        '-placeholder-' +
        componentIndex++ +
        ']';
      this._components[key] = componentRef;
      return key;
    });
  }

  private _replaceCheckbox(markdown: string): string {
    const checkboxRegExp = /(?:^|\n)- \[(x| )\](.*)/gi;
    return this._replaceComponent(
      markdown,
      MatCheckbox,
      checkboxRegExp,
      (
        componentRef: ComponentRef<MatCheckbox>,
        match: string,
        checked: string,
        label: string
      ) => {
        componentRef.instance.checked = !!checked.trim();
        componentRef.instance.disabled = true;
        componentRef.instance.labelPosition = 'after';
        this._renderer.setProperty(
          (<HTMLElement>(
            componentRef.instance._elementRef.nativeElement
          )).getElementsByClassName('mat-checkbox-label')[0],
          'innerHTML',
          label
        );
      }
    );
  }

  private _replaceButtons(markdown: string): string {
    const buttonRegExp = /\[([^[]+)\](\(#data=(.*?)\))/i;
    const globalButtonRegExp = new RegExp(
      buttonRegExp.source,
      buttonRegExp.flags + 'g'
    );
    return this._replaceComponent(
      markdown,
      TdFlavoredMarkdownButtonComponent,
      globalButtonRegExp,
      (
        componentRef: ComponentRef<TdFlavoredMarkdownButtonComponent>,
        match: string
      ) => {
        const matches = buttonRegExp.exec(match);
        if (!matches) {
          return;
        }
        const text: string = matches[1];
        const data: string = matches[3];
        componentRef.instance.text = text;
        componentRef.instance.data = data;
        componentRef.instance.clicked
          .pipe(takeUntil(this._destroy$))
          .subscribe((clickEvent: ITdFlavoredMarkdownButtonClickEvent) =>
            this.buttonClicked.emit(clickEvent)
          );
      }
    );
  }

  private _replaceCodeBlocks(markdown: string): string {
    const codeBlockRegExp = /(?:^|\n)```(.*)\n([\s\S]*?)\n```/g;
    return this._replaceComponent(
      markdown,
      TdHighlightComponent,
      codeBlockRegExp,
      (
        componentRef: ComponentRef<TdHighlightComponent>,
        match: string,
        language: string,
        codeblock: string
      ) => {
        if (language) {
          componentRef.instance.codeLang = language;
        }
        componentRef.instance.copyCodeToClipboard = this.copyCodeToClipboard;
        componentRef.instance.copyCodeTooltips = this.copyCodeTooltips;
        componentRef.instance.content = codeblock;
      }
    );
  }

  private _replaceTables(markdown: string): string {
    const tableRgx =
      /^ {0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm;
    return this._replaceComponent(
      markdown,
      TdFlavoredMarkdownTableComponent,
      tableRgx,
      (
        componentRef: ComponentRef<TdFlavoredMarkdownTableComponent>,
        match: string
      ) => {
        const dataTableLines: string[] = match
          .replace(/(\s|\t)*\n+(\s|\t)*$/g, '')
          .split('\n');
        const columns: string[] = dataTableLines[0]
          .split('|')
          .filter((col: string) => {
            return col;
          })
          .map((s: string) => {
            return s.trim();
          });
        const alignment: string[] = dataTableLines[1]
          .split('|')
          .filter((v: string) => {
            return v;
          })
          .map((s: string) => {
            return s.trim();
          });

        const data: any[] = [];
        for (let i = 2; i < dataTableLines.length; i++) {
          const rowSplit: string[] = dataTableLines[i]
            .split('|')
            .filter((cell: string) => {
              return cell;
            })
            .map((s: string) => {
              return s.trim();
            });
          const row: any = {};
          columns.forEach((col: string, index: number) => {
            const rowSplitCell: string = rowSplit[index];
            if (rowSplitCell) {
              row[col.toLowerCase().trim()] = rowSplitCell.replace(
                /`(.*)`/,
                (m: string, value: string) => {
                  return value;
                }
              );
            }
          });
          data.push(row);
        }
        componentRef.instance.columnDefs = columns.map(
          (col: string, index: number) => {
            return {
              label: col,
              name: col ? col.toLowerCase().trim() : `column ${index}`,
              numeric: /^--*[ \t]*:[ \t]*$/.test(alignment[index]),
            };
          }
        );
        componentRef.instance.data = data;
      }
    );
  }

  private _replaceLists(markdown: string): string {
    const listRegExp = /(?:^|\n)(( *(\+|\*|-))[ |\t](.*)\n)+/g;
    const listCharRegExp = new RegExp(/^(\+|\*|-)/);
    return this._replaceComponent(
      markdown,
      TdFlavoredListComponent,
      listRegExp,
      (componentRef: ComponentRef<TdFlavoredListComponent>, match: string) => {
        const start = /(\+|\*|-)/.exec(match);
        const matchIndex = start !== null ? start.index : 1;

        const lineTexts: string[] = match.split(
          new RegExp(
            '\\n {' + (matchIndex - 1).toString() + '}(\\+|\\*|\\-)[ |\\t]'
          )
        );
        lineTexts.shift();
        const lines: IFlavoredListItem[] = [];
        lineTexts.forEach((text: string) => {
          const sublineTexts: string[] = text.split(/\n *(\+|\*|-) /);
          const lineText = sublineTexts.shift() ?? '';

          if (listCharRegExp.test(lineText)) {
            return;
          }

          lines.push({
            line: lineText,
            sublines: sublineTexts.map((subline: string) => {
              if (listCharRegExp.test(subline)) {
                return '';
              }
              return subline.trim();
            }),
          });
        });
        componentRef.instance.lines = lines;
      }
    );
  }
}

import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, Optional } from '@angular/core';
import { Dir } from '@angular/cdk/bidi';
import { TdCollapseAnimation } from '../common/common.module';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'td-json-formatter',
  styleUrls: ['./json-formatter.component.scss' ],
  templateUrl: './json-formatter.component.html',
  animations: [
    TdCollapseAnimation(),
  ],
})
export class TdJsonFormatterComponent {

  /**
   * Max length for property names. Any names bigger than this get trunctated.
   */
  private static KEY_MAX_LENGTH: number = 30;

  /**
   * Max length for preview string. Any names bigger than this get trunctated.
   */
  private static PREVIEW_STRING_MAX_LENGTH: number = 80;

  /**
   * Max tooltip preview elements.
   */
  private static PREVIEW_LIMIT: number = 5;

  private _key: string;
  private _data: any;
  private _children: string[];
  private _open: boolean = false;
  private _levelsOpen: number = 0;

  /**
   * levelsOpen?: number
   * Levels opened by default when JS object is formatted and rendered.
   */
  @Input('levelsOpen')
  set levelsOpen(levelsOpen: number) {
    if (!Number.isInteger(levelsOpen)) {
      throw new Error('[levelsOpen] needs to be an integer.');
    }
    this._levelsOpen = levelsOpen;
    this._open = levelsOpen > 0;
  }
  get levelsOpen(): number {
    return this._levelsOpen;
  }

  get open(): boolean {
    return this._open;
  }

  /**
   * key?: string
   * Tag to be displayed next to formatted object.
   */
  @Input('key')
  set key(key: string) {
    this._key = key;
  }
  get key(): string {
    let elipsis: string = this._key && this._key.length > TdJsonFormatterComponent.KEY_MAX_LENGTH ? '…' : '';
    return this._key ? this._key.substring(0, TdJsonFormatterComponent.KEY_MAX_LENGTH) + elipsis : this._key;
  }

  /**
   * data: any
   * JS object to be formatted.
   */
  @Input('data')
  set data(data: any) {
    this._data = data;
    this.parseChildren();
  }
  get data(): any {
    return this._data;
  }

  get children(): string[] {
    return this._children;
  }

  get isRTL(): boolean {
    if (this._dir) {
      return this._dir.dir === 'rtl';
    }
    return false;
  }

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              @Optional() private _dir: Dir) {
  }

  /**
   * Refreshes json-formatter and rerenders [data]
   */
  refresh(): void {
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Toggles collapse/expanded state of component.
   */
  toggle(): void {
    this._open = !this._open;
  }

  isObject(): boolean {
    return this.getType(this._data) === 'object';
  }

  isArray(): boolean {
    return Array.isArray(this._data);
  }

  hasChildren(): boolean {
    return this._children && this._children.length > 0;
  }

  /**
   * Gets parsed value depending on value type.
   */
  getValue(value: any): string {
    let type: string = this.getType(value);
    if (type === 'undefined' || (type === 'null')) {
      return type;
    } else if (type === 'date') {
      value = new Date(value).toString();
    } else if (type === 'string') {
      value = '"' + value + '"';
    } else if (type === 'function') {
      // Remove content of the function
      return value.toString()
          .replace(/[\r\n]/g, '')
          .replace(/\{.*\}/, '') + '{…}';
    } else if (Array.isArray(value)) {
      return this.getObjectName() + ' [' + value.length + ']';
    }
    return value;
  }

  /**
   * Gets type of object.
   * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
   */
  getType(object: any): string {
    if (typeof object === 'object') {
      if (!object) {
        return 'null';
      }
      if (Array.isArray(object)) {
        return 'object';
      }
      let date: Date = new Date(object);
      if (Object.prototype.toString.call(date) === '[object Date]') {
        if (!Number.isNaN(date.getTime())) {
          return 'date';
        }
      }
    }
    return typeof object;
  }

  /**
   * Generates string representation depending if its an object or function.
   * see: http://stackoverflow.com/a/332429
   */
  getObjectName(): string {
    let object: any = this._data;
    if (this.isObject() && !object.constructor) {
        return 'Object';
    }
    let funcNameRegex: RegExp = /function (.{1,})\(/;
    let results: RegExpExecArray = (funcNameRegex).exec((object).constructor.toString());
    if (results && results.length > 1) {
      return results[1];
    } else {
      return '';
    }
  }

  /**
   * Creates preview of nodes children to render in tooltip depending if its an array or an object.
   */
  getPreview(): string {
    let previewData: string[];
    let startChar: string = '{ ';
    let endChar: string = ' }';
    if (this.isArray()) {
      let previewArray: any[] = this._data.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
      previewData = previewArray.map((obj: any) => {
        return this.getValue(obj);
      });
      startChar = '[';
      endChar = ']';
    } else {
      let previewKeys: string[] = this._children.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
      previewData = previewKeys.map((key: string) => {
        return key + ': ' + this.getValue(this._data[key]);
      });
    }
    let previewString: string =  previewData.join(', ');
    let ellipsis: string = previewData.length >= TdJsonFormatterComponent.PREVIEW_LIMIT ||
                           previewString.length > TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH ? '…' : '';
    return startChar + previewString.substring(0, TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH) +
           ellipsis + endChar;
  }

  private parseChildren(): void {
    if (this.isObject()) {
      this._children = [];
      for (let key in this._data) {
        this._children.push(key);
      }
    }
  }

}

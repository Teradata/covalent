import { Component, Input } from '@angular/core';

import { MdIcon } from '@angular2-material/icon';

@Component({
  directives: [
    MdIcon,
    TdJsonFormatterComponent,
  ],
  moduleId: module.id,
  selector: 'td-json-formatter',
  styleUrls: [ 'json-formatter.component.css' ],
  templateUrl: 'json-formatter.component.html',
})
export class TdJsonFormatterComponent {

  private static KEY_MAX_LENGTH: number = 30;
  private static PREVIEW_LIMIT: number = 5;

  private _key: string;
  private _data: any;
  private _children: string[] = [];
  private _open: boolean = false;
  private _levelsOpen: number = 0;

  @Input('levelsOpen')
  set levelsOpen(levelsOpen: number) {
    if (!Number.isInteger(levelsOpen)) {
      throw '[levelsOpen] needs to be an integer.';
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

  @Input('key')
  set key(key: string) {
    this._key = key;
  }
  get key(): string {
    return this._key ? this._key.substring(0, TdJsonFormatterComponent.KEY_MAX_LENGTH) : this._key;
  }

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
    return this.children.length > 0;
  }

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
    }
    return value;
  }

  getType(object: any): string {
    if (typeof object === 'object') {
      if (!object) {
        return 'null';
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

  // From http://stackoverflow.com/a/332429
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

  getPreview(): string {
    let previewData: string[];
    let startChar: string = '{';
    let endChar: string = '}';
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
    let ellipsis: string = previewData.length >= TdJsonFormatterComponent.PREVIEW_LIMIT ? '…' : '';
    return startChar + previewData.join(', ') + ellipsis + endChar;
  }

  private parseChildren(): void {
    if (this.isObject()) {
      for (let key in this._data) {
        this._children.push(key);
      }
    }
  }

}

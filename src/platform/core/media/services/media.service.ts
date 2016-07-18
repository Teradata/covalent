import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TdMediaService {

  private _queryMap: Map<string, string> = new Map<string, string>();
  private _querySources: {[key: string]: Subject<any>} = {};
  private _queryObservables: {[key: string]: Observable<any>} = {};

  constructor() {
    this._queryMap.set('xs', '(max-width: 599px)');
    this._queryMap.set('gt-xs', '(min-width: 600px)');
    this._queryMap.set('sm', '(min-width: 600px) and (max-width: 959px)');
    this._queryMap.set('gt-sm', '(min-width: 960px)');
    this._queryMap.set('md', '(min-width: 960px) and (max-width: 1279px)');
    this._queryMap.set('gt-md', '(min-width: 1280px)');
    this._queryMap.set('lg', '(min-width: 1280px) and (max-width: 1919px)');
    this._queryMap.set('gt-lg', '(min-width: 1920px)');
    this._queryMap.set('xl', '(min-width: 1920px)');
    this._queryMap.set('landscape', 'landscape');
    this._queryMap.set('portrait', 'portrait');
    this._queryMap.set('print', 'print');

    window.onresize = () => {
      this._onResize();
    };
  }

  /**
   * Evaluates the query to see if it matches the window and returns 'true' or 'false'.
   */
  public evaluate(query: string): boolean {
    if (this._queryMap.get(query.toLowerCase())) {
      query = this._queryMap.get(query);
    }
    return window.matchMedia(query).matches;
  }

  /**
   * Creates an observable for the query passed as argument, and returns it.
   */
  public register(query: string): Observable<any> {
    if (this._queryMap.get(query.toLowerCase())) {
      query = this._queryMap.get(query);
    }
    if (!this._querySources[query]) {
      this._querySources[query] = new Subject<any>();
    }
    this._queryObservables[query] = this._querySources[query].asObservable();
    return this._queryObservables[query];
  }

  private _onResize(): void {
    for (let key in this._querySources) {
      this._querySources[key].next(window.matchMedia(key).matches);
    }
  }
}

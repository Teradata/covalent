import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TdMediaService {

  private _queryMap: Map<string, string> = new Map<string, string>();
  private _querySources: {[key: string]: Subject<boolean>} = {};
  private _queryObservables: {[key: string]: Observable<boolean>} = {};

  constructor(private _ngZone: NgZone) {
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
   * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
   */
  public query(query: string): boolean {
    if (this._queryMap.get(query.toLowerCase())) {
      query = this._queryMap.get(query.toLowerCase());
    }
    return window.matchMedia(query).matches;
  }

  /**
   * Registers a media query and returns an [Observable] that will re-evaluate and 
   * return if the given media query matches on window resize.
   * Note: don't forget to unsubscribe from [Observable] when finished watching.
   */
  public registerQuery(query: string): Observable<boolean> {
    if (this._queryMap.get(query.toLowerCase())) {
      query = this._queryMap.get(query.toLowerCase());
    }
    if (!this._querySources[query]) {
      this._querySources[query] = new Subject<boolean>();
      this._queryObservables[query] = this._querySources[query].asObservable();
      setTimeout(() => {
        this._onResize();
      });
    }
    return this._queryObservables[query];
  }

  private _onResize(): void {
    for (let key in this._querySources) {
      this._ngZone.run(() => {
        this._querySources[key].next(window.matchMedia(key).matches);
      });
    }
  }
}

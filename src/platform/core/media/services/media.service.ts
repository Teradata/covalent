import { Injectable, NgZone } from '@angular/core';
import { Observable, BehaviorSubject, Subscription, fromEvent } from 'rxjs';

@Injectable()
export class TdMediaService {
  private _resizing: boolean = false;
  private _globalSubscription: Subscription;
  private _queryMap: Map<string, string> = new Map<string, string>();
  private _querySources: { [key: string]: BehaviorSubject<boolean> } = {};
  private _queryObservables: { [key: string]: Observable<boolean> } = {};

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
    this._queryMap.set('landscape', '(orientation: landscape)');
    this._queryMap.set('portrait', '(orientation: portrait)');
    this._queryMap.set('print', 'print');

    this._resizing = false;
    // we make sure that the resize checking happend outside of Angular since it happens often
    this._globalSubscription = this._ngZone.runOutsideAngular(() => {
      return fromEvent(window, 'resize').subscribe(() => {
        // way to prevent the resize event from triggering the match media if there is already one event running already.
        if (!this._resizing) {
          this._resizing = true;
          setTimeout(() => {
            this._onResize();
            this._resizing = false;
          }, 100);
        }
      });
    });
  }

  /**
   * Deregisters a query so its stops being notified or used.
   */
  deregisterQuery(query: string): void {
    if (this._queryMap.get(query.toLowerCase())) {
      query = this._queryMap.get(query.toLowerCase());
    }
    this._querySources[query].unsubscribe();
    delete this._querySources[query];
    delete this._queryObservables[query];
  }

  /**
   * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
   */
  public query(query: string): boolean {
    if (this._queryMap.get(query.toLowerCase())) {
      query = this._queryMap.get(query.toLowerCase());
    }
    return this._ngZone.run(() => {
      return matchMedia(query).matches;
    });
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
      this._querySources[query] = new BehaviorSubject<boolean>(matchMedia(query).matches);
      this._queryObservables[query] = this._querySources[query].asObservable();
    }
    return this._queryObservables[query];
  }

  /**
   * Trigger a match media event on all subscribed observables.
   */
  public broadcast(): void {
    this._onResize();
  }

  private _onResize(): void {
    for (const query of Object.keys(this._querySources)) {
      this._ngZone.run(() => {
        this._matchMediaTrigger(query);
      });
    }
  }

  private _matchMediaTrigger(query: string): void {
    this._querySources[query].next(matchMedia(query).matches);
  }
}

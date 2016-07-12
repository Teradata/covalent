import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TdLayoutService {

  private _openSidenavSources: {[key: string]: Subject<any>} = {};
  private _openSidenavObservables: {[key: string]: Observable<any>} = {};

  public registerSidenav(name: string): Observable<any> {
    if (this._openSidenavSources[name]) {
      throw 'Sidenav already registered with that name';
    }
    this._openSidenavSources[name] = new Subject<any>();
    this._openSidenavObservables[name] = this._openSidenavSources[name].asObservable();
    return this._openSidenavObservables[name];
  }

  public openSideNav(name: string): void {
    if (this._openSidenavSources[name]) {
      this._openSidenavSources[name].next(undefined);
    }
  }
}

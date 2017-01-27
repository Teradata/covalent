import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TdLayoutService {

  private _openSidenavSource: Subject<any>;

  public registerSidenav(): Observable<any> {
    if (this._openSidenavSource) {
      throw new Error('Sidenav already registered.');
    }
    this._openSidenavSource = new Subject<any>();
    return this._openSidenavSource.asObservable();
  }

  public get isSidenavAvailable(): boolean {
    return !!this._openSidenavSource;
  }

  public openMainSidenav(): void {
    if (this.isSidenavAvailable) {
      this._openSidenavSource.next(undefined);
    }
  }
}

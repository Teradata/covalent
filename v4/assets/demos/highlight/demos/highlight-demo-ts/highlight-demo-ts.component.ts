import { Component } from '@angular/core';

@Component({
  selector: 'highlight-demo-ts',
  styleUrls: ['./highlight-demo-ts.component.scss'],
  templateUrl: './highlight-demo-ts.component.html',
})
export class HighlightDemoTsComponent {
  code = `
  import { Injectable } from '@angular/core';
  import { Observable, Subject } from 'rxjs';

  @Injectable()
  export class Service {

    private _sources: {[key : string]: Subject<any>} = {};
    private _observables: {[key: string]: Observable<any>} = {};

    constructor() { }

    public register(name) : Observable<any> {
      this._sources[name] = new Subject<any>();
      this._observables[name] = this._sources[name].asObservable();
      return this._observables[name];
    }

    public emit(name: string): void {
      if (this._sources[name]) {
        this._sources[name].next(null);
      }
    }
  }
  `;
}

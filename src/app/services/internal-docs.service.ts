import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import{ } from '';

export interface ITemplate {
  title: string;
  description: string;
  plnkr: string;
  img: string;
  color: string;
  icon: string;
}

//const INTERNAL_DOCS_URL: string = 'https://covalent-docs.firebaseio.com/';
const INTERNAL_DOCS_URL: string = 'app/api/';
//C:\Source\GitHub\DRC\eca-ux-pattern-library\mock_data\data.json
//C:\Source\GitHub\DRC\eca-ux-pattern-library\src\app\services\internal-docs.service.ts

@Injectable()
export class InternalDocsService {

  constructor(private _http: HttpClient) {

  }

  queryTemplates(): Observable<ITemplate[]> {
    return this._http.get<ITemplate[]>(INTERNAL_DOCS_URL + 'templates.json')
      .pipe(
        catchError(() => {
          return new Observable((subscriber: Subscriber<ITemplate[]>) => {
            subscriber.next([]);
          });
        }),
      );
  }

  queryData(): Observable<any[]> {
    return this._http.get<any[]>(INTERNAL_DOCS_URL + 'data.json')
      .pipe(
        catchError(() => {
          return new Observable((subscriber: Subscriber<any[]>) => {
            subscriber.next([]);
          });
        }),
      );
  }

}

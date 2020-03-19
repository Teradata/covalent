import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { sampleDataTableData } from './data';
export interface ITemplate {
  title: string;
  description: string;
  plnkr: string;
  img: string;
  color: string;
  icon: string;
}

const INTERNAL_DOCS_URL: string = 'https://covalent-docs.firebaseio.com/';

@Injectable()
export class InternalDocsService {
  constructor(private _http: HttpClient) {}

  queryTemplates(): Observable<ITemplate[]> {
    return this._http.get<ITemplate[]>(INTERNAL_DOCS_URL + '/templates.json').pipe(
      catchError(() => {
        return new Observable((subscriber: Subscriber<ITemplate[]>) => {
          subscriber.next([]);
        });
      }),
    );
  }

  getData(): any[] {
    return JSON.parse(sampleDataTableData);
  }
}

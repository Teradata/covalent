import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { HttpInterceptorService } from '@covalent/http';

export interface ITemplate {
  name: string;
  description: string;
  plnkr: string;
  img: string;
  color: string;
  icon: string;
}

const INTERNAL_DOCS_URL: string = 'https://covalent-docs.firebaseio.com/';

@Injectable()
export class InternalDocsService {

  constructor(private _http: HttpInterceptorService) {

  }

  queryTemplates(): Observable<ITemplate[]> {
    return new Observable<ITemplate[]>((subscriber: Subscriber<ITemplate[]>) => {
      this._http.get(INTERNAL_DOCS_URL + '/templates.json').subscribe((response: Response) => {
        let data: ITemplate[];
        try {
          data = response.json();
        } catch (e) {
          data = [];
          subscriber.error();
        }
        subscriber.next(data);
        subscriber.complete();
      }, (error: any) => {
        subscriber.error();
      });
    });
  }

}

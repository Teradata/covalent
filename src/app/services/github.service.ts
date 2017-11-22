import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { map, catchError } from 'rxjs/operators';

const GITHUB_URL: string = 'https://api.github.com';

@Injectable()
export class GitHubService {

  constructor(private _http: HttpClient) {

  }

  queryStartCount(): Observable<number> {
    return this._http.get(GITHUB_URL + '/search/repositories?q=repo:Teradata/covalent')
      .pipe(
        map((data: any) => {
          return data.items.length > 0 ? data.items[0].stargazers_count : 0;
        }),
        catchError(() => {
          return new Observable((subscriber: Subscriber<number>) => {
            subscriber.next(0);
          });
        }),
      );
  }

}

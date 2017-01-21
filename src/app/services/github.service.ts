import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { HttpInterceptorService } from '@covalent/http';

export interface IGithubRepository {
  stargazers_count: number;
}

const GITHUB_URL: string = 'https://api.github.com';

@Injectable()
export class GitHubService {

  constructor(private _http: HttpInterceptorService) {

  }

  queryStartCount(): Observable<number> {
    return new Observable<number>((subscriber: Subscriber<number>) => {
      this._http.get(GITHUB_URL + '/search/repositories?q=repo:Teradata/covalent').subscribe((response: Response) => {
        let data: IGithubRepository[];
        try {
          data = response.json().items;
        } catch (e) {
          subscriber.error();
        }
        if (data.length > 0) {
          subscriber.next(data[0].stargazers_count);
        } else {
          subscriber.next(0);
        }
        subscriber.complete();
      }, (error: any) => {
        subscriber.error();
      });
    });
  }

}

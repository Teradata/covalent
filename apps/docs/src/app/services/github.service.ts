import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const GITHUB_URL = 'https://api.github.com';

@Injectable()
export class GitHubService {
  constructor(private _http: HttpClient) {}

  getVersionDirectories(): Observable<string[]> {
    return this._http
      .get<{ name: string; type: string }[]>(
        GITHUB_URL + '/repos/Teradata/covalent/contents?ref=gh-pages'
      )
      .pipe(
        map((data: { name: string; type: string }[]) => {
          return data
            .filter(
              (row: { name: string; type: string }) =>
                row.type === 'dir' && row.name.startsWith('v')
            )
            .map((row: { name: string; type: string }) => row.name)
            .sort((a: string, b: string) => {
              return a < b ? 1 : -1;
            });
        })
      );
  }

  queryStartCount(): Observable<number> {
    return this._http
      .get(GITHUB_URL + '/search/repositories?q=repo:Teradata/covalent')
      .pipe(
        map((data: any) => {
          return data.items.length > 0 ? data.items[0].stargazers_count : 0;
        }),
        catchError(() => {
          return new Observable((subscriber: Subscriber<number>) => {
            subscriber.next(0);
          });
        })
      );
  }
}

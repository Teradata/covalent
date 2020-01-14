import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const POWERBI_API_URL: string = 'https://powerbi-embed-api.azurewebsites.net/api';

@Injectable()
export class PowerBIService {
  constructor(private _http: HttpClient) {}

  getPowerBIEmbedToken(): Observable<any> {
    return this._http.get(POWERBI_API_URL + '/reports/c52af8ab-0468-4165-92af-dc39858d66ad').pipe(
      map((data: any) => data),
      catchError(() => {
        return new Observable((subscriber: Subscriber<any>) => {
          subscriber.next(0);
        });
      }),
    );
  }
}

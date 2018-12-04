import { Injectable, Injector } from '@angular/core';
import { HttpHeaders, HttpResponse, HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  TdHttp,
  GET,
  TdResponse,
  TdQueryParams,
} from '@covalent/experimental/http';

@TdHttp({
  baseUrl: 'https://api.github.com',
  baseHeaders: new HttpHeaders({ 'Accept': 'application/json' }),
})
@Injectable()
export class TestHttpService {

  constructor(private _httpClient: HttpClient, private _injector: Injector) {
    /* tslint:disable-next-line */
    console.log(_httpClient, _injector); // dont remove, its to test if they get injected
  }

  @GET({
    path: '/search/repositories',
    options: {
      observe: 'response',
    },
  })
  getResponse(@TdQueryParams() queryParams?: HttpParams): Observable<HttpResponse<any>> { return; }

  @GET({
    path: '/search/repositories',
  })
  getParsedResponse(@TdQueryParams() queryParams?: HttpParams): Observable<HttpResponse<any>> { return; }

  @GET({
    path: '/search/repositories',
  })
  getMappedResponse(@TdQueryParams() queryParams?: HttpParams, @TdResponse() response?: Observable<HttpResponse<any>>): Observable<number> {
    return response.pipe(
      map((data: any) => {
        return data.items.length > 0 ? data.items[0].stargazers_count : 0;
      }),
    );
  }
}

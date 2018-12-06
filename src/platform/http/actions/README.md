# Http Decorators

It is a framework of decorators on top of the angular [HttpClient] or covalent [TdHttpService] to enhance your services and give them Http capabilities.

## Usage

Example:

```typescript
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {
  TdHttp,
  TdGET,
  TdPOST,
  TdBody,
  TdParam,
  TdResponse,
  TdQueryParams,
} from '@covalent/http';

/**
 * TdHttp uses TdHttpService and TdHttpClient uses HttpClient
 */

@TdHttp({ // or @TdHttpClient({
  baseUrl: 'www.mybaseurl.com',
  baseHeaders: new HttpHeaders({ 'Accept': 'application/json' }),
})
@Injectable()
export class TestHttpService {
  /**
   * Generates http request [www.mybaseurl.com/myitems] GET and returns an HttpResponse object
   */
  @TdGET({
    path: '/myitems',
    options: {
      observe: 'response',
    },
  })
  getResponse(): Observable<HttpResponse<any>> { return; }

  /**
   * Assuming queryParams = {q: 1}
   * Generates http request [www.mybaseurl.com/myitems?q=1] GET and returns the response body parsed in JSON
   */
  @TdGET({
    path: '/myitems',
  })
  getParsedResponse(@TdQueryParams() queryParams?: HttpParams): Observable<HttpResponse<any>> { return; }

  /**
   * Generates http request [www.mybaseurl.com/myitems] GET and returns the number of items after we use `map` of the response body
   */
  @TdGET({
    path: '/myitems',
  })
  getMappedResponse(@TdResponse() response?: Observable<HttpResponse<any>>): Observable<number> {
    return response.pipe(
      map((data: any) => {
        return data.items.length;
      }),
    );
  }
  
  /**
   * Assuming `id` = 1234
   * Generates http request [www.mybaseurl.com/myitems/1234] GET and returns the response body parsed in JSON
   */
  @TdGET({
    path: '/myitems/:id',
  })
  get(@TdParam('id') id: string,
      @TdResponse() response?: Observable<HttpResponse<any>>): Observable<any> { return; }

  /**
   * Generates http request [www.mybaseurl.com/myitems] POST with a request body and returns the response body parsed in JSON
   */
  @POST({
    path: '/myitems',
  })
  create(@TdBody() body: any,
          @TdResponse() response?: Observable<HttpResponse<any>>): Observable<any> {
    return response.pipe(
      map((data: any) => {
        return {
          name: data.MyName,
        };
      }),
    );
  }
}
```
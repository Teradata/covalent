# RESTService (deprecated)

Abstract class provided with methods that wraps http services to facilitate REST API calls with `@angular/http`.

## API Summary

#### Methods

+ query: function(query?: IRestQuery, transform?: IRestTransform)
  + Creates a GET request to the generated endpoint URL.
+ get: function(id: string | number, transform?: IRestTransform)
  + Creates a GET request to the generated endpoint URL, adding the ID at the end.
+ create: function(obj: T, transform?: IRestTransform)
  + Creates a POST request to the generated endpoint URL.
+ update: function(id: string | number, obj: T, transform?: IRestTransform)
  + Creates a PATCH request to the generated endpoint URL, adding the ID at the end.
+ delete: function(id: string | number, transform?: IRestTransform)
  + Creates a DELETE request to the generated endpoint URL, adding the ID at the end.
+ buildUrl: function(id?: string | number, query?: IRestQuery)
  + Builds the endpoint URL with the configured properties and arguments passed in the method.

## Usage

Example:

```typescript
import { Injectable } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';
import { RESTService, HttpInterceptorService } from '@covalent/http-deprec';

@Injectable()
export class CustomRESTService extends RESTService<any> {

  constructor(private _http: Http /* or HttpInterceptorService */) {
    super(_http, {
      baseUrl: 'www.api.com',
      path: '/path/to/endpoint',
      headers: new Headers(),
      dynamicHeaders: () => new Headers(),
      transform: (res: Response): any => res.json(),
    });
  }
}

```
Note: the constructor takes any object that implements the methods in [IHttp] interface. This can be the @angular [Http] service, the covalent [HttpInterceptorService] or a custom service.</p>

```typescript
export interface IHttp {
  delete: (url: string, options?: RequestOptionsArgs) => Observable<Response>;
  get: (url: string, options?: RequestOptionsArgs) => Observable<Response>;
  head: (url: string, options?: RequestOptionsArgs) => Observable<Response>;
  patch: (url: string, body: any, options?: RequestOptionsArgs) => Observable<Response>;
  post: (url: string, body: any, options?: RequestOptionsArgs) => Observable<Response>;
  put: (url: string, body: any, options?: RequestOptionsArgs) => Observable<Response>;
  request: (url: string | Request, options: RequestOptionsArgs) => Observable<Response>;
}
```

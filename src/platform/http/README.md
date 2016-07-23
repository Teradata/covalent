# HttpInterceptorService

### Usage

Service provided with methods that wrap the ng2 [Http] service and provide an easier experience for interceptor implementation.

To add a desired interceptor, it needs to implement the [IHttpInterceptor] interface.

```
export interface IHttpInterceptor {
  onRequest?: (requestOptions: RequestOptionsArgs) => RequestOptionsArgs;
  onResponse?: (response: Response) => Response;
  onResponseError?: (error: Response) => Response;
}
```
Every method is optional, so you can just implement the ones that are needed.

Example for usage:
```
import { Injectable } from '@angular/core';
import { IHttpInterceptor } from '@covalent/http';

@Injectable()
export class CustomInterceptor implements IHttpInterceptor {

  onRequest(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
    ... // do something to requestOptions
    return requestOptions;
  }

  onResponse(response: Response): Response {
    ... // check response status and do something
    return response;
  }

  onResponseError(error: Response): Response {
    ... // check error status and do something
    return error;
  }
}

```

Also, you need to bootstrap the interceptors provider
```
import { HTTP_PROVIDERS } from '@angular/http';
import { provideInterceptors } from '@covalent/http';
import { CustomInterceptor } from 'dir/to/interceptor';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  provideInterceptors([CustomInterceptor]),
]);
```

After that, just inject [HttpInterceptorService] and use it for your requests.

### API Summary

Methods:

| Name | Type | Description |
| --- | --- | --- |
| `delete` | `function(url: string, options: RequestOptionsArgs)` | Uses underlying ng2 [http] to request a DELETE method to a URL, executing the interceptors as part of the request pipeline.
| `get` | `function(url: string, options: RequestOptionsArgs)` | Uses underlying ng2 [http] to request a GET method to a URL, executing the interceptors as part of the request pipeline.
| `head` | `function(url: string, options: RequestOptionsArgs)` | Uses underlying ng2 [http] to request a HEAD method to a URL, executing the interceptors as part of the request pipeline.
| `patch` | `function(url: string, data: any, options: RequestOptionsArgs)` | Uses underlying ng2 [http] to request a PATCH method to a URL, executing the interceptors as part of the request pipeline.
| `post` | `function(url: string, data: any, options: RequestOptionsArgs)` | Uses underlying ng2 [http] to request a POST method to a URL, executing the interceptors as part of the request pipeline.
| `put` | `function(url: string, data: any, options: RequestOptionsArgs)` | Uses underlying ng2 [http] to request a PUT method to a URL, executing the interceptors as part of the request pipeline.

# RESTService

### Usage

Service provided with methods that wrap the any service with the core http methods to facilitate REST API calls.
```
export interface IHttp {
  delete: (url: string, options?: RequestOptionsArgs) => Observable<Response>;
  get: (url: string, options?: RequestOptionsArgs) => Observable<Response>;
  head: (url: string, options?: RequestOptionsArgs) => Observable<Response>;
  patch: (url: string, body: any, options?: RequestOptionsArgs) => Observable<Response>;
  post: (url: string, body: any, options?: RequestOptionsArgs) => Observable<Response>;
  put: (url: string, body: any, options?: RequestOptionsArgs) => Observable<Response>;
}
```

Example for usage:
```
import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { RESTService, HttpInterceptorService } from '@covalent/http';

@Injectable()
export class CustomRESTService extends RESTService<any> {

  constructor(private _http: Http) { // or constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: www.api.com,
      path: '/path/to/endpoint',
      transform: (res: Response): any => res.json(),
    });
  }
}

```

### API Summary

Methods:

| Name | Type | Description |
| --- | --- | --- |
| `query` | `function(query?: IRestQuery)` | Creates a GET request to the built endpoint URL.
| `get` | `function(id: string | number)` | Creates a GET request to the built endpoint URL, adding the ID at the end.
| `create` | `function(obj: T)` | Creates a POST request to the built endpoint URL.
| `update` | `function(id: string | number, obj: T)` | Creates a PATCH request to the built endpoint URL, adding the ID at the end.
| `delete` | `function(id: string | number)` | Creates a DELETE request to the built endpoint URL, adding the ID at the end.
| `buildUrl` | `function(id?: string | number, query?: IRestQuery)` | Builds the endpoint URL with the configured properties and arguments passed in the method.
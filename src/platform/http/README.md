# HttpInterceptorService

## API Summary

Methods:

| Name | Type | Description |
| --- | --- | --- |
| `delete` | `function(url: string, options: RequestOptionsArgs)` | Uses underlying ng2 [http] to request a DELETE method to a URL, executing the interceptors as part of the request pipeline.
| `get` | `function(url: string, options: RequestOptionsArgs)` | Uses underlying ng2 [http] to request a GET method to a URL, executing the interceptors as part of the request pipeline.
| `head` | `function(url: string, options: RequestOptionsArgs)` | Uses underlying ng2 [http] to request a HEAD method to a URL, executing the interceptors as part of the request pipeline.
| `patch` | `function(url: string, data: any, options: RequestOptionsArgs)` | Uses underlying ng2 [http] to request a PATCH method to a URL, executing the interceptors as part of the request pipeline.
| `post` | `function(url: string, data: any, options: RequestOptionsArgs)` | Uses underlying ng2 [http] to request a POST method to a URL, executing the interceptors as part of the request pipeline.
| `put` | `function(url: string, data: any, options: RequestOptionsArgs)` | Uses underlying ng2 [http] to request a PUT method to a URL, executing the interceptors as part of the request pipeline.
| `request` | `function(url: string | Request, options: RequestOptionsArgs)` | Uses underlying ng2 [http] to request a generic request to a URL, executing the interceptors as part of the request pipeline.

## Usage

Service provided with methods that wrap the ng2 [Http] service and provide an easier experience for interceptor implementation.

To add a desired interceptor, it needs to implement the [IHttpInterceptor] interface.

```typescript
export interface IHttpInterceptor {
  onRequest?: (requestOptions: RequestOptionsArgs) => RequestOptionsArgs;
  onRequestError?: (requestOptions: RequestOptionsArgs) => RequestOptionsArgs;
  onResponse?: (response: Response) => Response;
  onResponseError?: (error: Response) => Response;
}
```
Every method is optional, so you can just implement the ones that are needed.

## Setup

Create your custom interceptors by implementing [IHttpInterceptor]:

```typescript
import { Injectable } from '@angular/core';
import { IHttpInterceptor } from '@covalent/http';

@Injectable()
export class CustomInterceptor implements IHttpInterceptor {

   onRequest(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
    ... // do something to requestOptions before a request
    ... // if something is wrong, throw an error to execute onRequestError (if there is an onRequestError hook)
    if (/*somethingWrong*/) {
      throw new Error('error message for subscription error callback');
    }
    return requestOptions;
  }

  onRequestError(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
    ... // do something to try and recover from an error thrown `onRequest` 
    ... // and return the requestOptions needed for the request
    ... // else return 'undefined' or throw an error to execute the error callback of the subscription
    if (cantRecover) {
      throw new Error('error message for subscription error callback'); // or return undefined;
    }
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

Then, import the [CovalentHttpModule] using the forRoot() method with the desired interceptors and paths to intercept in your NgModule:

```typescript
import { NgModule, Type } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CustomInterceptor } from 'dir/to/interceptor';

const httpInterceptorProviders: Type<IHttpInterceptor>[] = [
  CustomInterceptor,
  ...
];

@NgModule({
  imports: [
    HttpModule, /* or CovalentCoreModule.forRoot() */
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: CustomInterceptor, paths: ['**'],
      }],
    }),
    ...
  ],
  providers: [
    httpInterceptorProviders,
    ...
  ],
  ...
})
export class MyModule {}
```

After that, just inject [HttpInterceptorService] and use it for your requests.

## Paths

The following characters are accepted as a path to intercept
- `**` is a wildcard for `[a-zA-Z0-9-_]` (including `/`)
- `*` is a wildcard for `[a-zA-Z0-9-_]` (excluding `/`)
- `[a-zA-Z0-9-_]`

#### Examples

Example 1

`/users/*/groups` intercepts:
- `www.url.com/users/id-of-user/groups`
- `www.url.com/users/id/groups`

`/users/*/groups` DOES NOT intercept:
- `www.url.com/users/id-of-user/groups/path`
- `www.url.com/users/id-of-user/path/groups`
- `www.url.com/users/groups`

Example 2

`/users/**/groups` intercepts:
- `www.url.com/users/id-of-user/groups`
- `www.url.com/users/id/groups`
- `www.url.com/users/id-of-user/path/groups`

`/users/**/groups` DOES NOT intercept:
- `www.url.com/users/id-of-user/groups/path`
- `www.url.com/users/groups`

Example 3

`/users/**` intercepts:
- `www.url.com/users/id-of-user/groups`
- `www.url.com/users/id/groups`
- `www.url.com/users/id-of-user/path/groups`
- `www.url.com/users/id-of-user/groups/path`
- `www.url.com/users/groups`

`/users/**` DOES NOT intercept:
- `www.url.com/users`

Example 4

`/users**` intercepts:
- `www.url.com/users/id-of-user/groups`
- `www.url.com/users/id/groups`
- `www.url.com/users/id-of-user/path/groups`
- `www.url.com/users/id-of-user/groups/path`
- `www.url.com/users/groups`
- `www.url.com/users`


# RESTService

## API Summary

Methods:

| Name | Type | Description |
| --- | --- | --- |
| `query` | `function(query?: IRestQuery, transform?: IRestTransform)` | Creates a GET request to the generated endpoint URL.
| `get` | `function(id: string | number, transform?: IRestTransform)` | Creates a GET request to the generated endpoint URL, adding the ID at the end.
| `create` | `function(obj: T, transform?: IRestTransform)` | Creates a POST request to the generated endpoint URL.
| `update` | `function(id: string | number, obj: T, transform?: IRestTransform)` | Creates a PATCH request to the generated endpoint URL, adding the ID at the end.
| `delete` | `function(id: string | number, transform?: IRestTransform)` | Creates a DELETE request to the generated endpoint URL, adding the ID at the end.
| `buildUrl` | `function(id?: string | number, query?: IRestQuery)` | Builds the endpoint URL with the configured properties and arguments passed in the method.

## Usage

Abstract class provided with methods that wraps http services to facilitate REST API calls.

Example:

```typescript
import { Injectable } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';
import { RESTService, HttpInterceptorService } from '@covalent/http';

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
Note: the constructor takes any object that implements the methods in [IHttp] interface. This can be the ng2 [Http] service, the covalent [HttpInterceptorService] or a custom service.</p>

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

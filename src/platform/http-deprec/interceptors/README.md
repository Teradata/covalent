# HttpInterceptorService (deprecated)

Service provided with methods that wrap the @angular [Http] service and provide an easier experience for interceptor implementation.

## API Summary

#### Methods

+ delete: function(url: string, options: RequestOptionsArgs)
  + Uses underlying @angular [http] to request a DELETE method to a URL, executing the interceptors as part of the request pipeline.
+ get: function(url: string, options: RequestOptionsArgs)
  + Uses underlying @angular [http] to request a GET method to a URL, executing the interceptors as part of the request pipeline.
+ head: function(url: string, options: RequestOptionsArgs)
  + Uses underlying @angular [http] to request a HEAD method to a URL, executing the interceptors as part of the request pipeline.
+ patch: function(url: string, data: any, options: RequestOptionsArgs)
  + Uses underlying @angular [http] to request a PATCH method to a URL, executing the interceptors as part of the request pipeline.
+ post: function(url: string, data: any, options: RequestOptionsArgs)
  + Uses underlying @angular [http] to request a POST method to a URL, executing the interceptors as part of the request pipeline.
+ put: function(url: string, data: any, options: RequestOptionsArgs)
  + Uses underlying @angular [http] to request a PUT method to a URL, executing the interceptors as part of the request pipeline.
+ request: function(url: string | Request, options: RequestOptionsArgs)
  + Uses underlying @angular [http] to request a generic request to a URL, executing the interceptors as part of the request pipeline.

## Usage

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
import { IHttpInterceptor } from '@covalent/http-deprec';

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
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http-deprec';
import { CustomInterceptor } from 'dir/to/interceptor';

const httpInterceptorProviders: Type<IHttpInterceptor>[] = [
  CustomInterceptor,
  ...
];

@NgModule({
  imports: [
    HttpModule,
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

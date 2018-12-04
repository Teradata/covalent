# TdHttpService

Service provided with methods that extend the @angular [HttpClient] service and provide an additional layer of interceptor functionality.

## API Summary

#### Methods

+ delete: function(url: string, options?: { headers?: HttpHeaders; observe?: "body";...)
  + Provided via @angular [HttpClient] to request a DELETE method to a URL, executing the interceptors as part of the request pipeline.
+ get: function(url: string, options?: { headers?: HttpHeaders; observe?: "body";...)
  + Provided via @angular [HttpClient] to request a GET method to a URL, executing the interceptors as part of the request pipeline.
+ head: function(url: string, options?: { headers?: HttpHeaders; observe?: "body";...)
  + Provided via @angular [HttpClient] to request a HEAD method to a URL, executing the interceptors as part of the request pipeline.
+ jsonp: function(url: string, callbackParam: string)
  + Provided via @angular [HttpClient] to request a JSONP method to a URL, executing the interceptors as part of the request pipeline.
+ options: function(url: string, options?: { headers?: HttpHeaders; observe?: "body";...)
  + Provided via @angular [HttpClient] to request an OPTIONS method to a URL, executing the interceptors as part of the request pipeline.
+ patch: function(url: string, data: any, options?: { body?: any; headers?: HttpHeaders; observe?: "body";...)
  + Provided via @angular [HttpClient] to request a PATCH method to a URL, executing the interceptors as part of the request pipeline.
+ post: function(url: string, data: any, options?: { body?: any; headers?: HttpHeaders; observe?: "body";...)
  + Provided via @angular [HttpClient] to request a POST method to a URL, executing the interceptors as part of the request pipeline.
+ put: function(url: string, data: any, options?: { body?: any; headers?: HttpHeaders; observe?: "body";...)
  + Provided via @angular [HttpClient] to request a PUT method to a URL, executing the interceptors as part of the request pipeline.
+ request: function(method: string | HttpRequest, url: string, options?: { body?: any; headers?: HttpHeaders; observe?: "body";...)
  + Provided via @angular [HttpClient] to request a generic request to a URL, executing the interceptors as part of the request pipeline.

More information in [HttpClient](https://angular.io/api/common/http/HttpClient#methods)

## Usage

To add a desired interceptor, it needs to implement the [ITdHttpInterceptor] interface.

```typescript
export interface ITdHttpInterceptor {
  handleOptions?: (options: ITdHttpRESTOptionsWithBody) => ITdHttpRESTOptionsWithBody;
  handleResponse?: (observable: Observable<any>) => Observable<any>;
}
```
Every method is optional, so you can just implement the ones that are needed.

## Setup

Create your custom interceptors by implementing [ITdHttpInterceptor]:

```typescript
import { Injectable } from '@angular/core';
import { ITdHttpInterceptor } from '@covalent/http';

@Injectable()
export class CustomInterceptor implements ITdHttpInterceptor {

   handleOptions(options: ITdHttpRESTOptionsWithBody): ITdHttpRESTOptionsWithBody {
    ... // do something to options before a request
    ... // if something is wrong, throw an error that will execute the error callback of the subscription
    if (/*somethingWrong*/) {
      throw new Error('error message for subscription error callback');
    }
    ... // you can also do something to try and recover from an error
    ... // and return the options needed for the request
    ... // else throw an error to execute the error callback of the subscription
    if (cantRecover) {
      throw new Error('error message for subscription error callback');
    }
    return options;
  }

  handleResponse(observable: Observable<any>): Observable<any> {
    ... // hook into the response observable with rxjs operators
    return response.pipe(
      map((res: any) => {
        // check response status and do something
        if (res instanceof HttpResponse<any>) {
          return res.body;
        } else {
          return res;
        }
      }),
      catchError((e: any) => {
        // check error and do something
        if (e instanceof HttpErrorResponse) {
          // do something if its response error
        }
      })
    );
  }
}

```

Then, import the [CovalentHttpModule] using the forRoot() method with the desired interceptors and paths to intercept in your NgModule:

```typescript
import { NgModule, Type } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CovalentHttpModule, ITdHttpInterceptor } from '@covalent/http';
import { CustomInterceptor } from 'dir/to/interceptor';

const httpInterceptorProviders: Type<ITdHttpInterceptor>[] = [
  CustomInterceptor,
  ...
];

@NgModule({
  imports: [
    HttpClientModule,
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

After that, just inject [TdHttpService] and use it for your requests.

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

import { Injectable, Type, ValueProvider, Injector } from '@angular/core';
import { Http, RequestOptionsArgs, Response, Request } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

export interface IHttpInterceptor {
  onRequest?: (requestOptions: RequestOptionsArgs) => RequestOptionsArgs;
  onResponse?: (response: Response) => Response;
  onResponseError?: (error: Response) => Response;
}

@Injectable()
export class HttpInterceptorService {

  requestInterceptors: IHttpInterceptor[] = [];

  constructor(private _http: Http, private _injector: Injector, requestInterceptors: Type<any>[]) {
    requestInterceptors.forEach((interceptor: Type<any>) => {
      this.requestInterceptors.push(<IHttpInterceptor>_injector.get(interceptor));
    });
  }

  request(url: string | Request, options: RequestOptionsArgs = {}): Observable<Response> {
    this._requestConfig(options);
    return this._http.request(url, options)
      .do((response: Response) => {
        return this._responseResolve(response);
      }).catch((error: Response) => {
        return this._errorResolve(error);
      });
  }

  delete(url: string, options: RequestOptionsArgs = {}): Observable<Response> {
    this._requestConfig(options);
    return this._http.delete(url, options)
      .do((response: Response) => {
        return this._responseResolve(response);
      }).catch((error: Response) => {
        return this._errorResolve(error);
      });
  }

  get(url: string, options: RequestOptionsArgs = {}): Observable<Response> {
    this._requestConfig(options);
    return this._http.get(url, options)
      .do((response: Response) => {
        return this._responseResolve(response);
      }).catch((error: Response) => {
        return this._errorResolve(error);
      });
  }

  head(url: string, options: RequestOptionsArgs = {}): Observable<Response> {
    this._requestConfig(options);
    return this._http.head(url, options)
      .do((response: Response) => {
        return this._responseResolve(response);
      }).catch((error: Response) => {
        return this._errorResolve(error);
      });
  }

  patch(url: string, data: any, options: RequestOptionsArgs = {}): Observable<Response> {
    this._requestConfig(options);
    return this._http.patch(url, data, options)
      .do((response: Response) => {
        return this._responseResolve(response);
      }).catch((error: Response) => {
        return this._errorResolve(error);
      });
  }

  post(url: string, data: any, options: RequestOptionsArgs = {}): Observable<Response> {
    this._requestConfig(options);
    return this._http.post(url, data, options)
      .do((response: Response) => {
        return this._responseResolve(response);
      }).catch((error: Response) => {
        return this._errorResolve(error);
      });
  }

  put(url: string, data: any, options: RequestOptionsArgs = {}): Observable<Response> {
    this._requestConfig(options);
    return this._http.put(url, data, options)
      .do((response: Response) => {
        return this._responseResolve(response);
      }).catch((error: Response) => {
        return this._errorResolve(error);
      });
  }

  private _requestConfig(requestOptions: RequestOptionsArgs): void {
    this.requestInterceptors.forEach((interceptor: IHttpInterceptor) => {
      if (interceptor.onRequest) {
        requestOptions = interceptor.onRequest(requestOptions);
      }
    });
  }

  private _responseResolve(response: Response): Observable<Response> {
    this.requestInterceptors.forEach((interceptor: IHttpInterceptor) => {
      if (interceptor.onResponse) {
        response = interceptor.onResponse(response);
      }
    });
    return new Observable<any>((subscriber: Subscriber<any>) => {
      subscriber.next(response);
    });
  }

  private _errorResolve(error: Response): Observable<Response> {
    this.requestInterceptors.forEach((interceptor: IHttpInterceptor) => {
      if (interceptor.onResponseError) {
        error = interceptor.onResponseError(error);
      }
    });
    return new Observable<any>((subscriber: Subscriber<any>) => {
      subscriber.error(error);
    });
  }

}

export function provideInterceptors(requestInterceptors: Type<any>[] = []): any[] {
  let providers: any[] = [];
  requestInterceptors.forEach((interceptor: Type<any>) => {
    providers.push(interceptor);
  });
  providers.push({
    provide: HttpInterceptorService,
    useFactory: (http: Http, injector: Injector): HttpInterceptorService => {
      return new HttpInterceptorService(http, injector, requestInterceptors);
    },
    deps: [Http, Injector],
  });
  return providers;
}

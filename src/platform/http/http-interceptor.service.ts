import { Injectable, Type, Injector } from '@angular/core';
import { Http, RequestOptionsArgs, Response, Request } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

export interface IHttpInterceptor {
  onRequest?: (requestOptions: RequestOptionsArgs) => RequestOptionsArgs;
  onRequestError?: (requestOptions: RequestOptionsArgs) => RequestOptionsArgs;
  onResponse?: (response: Response) => Response;
  onResponseError?: (error: Response) => Response;
}

@Injectable()
export class HttpInterceptorService {

  private _requestInterceptors: IHttpInterceptor[] = [];

  constructor(private _http: Http, private _injector: Injector, requestInterceptors: Type<any>[]) {
    requestInterceptors.forEach((interceptor: Type<any>) => {
      this._requestInterceptors.push(<IHttpInterceptor>_injector.get(interceptor));
    });
  }

  request(url: string | Request, options: RequestOptionsArgs = {}): Observable<Response> {
    let requestOptionsArgs: RequestOptionsArgs;
    try {
      requestOptionsArgs = this._requestResolve(options);
    } catch (e) {
      return new Observable<any>((subscriber: Subscriber<any>) => {
        subscriber.error(e);
      });
    }
    return this._setupRequest(this._http.request(url, requestOptionsArgs));
  }

  delete(url: string, options: RequestOptionsArgs = {}): Observable<Response> {
    let requestOptionsArgs: RequestOptionsArgs;
    try {
      requestOptionsArgs = this._requestResolve(options);
    } catch (e) {
      return new Observable<any>((subscriber: Subscriber<any>) => {
        subscriber.error(e);
      });
    }
    return this._setupRequest(this._http.delete(url, requestOptionsArgs));
  }

  get(url: string, options: RequestOptionsArgs = {}): Observable<Response> {
    let requestOptionsArgs: RequestOptionsArgs;
    try {
      requestOptionsArgs = this._requestResolve(options);
    } catch (e) {
      return new Observable<any>((subscriber: Subscriber<any>) => {
        subscriber.error(e);
      });
    }
    return this._setupRequest(this._http.get(url, requestOptionsArgs));
  }

  head(url: string, options: RequestOptionsArgs = {}): Observable<Response> {
    let requestOptionsArgs: RequestOptionsArgs;
    try {
      requestOptionsArgs = this._requestResolve(options);
    } catch (e) {
      return new Observable<any>((subscriber: Subscriber<any>) => {
        subscriber.error(e);
      });
    }
    return this._setupRequest(this._http.head(url, requestOptionsArgs));
  }

  patch(url: string, data: any, options: RequestOptionsArgs = {}): Observable<Response> {
    let requestOptionsArgs: RequestOptionsArgs;
    try {
      requestOptionsArgs = this._requestResolve(options);
    } catch (e) {
      return new Observable<any>((subscriber: Subscriber<any>) => {
        subscriber.error(e);
      });
    }
    return this._setupRequest(this._http.patch(url, data, requestOptionsArgs));
  }

  post(url: string, data: any, options: RequestOptionsArgs = {}): Observable<Response> {
    let requestOptionsArgs: RequestOptionsArgs;
    try {
      requestOptionsArgs = this._requestResolve(options);
    } catch (e) {
      return new Observable<any>((subscriber: Subscriber<any>) => {
        subscriber.error(e);
      });
    }
    return this._setupRequest(this._http.post(url, data, requestOptionsArgs));
  }

  put(url: string, data: any, options: RequestOptionsArgs = {}): Observable<Response> {
    let requestOptionsArgs: RequestOptionsArgs;
    try {
      requestOptionsArgs = this._requestResolve(options);
    } catch (e) {
      return new Observable<any>((subscriber: Subscriber<any>) => {
        subscriber.error(e);
      });
    }
    return this._setupRequest(this._http.put(url, data, requestOptionsArgs));
  }

  private _setupRequest(responseObservable: Observable<Response>): Observable<Response> {
    return new Observable<any>((subscriber: Subscriber<any>) => {
      responseObservable.do((response: Response) => {
        subscriber.next(this._responseResolve(response));
        subscriber.complete();
      }).catch((error: Response) => {
        return new Observable<any>(() => {
          subscriber.error(this._responseErrorResolve(error));
        });
      }).subscribe();
    });
  }

  private _requestResolve(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
    this._requestInterceptors.forEach((interceptor: IHttpInterceptor) => {
      if (interceptor.onRequest) {
        try {
          requestOptions = interceptor.onRequest(requestOptions);
        } catch (e) {
          if (interceptor.onRequestError) {
            requestOptions = interceptor.onRequestError(requestOptions);
            if (!requestOptions) {
              throw e;
            }
          } else {
            throw e;
          }
        }
      }
    });
    return requestOptions;
  }

  private _responseResolve(response: Response): Response {
    this._requestInterceptors.forEach((interceptor: IHttpInterceptor) => {
      if (interceptor.onResponse) {
        response = interceptor.onResponse(response);
      }
    });
    return response;
  }

  private _responseErrorResolve(error: Response): Response {
    this._requestInterceptors.forEach((interceptor: IHttpInterceptor) => {
      if (interceptor.onResponseError) {
        error = interceptor.onResponseError(error);
      }
    });
    return error;
  }

}

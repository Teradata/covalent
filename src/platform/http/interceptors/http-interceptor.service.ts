import { Injectable, Type, Injector } from '@angular/core';
import { Http, RequestOptionsArgs, Response, Request, RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { IHttpInterceptor } from './http-interceptor.interface';
import { IURLCompare } from './url-compare.interface';
import { URLRegExCompare } from './url-regexp-compare.class';

export interface IHttpInterceptorConfig {
  interceptor: Type<any>;
  paths: string[];
}

export interface IHttpInterceptorMapping {
  interceptor: IHttpInterceptor;
  paths: string[];
}

@Injectable()
export class HttpInterceptorService {

  private _requestInterceptors: IHttpInterceptorMapping[] = [];
  private _urlCompare: IURLCompare;

  constructor(private _http: Http,
              private _injector: Injector,
              requestInterceptorConfigs: IHttpInterceptorConfig[]) {
    requestInterceptorConfigs.forEach((config: IHttpInterceptorConfig) => {
      this._requestInterceptors.push({
        interceptor: <IHttpInterceptor>_injector.get(config.interceptor),
        paths: config.paths,
      });
    });
    this._urlCompare = this._createURLCompareInstance();
  }

  public delete(url: string, requestOptions: RequestOptionsArgs = {}): Observable<Response> {
    requestOptions.url = url;
    requestOptions.method = RequestMethod.Delete;
    return this.request(url, requestOptions);
  }

  public get(url: string, requestOptions: RequestOptionsArgs = {}): Observable<Response> {
    requestOptions.url = url;
    requestOptions.method = RequestMethod.Get;
    return this.request(url, requestOptions);
  }

  public head(url: string, requestOptions: RequestOptionsArgs = {}): Observable<Response> {
    requestOptions.url = url;
    requestOptions.method = RequestMethod.Head;
    return this.request(url, requestOptions);
  }

  public patch(url: string, data: any, requestOptions: RequestOptionsArgs = {}): Observable<Response> {
    requestOptions.url = url;
    requestOptions.method = RequestMethod.Patch;
    requestOptions.body = data;
    return this.request(url, requestOptions);
  }

  public post(url: string, data: any, requestOptions: RequestOptionsArgs = {}): Observable<Response> {
    requestOptions.url = url;
    requestOptions.method = RequestMethod.Post;
    requestOptions.body = data;
    return this.request(url, requestOptions);
  }

  public put(url: string, data: any, requestOptions: RequestOptionsArgs = {}): Observable<Response> {
    requestOptions.url = url;
    requestOptions.method = RequestMethod.Put;
    requestOptions.body = data;
    return this.request(url, requestOptions);
  }

  public request(url: string | Request, requestOptions: RequestOptionsArgs = {}): Observable<Response> {
    let requestUrl: string;
    if (url instanceof Request) {
      requestUrl = url.url ? url.url : requestOptions.url;
    } else {
      requestUrl = url;
    }
    let interceptors: IHttpInterceptor[] = this._requestInterceptors.filter((mapping: IHttpInterceptorMapping) => {
      return this._urlCompare.compare(requestUrl, mapping.paths);
    }).map((mapping: IHttpInterceptorMapping) => {
      return mapping.interceptor;
    });
    return this._setupRequest(url, requestOptions, interceptors);
  }

  private _setupRequest(url: string | Request,
                        requestOptions: RequestOptionsArgs,
                        interceptors: IHttpInterceptor[]): Observable<Response> {
    try {
      requestOptions = this._requestResolve(requestOptions, interceptors);
    } catch (e) {
      return new Observable<any>((subscriber: Subscriber<any>) => {
        subscriber.error(e);
      });
    }
    return new Observable<any>((subscriber: Subscriber<any>) => {
      this._http.request(url, requestOptions)
      .do((response: Response) => {
        subscriber.next(this._responseResolve(response, interceptors));
        subscriber.complete();
      }).catch((error: Response) => {
        return new Observable<any>(() => {
          subscriber.error(this._responseErrorResolve(error, interceptors));
        });
      }).subscribe();
    });
  }

  private _requestResolve(requestOptions: RequestOptionsArgs, interceptors: IHttpInterceptor[]): RequestOptionsArgs {
    interceptors.forEach((interceptor: IHttpInterceptor) => {
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

  private _responseResolve(response: Response, interceptors: IHttpInterceptor[]): Response {
    interceptors.forEach((interceptor: IHttpInterceptor) => {
      if (interceptor.onResponse) {
        response = interceptor.onResponse(response);
      }
    });
    return response;
  }

  private _responseErrorResolve(error: Response, interceptors: IHttpInterceptor[]): Response {
    interceptors.forEach((interceptor: IHttpInterceptor) => {
      if (interceptor.onResponseError) {
        error = interceptor.onResponseError(error);
      }
    });
    return error;
  }

  private _createURLCompareInstance(): IURLCompare {
    return new URLRegExCompare();
  }

}

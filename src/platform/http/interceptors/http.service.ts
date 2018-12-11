import { Type, Injector } from '@angular/core';
import { HttpClient, HttpHandler, HttpResponse, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, Subscriber } from 'rxjs';

import { ITdHttpInterceptor } from './http-interceptor.interface';
import { ITdHttpInterceptorMatcher } from './http-interceptor-matcher.interface';
import { ITdHttpInterceptorMapping } from './http-interceptor-mapping.interface';

import { ITdHttpRESTOptionsWithBody } from '../http.interfaces';

export interface ITdHttpInterceptorConfig {
  interceptor: Type<any>;
  paths: string[];
}

export class TdInterceptorBehaviorService {
  private _requestInterceptors: ITdHttpInterceptorMapping[] = [];

  get requestInterceptors(): ITdHttpInterceptorMapping[] {
    return this._requestInterceptors;
  }

  get httpInterceptorMatcher(): ITdHttpInterceptorMatcher {
    return this._httpInterceptorMatcher;
  }

  constructor(private _injector: Injector,
              private _httpInterceptorMatcher: ITdHttpInterceptorMatcher,
              requestInterceptorConfigs: ITdHttpInterceptorConfig[]) {
    requestInterceptorConfigs.forEach((config: ITdHttpInterceptorConfig) => {
      this._requestInterceptors.push({
        interceptor: <ITdHttpInterceptor>_injector.get(config.interceptor),
        paths: config.paths,
      });
    });
  }
}

export class TdHttpService extends HttpClient {

  constructor(private _handler: HttpHandler,
              private _interceptorBehavior: TdInterceptorBehaviorService) {
    super(_handler);
  }

  request(first: string|HttpRequest<any>, url?: string, options: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  } = {}): Observable<any> {
    let interceptors: ITdHttpInterceptor[] = this._interceptorBehavior.requestInterceptors.filter((mapping: ITdHttpInterceptorMapping) => {
      return this._interceptorBehavior.httpInterceptorMatcher.matches({url: url}, mapping);
    }).map((mapping: ITdHttpInterceptorMapping) => {
      return mapping.interceptor;
    });
    return this._setupRequest(first, url, options, interceptors);
  }

  private _setupRequest(method: string|HttpRequest<any>,
                        url: string,
                        options: ITdHttpRESTOptionsWithBody,
                        interceptors: ITdHttpInterceptor[]): Observable<HttpResponse<any>> {
    try {
      options = this._requestResolve(options, interceptors);
    } catch (e) {
      return new Observable<any>((subscriber: Subscriber<any>) => {
        subscriber.error(e);
      });
    }
    return this._handleResponseResolve(super.request(<any>method, url, options), interceptors);
  }

  private _requestResolve(options: ITdHttpRESTOptionsWithBody, interceptors: ITdHttpInterceptor[]): ITdHttpRESTOptionsWithBody {
    interceptors.forEach((interceptor: ITdHttpInterceptor) => {
      if (interceptor.handleOptions) {
        options = interceptor.handleOptions(options);
      }
    });
    return options;
  }

  private _handleResponseResolve(obs: Observable<any>, interceptors: ITdHttpInterceptor[]): Observable<any> {
    interceptors.reverse().forEach((interceptor: ITdHttpInterceptor) => {
      if (interceptor.handleResponse) {
        obs = interceptor.handleResponse(obs);
      }
    });
    return obs;
  }
}

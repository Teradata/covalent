import { Type, Injectable, Injector, ɵReflectionCapabilities, InjectFlags, Optional,
  SkipSelf, Self, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TdHttpService } from '@covalent/http';

import { Observable, of } from 'rxjs';

export type TdHttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'HEAD' | 'PUT' | 'OPTIONS';

export type TdHttpRESTResponseType = 'arraybuffer' | 'blob' | 'json' | 'text';

export type TdHttpRESTObserve = 'body' | 'response' | 'events';

export interface ITdHttpRESTConfig {
  baseHeaders?: HttpHeaders;
  baseUrl: string;
  defaultObserve?: TdHttpRESTObserve;
  defaultResponseType?: TdHttpRESTResponseType;
  httpServiceType?: Type<HttpClient | TdHttpService>;
}

export interface ITdHttpRESTOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: TdHttpRESTObserve;
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  responseType?: TdHttpRESTResponseType;
  reportProgress?: boolean;
  withCredentials?: boolean;
}

export interface ITdHttpRESTOptionsWithBody extends ITdHttpRESTOptions {
  body?: any;
}

export const NOOP_HTTP: Observable<any> = of(undefined);

type Constructor<T> = new (...args: any[]) => T;

/**
 * DO NOT MODIFY
 * Taken from angular since they dont expose this function
 * This is used internally to inject services from the constructor of the base service using the mixinHttp
 * @internal
 */
function injectArgs(types: (Type<any>| InjectionToken<any>| any[])[], injector: Injector): any[] {
  const args: any[] = [];
  for (let i: number = 0; i < types.length; i++) {
    const arg: any = types[i];
    if (Array.isArray(arg)) {
      if (arg.length === 0) {
        throw new Error('Arguments array must have arguments.');
      }
      let type: Type<any>|undefined = undefined;
      let flags: InjectFlags = InjectFlags.Default;

      for (let j: number = 0; j < arg.length; j++) {
        const meta: any = arg[j];
        if (meta instanceof Optional || meta.ngMetadataName === 'Optional') {
          /* tslint:disable */
          flags |= InjectFlags.Optional;
        } else if (meta instanceof SkipSelf || meta.ngMetadataName === 'SkipSelf') {
          flags |= InjectFlags.SkipSelf;
        } else if (meta instanceof Self || meta.ngMetadataName === 'Self') {
          flags |= InjectFlags.Self;
        } else if (meta instanceof Inject) {
          type = meta.token;
        } else {
          type = meta;
        }
        /* tslint:enable */
      }

      args.push(injector.get(type !, flags));
    } else {
      args.push(injector.get(arg));
    }
  }
  return args;
}

/** 
 * Mixin to augment a service with http helpers.
 * @internal
 */
export function mixinHttp(base: any, config: ITdHttpRESTConfig): Constructor<any> {
  /**
   * Internal class used to get an instance of Injector for internal usage plus also
   * a way to inject services from the constructor of the underlying service
   * @internal
   */
  @Injectable()
  abstract class HttpInternalClass extends base {
    constructor(public _injector: Injector) {
      super(...injectArgs(new ɵReflectionCapabilities().parameters(base), _injector));
      this.buildConfig();
    }
    abstract buildConfig(): void;
  }
  /**
   * Actuall class being returned with all the hooks for http usage
   * @internal
   */
  return class extends HttpInternalClass {
    private _baseUrl: string;
    get baseUrl(): string {
      return (typeof(this.basePath) === 'string' ?
        this.basePath.replace(/\/$/, '') : '') + this._baseUrl;
    }
    private _baseHeaders: HttpHeaders;
    private _defaultObserve?: TdHttpRESTObserve;
    private _defaultResponseType?: TdHttpRESTResponseType;

    http: HttpClient | TdHttpService;

    /**
     * Method used to setup the configuration parameters and get an instance of the http service
     */
    buildConfig(): void {
      this.http = this._injector.get(config.httpServiceType || HttpClient);
      this._baseUrl = config && config.baseUrl ? config.baseUrl.replace(/\/$/, '') : '';
      this._baseHeaders = config && config.baseHeaders ? config.baseHeaders : new HttpHeaders();
      this._defaultObserve = config && config.defaultObserve ? config.defaultObserve : 'body';
      this._defaultResponseType = config && config.defaultResponseType ? config.defaultResponseType : 'json';
    }

    /**
     * Method used to build the default headers using the base headers
     */
    buildHeaders(): HttpHeaders {
      let headersObj: {[key: string]: any} = {};
      this._baseHeaders.keys().forEach((key: any) => {
        headersObj[key] = this._baseHeaders.get(key);
      });
      return new HttpHeaders(headersObj);
    }
    /* tslint:disable-next-line */
    buildRequest<HttpResponse>(method: 'POST' | 'PUT' | 'PATCH', url: string, options?: ITdHttpRESTOptionsWithBody): Observable<HttpResponse>;
    /* tslint:disable-next-line */
    buildRequest<HttpResponse>(method: 'GET' | 'DELETE', url: string, options?: ITdHttpRESTOptions): Observable<HttpResponse>;
    /* tslint:disable-next-line */
    buildRequest<HttpResponse>(method: TdHttpMethod, url: string, options?: ITdHttpRESTOptionsWithBody): Observable<HttpResponse> {
      return this._buildRequest(method, url, options);
    }

    /**
     * Method used to build the request depending on the `http` service and TdHttpMethod
     */
    private _buildRequest(method: TdHttpMethod, url: string, options: ITdHttpRESTOptionsWithBody = {}): Observable<any> {
      if (!options.responseType) {
        options.responseType = this._defaultResponseType;
      }
      if (!options.observe) {
        options.observe = this._defaultObserve;
      }
      if (!options.headers) {
        options.headers = this.buildHeaders();
      } else {
        let headers: HttpHeaders = this.buildHeaders();
        if (options.headers instanceof HttpHeaders) {
          (<HttpHeaders>options.headers).keys().forEach((key: any) => {
            headers = headers.set(key, (<HttpHeaders>options.headers).get(key));
          });
        } else {
          for (let key in options.headers) {
            headers = headers.set(key, <any>options.headers[key]);
          }
        }
        options.headers = headers;
      }
      return (<TdHttpService>this.http).request(method, url, options);
    }
  };
}

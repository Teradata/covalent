import { NgModule, ModuleWithProviders, Injector, OpaqueToken } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { HttpInterceptorService, IHttpInterceptorConfig } from './interceptors/http-interceptor.service';
import { URLRegExpInterceptorMatcher } from './interceptors/url-regexp-interceptor-matcher.class';

export const HTTP_CONFIG: OpaqueToken = new OpaqueToken('HTTP_CONFIG');

export type HttpConfig = {interceptors: IHttpInterceptorConfig[]};

export function httpFactory(http: Http, injector: Injector, config: HttpConfig): HttpInterceptorService {
  return new HttpInterceptorService(http, injector, new URLRegExpInterceptorMatcher(), config.interceptors);
}

@NgModule({
  imports: [
    HttpModule,
  ],
})
export class CovalentHttpModule {
  static forRoot(config: HttpConfig = {interceptors: []}): ModuleWithProviders {
    return {
      ngModule: CovalentHttpModule,
      providers: [{
          provide: HTTP_CONFIG,
          useValue: config,
        }, {
          provide: HttpInterceptorService,
          useFactory: httpFactory,
          deps: [Http, Injector, HTTP_CONFIG],
        },
      ],
    };
  }
}

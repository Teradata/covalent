import { NgModule, ModuleWithProviders, Injector, InjectionToken, Provider } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { HttpInterceptorService, IHttpInterceptorConfig } from './interceptors/http-interceptor.service';
import { URLRegExpInterceptorMatcher } from './interceptors/url-regexp-interceptor-matcher.class';

export const HTTP_CONFIG: InjectionToken<HttpConfig> = new InjectionToken<HttpConfig>('HTTP_CONFIG');

export type HttpConfig = {interceptors: IHttpInterceptorConfig[]};

export function httpFactory(http: Http, injector: Injector, config: HttpConfig): HttpInterceptorService {
  return new HttpInterceptorService(http, injector, new URLRegExpInterceptorMatcher(), config.interceptors);
}

export const HTTP_INTERCEPTOR_PROVIDER: Provider = {
  provide: HttpInterceptorService,
  useFactory: httpFactory,
  deps: [Http, Injector, HTTP_CONFIG],
};

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
        },
        HTTP_INTERCEPTOR_PROVIDER,
      ],
    };
  }
}

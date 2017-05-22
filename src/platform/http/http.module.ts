import { NgModule, ModuleWithProviders, Injector, InjectionToken, Provider, SkipSelf, Optional } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { HttpInterceptorService, IHttpInterceptorConfig } from './interceptors/http-interceptor.service';
import { URLRegExpInterceptorMatcher } from './interceptors/url-regexp-interceptor-matcher.class';

export const HTTP_CONFIG: InjectionToken<HttpConfig> = new InjectionToken<HttpConfig>('HTTP_CONFIG');

export type HttpConfig = {interceptors: IHttpInterceptorConfig[]};

export function HTTP_INTERCEPTOR_PROVIDER_FACTORY(
  parent: HttpInterceptorService, http: Http, injector: Injector, config: HttpConfig): HttpInterceptorService {
  return parent || new HttpInterceptorService(http, injector, new URLRegExpInterceptorMatcher(), config.interceptors);
}

export const HTTP_INTERCEPTOR_PROVIDER: Provider = {
  // If there is already a service available, use that. Otherwise, provide a new one.
  provide: HttpInterceptorService,
  useFactory: HTTP_INTERCEPTOR_PROVIDER_FACTORY,
  deps: [[new Optional(), new SkipSelf(), HttpInterceptorService], Http, Injector, HTTP_CONFIG],
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

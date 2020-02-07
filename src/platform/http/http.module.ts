import { NgModule, ModuleWithProviders, Injector, InjectionToken, Provider } from '@angular/core';
import { HttpClientModule, HttpHandler } from '@angular/common/http';

import { InternalHttpService } from './actions/http.mixin';

import { TdHttpService, TdInterceptorBehaviorService, ITdHttpInterceptorConfig } from './interceptors/http.service';
import { TdURLRegExpInterceptorMatcher } from './interceptors/url-regexp-interceptor-matcher.class';

export const HTTP_CONFIG: InjectionToken<IHttpConfig> = new InjectionToken<IHttpConfig>('HTTP_CONFIG');

export interface IHttpConfig {
  interceptors: ITdHttpInterceptorConfig[];
}

export function httpFactory(handler: HttpHandler, injector: Injector, config: IHttpConfig): TdHttpService {
  return new TdHttpService(
    handler,
    new TdInterceptorBehaviorService(injector, new TdURLRegExpInterceptorMatcher(), config.interceptors),
  );
}

export const HTTP_INTERCEPTOR_PROVIDER: Provider = {
  provide: TdHttpService,
  useFactory: httpFactory,
  deps: [HttpHandler, Injector, HTTP_CONFIG],
};

@NgModule({
  imports: [HttpClientModule],
  providers: [InternalHttpService],
})
export class CovalentHttpModule {
  constructor(private _internalHttpService: InternalHttpService) {}

  static forRoot(config: IHttpConfig = { interceptors: [] }): ModuleWithProviders<CovalentHttpModule> {
    return {
      ngModule: CovalentHttpModule,
      providers: [
        {
          provide: HTTP_CONFIG,
          useValue: config,
        },
        HTTP_INTERCEPTOR_PROVIDER,
      ],
    };
  }
}

import { NgModule, ModuleWithProviders, Injector } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { HttpInterceptorService, IHttpInterceptorConfig } from './interceptors/http-interceptor.service';

@NgModule({
  imports: [
    HttpModule,
  ],
  providers: [
    HttpInterceptorService,
  ],
})
export class CovalentHttpModule {
  static forRoot(config: {inteceptors: IHttpInterceptorConfig[]} = {inteceptors: []}): ModuleWithProviders {
    let providers: any[] = [];
    config.inteceptors.forEach((configInterceptor: IHttpInterceptorConfig) => {
      providers.push(configInterceptor.interceptor);
    });
    providers.push({
      provide: HttpInterceptorService,
      useFactory: (http: Http, injector: Injector): HttpInterceptorService => {
        return new HttpInterceptorService(http, injector, config.inteceptors);
      },
      deps: [Http, Injector],
    });
    return {
      ngModule: CovalentHttpModule,
      providers: providers,
    };
  }
}

export { RESTService, IRestTransform, IRestConfig, IRestQuery, IHttp } from './http-rest.service';
export { IHttpInterceptor, HttpInterceptorService } from './http-interceptor.service';

import { HttpInterceptorService } from './http-interceptor.service';

import { NgModule, ModuleWithProviders, Type, Injector } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

@NgModule({
  imports: [
    HttpModule,
  ],
  providers: [
    HttpInterceptorService,
  ],
})
export class CovalentHttpModule {
  static forRoot(requestInterceptors: Type<any>[] = []): ModuleWithProviders {
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
    return {
      ngModule: CovalentHttpModule,
      providers: providers,
    };
  }
}

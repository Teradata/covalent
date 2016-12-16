import { RequestOptionsArgs } from '@angular/http';

import { IHttpInterceptorMapping } from './http-interceptor-mapping.interface';

export interface IHttpInterceptorMatcher {

  matches(options: RequestOptionsArgs, mapping: IHttpInterceptorMapping): boolean;

}

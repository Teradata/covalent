import { RequestOptionsArgs } from '@angular/http';

import { IHttpInterceptorMapping } from './http-interceptor-mapping.interface';

/**
 * Interface for http interceptor matchers.
 * Implement a class to set the behavior of how the interceptors are matched with the requests.
 */
export interface IHttpInterceptorMatcher {

  matches(options: RequestOptionsArgs, mapping: IHttpInterceptorMapping): boolean;

}

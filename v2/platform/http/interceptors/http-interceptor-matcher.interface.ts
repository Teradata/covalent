import { ITdHttpInterceptorMapping } from './http-interceptor-mapping.interface';

/**
 * Interface for http interceptor matchers.
 * Implement a class to set the behavior of how the interceptors are matched with the requests.
 */
export interface ITdHttpInterceptorMatcher {

  matches(request: {url: string}, mapping: ITdHttpInterceptorMapping): boolean;

}

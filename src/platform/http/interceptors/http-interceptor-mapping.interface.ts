import { ITdHttpInterceptor } from './http-interceptor.interface';

/**
 * Interface for http interceptor mappings.
 * Maps the interceptor with the desired interception rule.
 */
export interface ITdHttpInterceptorMapping {
  interceptor: ITdHttpInterceptor;
  paths: string[];
}

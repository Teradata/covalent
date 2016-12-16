import { IHttpInterceptor } from './http-interceptor.interface';

export interface IHttpInterceptorMapping {
  interceptor: IHttpInterceptor;
  paths: string[];
}
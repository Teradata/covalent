import { Observable } from 'rxjs';
import { ITdHttpRESTOptionsWithBody } from '../http.interfaces';

/**
 * Interface for http interceptors.
 * Implement the methods you want to be executed in the request pipeline on interception.
 */
export interface ITdHttpInterceptor {
  handleOptions?: (options: ITdHttpRESTOptionsWithBody) => ITdHttpRESTOptionsWithBody;
  handleResponse?: (observable: Observable<any>) => Observable<any>;
}

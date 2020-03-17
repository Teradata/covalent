import { RequestOptionsArgs, Response } from '@angular/http';

/**
 * Interface for http interceptors.
 * Implement the methods you want to be executed in the request pipeline on interception.
 */
export interface IHttpInterceptor {
  onRequest?: (requestOptions: RequestOptionsArgs) => RequestOptionsArgs;
  onRequestError?: (requestOptions: RequestOptionsArgs) => RequestOptionsArgs;
  onResponse?: (response: Response) => Response;
  onResponseError?: (error: Response) => Response;
}

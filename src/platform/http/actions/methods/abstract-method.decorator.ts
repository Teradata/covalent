import { HttpParams } from '@angular/common/http';

import { TdHttpMethod, ITdHttpRESTOptions, ITdHttpRESTOptionsWithBody } from '../../http.interfaces';
import { TdParamType, tdHttpRESTParam } from '../params/abstract-param.decorator';

import { Observable, of } from 'rxjs';

declare const Reflect: any;

export const NOOP_HTTP: Observable<any> = of(undefined);

/**
 * Method used to copy parameters from an array or HttpParams object
 * into a centrilized HttpParams object
 * @internal
 */
export function parseParams(target: HttpParams, source: HttpParams | {[key: string]: string | string[]}): HttpParams {
  let queryParams: HttpParams = target;
  if (source instanceof HttpParams) {
    source.keys().forEach((key: string) => {
      // skip if value is undefined
      if ((<HttpParams>source).get(key) !== undefined) {
        (<HttpParams>source).getAll(key).forEach((value: string, index: number) => {
          if (index === 0) {
            queryParams = queryParams.set(key, value);
          } else {
            queryParams = queryParams.append(key, value);
          }
        });
      }
    });
  } else {
    for (let key in source) {
      // skip if value is undefined
      if (<any>source[key] !== undefined) {
        if (source[key] instanceof Array) {
          (<string[]>source[key]).forEach((value: string, index: number) => {
            if (index === 0) {
              queryParams = queryParams.set(key, value);
            } else {
              queryParams = queryParams.append(key, value);
            }
          });
        } else {
          queryParams = queryParams.set(key, <any>source[key]);
        }
      }
    }
  }
  return queryParams;
}

/**
 * Abstract implementation of the http method decorator
 * @internal
 */
export function TdAbstractMethod(config: {
  method: TdHttpMethod,
  path: string,
  options?: ITdHttpRESTOptions,
}): Function {
  return function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>): any {
    let wrappedFunction: Function = descriptor.value;
    // replace method call with our own and proxy it
    descriptor.value = function (): any {
      try {
        let replacedPath: string = config.path;
        let parameters: { index: number, param: string, type: TdParamType }[] = Reflect.getOwnMetadata(tdHttpRESTParam, target, propertyName);
        let newArgs: any[] = [];
        let body: any;
        let queryParams: HttpParams = new HttpParams();
        if (parameters) {
          // map parameters and see which type they are to act on them
          for (let parameter of parameters) {
            if (parameter.type === 'param') {
              newArgs[parameter.index] = arguments[parameter.index];
              replacedPath = replacedPath.replace(':' + parameter.param, arguments[parameter.index]);
            } else if (parameter.type === 'body') {
              newArgs[parameter.index] = arguments[parameter.index];
              body = arguments[parameter.index];
            } else if (parameter.type === 'queryParams') {
              newArgs[parameter.index] = arguments[parameter.index];
              let qParams: HttpParams | {[key: string]: string | string[]} = arguments[parameter.index];
              if (config.options && config.options.params) {
                queryParams = parseParams(queryParams, config.options.params);
              }
              if (qParams) {
                queryParams = parseParams(queryParams, qParams);
              }
            }
          }
        }
        // tslint:disable-next-line
        let url: string = this.baseUrl + replacedPath;
        let options: ITdHttpRESTOptionsWithBody = Object.assign({}, config.options, {
          body: body,
          params: queryParams,
        });
        // tslint:disable-next-line
        let request: any = this.buildRequest(config.method, url, options);
        if (parameters) {
          // see which one was the response parameter so we can set the request observable
          for (let parameter of parameters) {
            if (parameter.type === 'response') {
              newArgs[parameter.index] = request;
            }
          }
        }
        // tslint:disable-next-line
        let response: any = wrappedFunction.apply(this, newArgs);
        // if the response is NOOP_HTTP or undefined, then we return the request as it is
        // else we return the response from the inner function
        if (response === NOOP_HTTP || response === undefined) {
          return request;
        } else {
          return response;
        }
      } catch (error) {
        // tslint:disable-next-line
        console.error(error);
      }
    };
  };
}

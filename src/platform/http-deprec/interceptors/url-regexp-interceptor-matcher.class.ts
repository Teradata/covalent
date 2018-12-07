import { RequestOptionsArgs } from '@angular/http';

import { IHttpInterceptorMapping } from './http-interceptor-mapping.interface';
import { IHttpInterceptorMatcher } from './http-interceptor-matcher.interface';

/**
 * Concrete implementation for http interceptor matchers.
 * This implementation uses regex to check mapping paths vs request url.
 */
export class URLRegExpInterceptorMatcher implements IHttpInterceptorMatcher {

  matches(options: RequestOptionsArgs, mapping: IHttpInterceptorMapping): boolean {
    return mapping.paths.filter((path: string) => {
      path = path.replace(/\*\*/gi, '<>')
                .replace(/\*/gi, '[a-zA-Z0-9\\-_]+')
                .replace(/<>/gi, '[a-zA-Z0-9\\-_\/]*');
      if (path) {
        path += '(\\?{1}.*)?$';
        return new RegExp(path).test(options.url);
      }
      return false;
    }).length > 0;
  }

}

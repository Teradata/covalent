import { RequestOptionsArgs } from '@angular/http';

import { IHttpInterceptorMapping } from './http-interceptor-mapping.interface';
import { IHttpInterceptorMatcher } from './http-interceptor-matcher.interface';

export class URLRegExpInterceptorMatcher implements IHttpInterceptorMatcher {

  matches(options: RequestOptionsArgs, mapping: IHttpInterceptorMapping): boolean {
    return mapping.paths.filter((path: string) => {
      path = path.replace(/\*\*/gi, '<>')
                .replace(/\*/gi, '[a-zA-Z0-9\\-_]+')
                .replace(/<>/gi, '[a-zA-Z0-9\\-_\/]*');
      return new RegExp(path + '(\\?{1}.*)?$').test(options.url);
    }).length > 0;
  }

}

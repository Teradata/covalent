import { ITdHttpInterceptorMapping } from './http-interceptor-mapping.interface';
import { ITdHttpInterceptorMatcher } from './http-interceptor-matcher.interface';

/**
 * Concrete implementation for http interceptor matchers.
 * This implementation uses regex to check mapping paths vs request url.
 */
export class TdURLRegExpInterceptorMatcher implements ITdHttpInterceptorMatcher {
  matches(options: { url: string }, mapping: ITdHttpInterceptorMapping): boolean {
    return (
      mapping.paths.filter((path: string) => {
        path = path
          .replace(/\*\*/gi, '<>')
          .replace(/\*/gi, '[^/?]+')
          .replace(/<>/gi, '[^?]*');
        if (path) {
          path += '(\\?{1}.*)?$';
          return new RegExp(path).test(options.url);
        }
        return false;
      }).length > 0
    );
  }
}

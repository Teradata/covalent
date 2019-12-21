import { TdAbstractParam } from './abstract-param.decorator';

/**
 * Decorator that is used to define which parameter is the http query parameters in a method
 */
export function TdQueryParams(): (target: object, propertyKey: string | symbol, parameterIndex: number) => void {
  return TdAbstractParam('queryParams');
}

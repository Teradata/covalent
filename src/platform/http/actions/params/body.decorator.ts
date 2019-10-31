import { TdAbstractParam } from './abstract-param.decorator';

/**
 * Decorator that is used to define which parameter is the http body in a method
 */
export function TdBody(): (target: object, propertyKey: string | symbol, parameterIndex: number) => void {
  return TdAbstractParam('body');
}

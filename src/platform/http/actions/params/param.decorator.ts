import { TdAbstractParam } from './abstract-param.decorator';

/**
 * Decorator that is used to define which parameter is an http parameter in a method
 */
export function TdParam(param: string): (target: object, propertyKey: string | symbol, parameterIndex: number) => void {
  return TdAbstractParam('param', param);
}

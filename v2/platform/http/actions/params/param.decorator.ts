import { TdAbstractParam } from './abstract-param.decorator';

/**
 * Decorator that is used to define which parameter is an http parameter in a method
 */
export function TdParam(param: string): Function {
  return TdAbstractParam('param', param);
}

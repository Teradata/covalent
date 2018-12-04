import { TdAbstractParam } from './abstract-param.decorator';

/**
 * Decorator that is used to define which parameter is the http body in a method
 */
export function TdBody(): Function {
  return TdAbstractParam('body');
}

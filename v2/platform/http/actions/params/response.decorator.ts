import { TdAbstractParam } from './abstract-param.decorator';

/**
 * Decorator that is used to define which parameter is the http response in a method
 */
export function TdResponse(): Function {
  return TdAbstractParam('response');
}

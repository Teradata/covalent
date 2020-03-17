import { ITdHttpRESTOptions } from '../../';
import { TdAbstractMethod } from './abstract-method.decorator';

/**
 * Decorator that adds GET request capabilities to a method
 */
export function TdGET(config: {
  path: string,
  options?: ITdHttpRESTOptions,
}): Function {
  return TdAbstractMethod(<any>Object.assign({
    method: 'GET',
  }, config));
}

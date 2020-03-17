import { ITdHttpRESTOptions } from '../../';
import { TdAbstractMethod } from './abstract-method.decorator';

/**
 * Decorator that adds PUT request capabilities to a method
 */
export function TdPUT(config: {
  path: string,
  options?: ITdHttpRESTOptions,
}): Function {
  return TdAbstractMethod(<any>Object.assign({
    method: 'PUT',
  }, config));
}

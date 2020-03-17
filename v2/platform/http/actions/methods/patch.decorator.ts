import { ITdHttpRESTOptions } from '../../';
import { TdAbstractMethod } from './abstract-method.decorator';

/**
 * Decorator that adds PATCH request capabilities to a method
 */
export function TdPATCH(config: {
  path: string,
  options?: ITdHttpRESTOptions,
}): Function {
  return TdAbstractMethod(<any>Object.assign({
    method: 'PATCH',
  }, config));
}

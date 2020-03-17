import { ITdHttpRESTOptions } from '../../';
import { TdAbstractMethod } from './abstract-method.decorator';

/**
 * Decorator that adds POST request capabilities to a method
 */
export function TdPOST(config: {
  path: string,
  options?: ITdHttpRESTOptions,
}): Function {
  return TdAbstractMethod(<any>Object.assign({
    method: 'POST',
  }, config));
}

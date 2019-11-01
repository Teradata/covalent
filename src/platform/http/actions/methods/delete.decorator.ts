import { ITdHttpRESTOptions } from '../../';
import { TdAbstractMethod } from './abstract-method.decorator';

/**
 * Decorator that adds DELETE request capabilities to a method
 */
export function TdDELETE(config: {
  path: string;
  options?: ITdHttpRESTOptions;
}): (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<() => any>) => any {
  return TdAbstractMethod(<any>Object.assign(
    {
      method: 'DELETE',
    },
    config,
  ));
}

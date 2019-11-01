import { ITdHttpRESTOptions } from '../../';
import { TdAbstractMethod } from './abstract-method.decorator';

/**
 * Decorator that adds PUT request capabilities to a method
 */
export function TdPUT(config: {
  path: string;
  options?: ITdHttpRESTOptions;
}): (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<() => any>) => any {
  return TdAbstractMethod(<any>Object.assign(
    {
      method: 'PUT',
    },
    config,
  ));
}

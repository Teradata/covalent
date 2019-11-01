import { ITdHttpRESTOptions } from '../../';
import { TdAbstractMethod } from './abstract-method.decorator';

/**
 * Decorator that adds PATCH request capabilities to a method
 */
export function TdPATCH(config: {
  path: string;
  options?: ITdHttpRESTOptions;
}): (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<() => any>) => any {
  return TdAbstractMethod(<any>Object.assign(
    {
      method: 'PATCH',
    },
    config,
  ));
}

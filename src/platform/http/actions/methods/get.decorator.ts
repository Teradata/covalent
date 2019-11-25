import { ITdHttpRESTOptions } from '../../';
import { TdAbstractMethod } from './abstract-method.decorator';

/**
 * Decorator that adds GET request capabilities to a method
 */
export function TdGET(config: {
  path: string;
  options?: ITdHttpRESTOptions;
}): (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) => any {
  return TdAbstractMethod(
    <any>Object.assign(
      {
        method: 'GET',
      },
      config,
    ),
  );
}

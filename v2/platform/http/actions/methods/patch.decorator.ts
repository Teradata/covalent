import { ITdHttpRESTOptions } from '../../';
import { TdAbstractMethod } from './abstract-method.decorator';

/**
 * Decorator that adds PATCH request capabilities to a method
 */
export function TdPATCH(config: {
  path: string;
  options?: ITdHttpRESTOptions;
}): (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) => any {
  return TdAbstractMethod(
    <any>Object.assign(
      {
        method: 'PATCH',
      },
      config,
    ),
  );
}

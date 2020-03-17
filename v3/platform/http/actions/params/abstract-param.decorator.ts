declare const Reflect: any;
export type TdParamType = 'param' | 'response' | 'body' | 'queryParams';

export const tdHttpRESTParam: symbol = Symbol('TdHttpRESTParam');

/**
 * Abstract implementation of the http param decorator
 * @internal
 */
export function TdAbstractParam(
  type: TdParamType,
  param?: string,
): (target: object, propertyKey: string | symbol, parameterIndex: number) => void {
  return function(target: object, propertyKey: string | symbol, parameterIndex: number): void {
    const parameters: { index: number; param: string; type: TdParamType }[] =
      Reflect.getOwnMetadata(tdHttpRESTParam, target, propertyKey) || [];
    parameters.push({
      index: parameterIndex,
      param,
      type,
    });
    Reflect.defineMetadata(tdHttpRESTParam, parameters, target, propertyKey);
  };
}

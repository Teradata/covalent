declare const Reflect: any;
export type TdParamType = 'param' | 'response' | 'body' | 'queryParams';

export const tdHttpRESTParam: Symbol = Symbol('TdHttpRESTParam');

/**
 * Abstract implementation of the http param decorator
 * @internal
 */
export function TdAbstractParam(type: TdParamType, param?: string): Function {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number): void {
    let parameters: { index: number, param: string, type: TdParamType }[] = Reflect.getOwnMetadata(tdHttpRESTParam, target, propertyKey) || [];
    parameters.push({
      index: parameterIndex,
      param: param,
      type: type,
    });
    Reflect.defineMetadata(tdHttpRESTParam, parameters, target, propertyKey);
  };
}

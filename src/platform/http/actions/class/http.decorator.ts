import { mixinHttp, ITdHttpRESTConfig } from '../http.mixin';

/**
 * Decorator used to give a service http capabilities
 */
export function TdHttp(config: ITdHttpRESTConfig): Function {
  return function <T extends { new(...args: any[]): {} }>(constructor: any): any {
    return class extends mixinHttp(constructor, config) {
     
    };
  };
}

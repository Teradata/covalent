import { HttpClient } from '@angular/common/http';

import { mixinHttp, ITdHttpRESTConfig } from '../http.mixin';

import { TdHttpService } from '../../interceptors/http.service';

/**
 * Decorator used to give a service http capabilities using TdHttpService
 */
export function TdHttp(config: ITdHttpRESTConfig): Function {
  return function <T extends { new(...args: any[]): {} }>(constructor: any): any {
    return class extends mixinHttp(constructor, config, TdHttpService) {
     
    };
  };
}

/**
 * Decorator used to give a service http capabilities using HttpClient
 */
export function TdHttpClient(config: ITdHttpRESTConfig): Function {
  return function <T extends { new(...args: any[]): {} }>(constructor: any): any {
    return class extends mixinHttp(constructor, config, HttpClient) {
     
    };
  };
}

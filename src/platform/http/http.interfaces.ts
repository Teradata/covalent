import { HttpParams, HttpHeaders } from '@angular/common/http';

export type TdHttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'HEAD' | 'PUT' | 'OPTIONS';

export type TdHttpRESTResponseType = 'arraybuffer' | 'blob' | 'json' | 'text';

export type TdHttpRESTObserve = 'body' | 'response' | 'events';

export interface ITdHttpRESTOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: TdHttpRESTObserve;
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  responseType?: TdHttpRESTResponseType;
  reportProgress?: boolean;
  withCredentials?: boolean;
}

export interface ITdHttpRESTOptionsWithBody extends ITdHttpRESTOptions {
  body?: any;
}

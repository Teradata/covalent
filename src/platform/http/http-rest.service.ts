import { Headers, RequestOptionsArgs, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { map } from 'rxjs/operator/map';
import { _catch } from 'rxjs/operator/catch';

export interface IRestTransform {
  (response: Response): any;
}

export interface IRestConfig {
  baseHeaders?: Headers;
  dynamicHeaders?: () => Headers;
  baseUrl: string;
  path?: string;
  transform?: IRestTransform;
}

export interface IRestQuery {
  [key: string]: any;
}

export interface IHttp {
  delete: (url: string, options?: RequestOptionsArgs) => Observable<Response>;
  get: (url: string, options?: RequestOptionsArgs) => Observable<Response>;
  head: (url: string, options?: RequestOptionsArgs) => Observable<Response>;
  patch: (url: string, body: any, options?: RequestOptionsArgs) => Observable<Response>;
  post: (url: string, body: any, options?: RequestOptionsArgs) => Observable<Response>;
  put: (url: string, body: any, options?: RequestOptionsArgs) => Observable<Response>;
  request: (url: string | Request, options?: RequestOptionsArgs) => Observable<Response>;
}

export abstract class RESTService<T> {

  private _path: string;
  private _base: string;
  private _baseHeaders: Headers;
  private _dynamicHeaders: () => Headers;

  protected transform: IRestTransform;
  protected http: IHttp;

  constructor(http: IHttp, config: IRestConfig) {
    this.http = http;
    this._base = config.baseUrl.replace(/\/$/, '');
    this._path = config.path.replace(/^\//, '');
    this._baseHeaders = config.baseHeaders ? config.baseHeaders : new Headers();
    this._dynamicHeaders = config.dynamicHeaders ? config.dynamicHeaders : () => new Headers();
    this.transform = config.transform ? config.transform : (response: Response): any => response.json();
  }

  public query(query?: IRestQuery, transform?: IRestTransform): Observable<any> {
    let request: Observable<Response> = this.http.get(this.buildUrl(undefined, query), this.buildRequestOptions());
    return _catch.call(map.call(request, (res: Response) => {
      if (transform) {
        return transform(res);
      }
      return this.transform(res);
    }), (error: Response) => {
      return new Observable<any>((subscriber: Subscriber<any>) => {
        try {
          subscriber.error(this.transform(error));
        } catch (err) {
          subscriber.error(error);
        }
      });
    });
  }

  public get(id: string | number, transform?: IRestTransform): Observable<any> {
    let request: Observable<Response> = this.http.get(this.buildUrl(id), this.buildRequestOptions());
    return _catch.call(map.call(request, (res: Response) => {
      if (transform) {
        return transform(res);
      }
      return this.transform(res);
    }), (error: Response) => {
      return new Observable<any>((subscriber: Subscriber<any>) => {
        try {
          subscriber.error(this.transform(error));
        } catch (err) {
          subscriber.error(error);
        }
      });
    });
  }

  public create(obj: T, transform?: IRestTransform): Observable<any> {
    let requestOptions: RequestOptionsArgs = this.buildRequestOptions();
    let request: Observable<Response> = this.http.post(this.buildUrl(), obj, requestOptions);
    return _catch.call(map.call(request, (res: Response) => {
      if (res.status === 201) {
        if (transform) {
          return transform(res);
        }
        return this.transform(res);
      } else {
        return res;
      }
    }), (error: Response) => {
      return new Observable<any>((subscriber: Subscriber<any>) => {
        try {
          subscriber.error(this.transform(error));
        } catch (err) {
          subscriber.error(error);
        }
      });
    });
  }

  public update(id: string | number, obj: T, transform?: IRestTransform): Observable<any> {
    let requestOptions: RequestOptionsArgs = this.buildRequestOptions();
    let request: Observable<Response> = this.http.patch(this.buildUrl(id), obj, requestOptions);
    return _catch.call(map.call(request, (res: Response) => {
      if (res.status === 200) {
        if (transform) {
          return transform(res);
        }
        return this.transform(res);
      } else {
        return res;
      }
    }), (error: Response) => {
      return new Observable<any>((subscriber: Subscriber<any>) => {
        try {
          subscriber.error(this.transform(error));
        } catch (err) {
          subscriber.error(error);
        }
      });
    });
  }

  public delete(id: string | number, transform?: IRestTransform): Observable<any> {
    let request: Observable<Response> = this.http.delete(this.buildUrl(id), this.buildRequestOptions());
    return _catch.call(map.call(request, (res: Response) => {
      if (res.status === 200) {
        if (transform) {
          return transform(res);
        }
        return this.transform(res);
      } else {
        return res;
      }
    }), (error: Response) => {
      return new Observable<any>((subscriber: Subscriber<any>) => {
        try {
          subscriber.error(this.transform(error));
        } catch (err) {
          subscriber.error(error);
        }
      });
    });
  }

  protected buildRequestOptions(): RequestOptionsArgs {
    let requestHeaders: Headers = new Headers();
    this._baseHeaders.forEach((value: string[], key: string) => {
      requestHeaders.set(key, value);
    });
    this._dynamicHeaders().forEach((value: string[], key: string) => {
      requestHeaders.set(key, value);
    });
    let requestOptions: RequestOptionsArgs = {
      headers: requestHeaders,
    };
    return requestOptions;
  }

  protected buildUrl(id?: string | number, query?: IRestQuery): string {
    let url: string = this._path ? this._path : '';
    if (id) {
      url += `/${id}`;
    }
    if (query) {
      url += this.buildQuery(query);
    }
    url = `${this._base}/${url}`;
    return url;
  }

  protected buildQuery(query: IRestQuery): string {
    let url: string = '';
    if (query) {
      url += '?';
      let params: string[] = [];
      for (let key in query) {
        let value: string | number | boolean = query[key];
        if (value !== undefined) {
          params.push(`${key}=${value}`);
        }
      }
      url += params.join('&');
    }
    return url;
  }
}

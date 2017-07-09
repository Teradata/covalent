import {
  TestBed,
  inject,
  async,
} from '@angular/core/testing';
import { Injector, Injectable, Type } from '@angular/core';
import { Headers, XHRBackend, Response, ResponseOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http } from '@angular/http';
import { HttpInterceptorService, HttpConfig, CovalentHttpModule, IHttpInterceptor } from '../';
import { URLRegExpInterceptorMatcher } from './url-regexp-interceptor-matcher.class';
import { map } from 'rxjs/operator/map';
import { toPromise } from 'rxjs/operator/toPromise';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class ResponseOverrideInterceptor {

  onResponse(response: Response): Response {
    return new Response(new ResponseOptions({body: JSON.stringify('override'), status: 200}));
  }
}

@Injectable()
export class RequestAuthInterceptor {
  onRequest(request: RequestOptionsArgs): RequestOptionsArgs {
    if (!request.headers) {
      request.headers = new Headers();
    }
    request.headers.set('auth', 'test-auth');
    return request;
  }
}

@Injectable()
export class RequestFailureInterceptor {
  onRequest(request: RequestOptionsArgs): RequestOptionsArgs {
    throw new Error('error');
  }
}

@Injectable()
export class RequestRecoveryInterceptor {
  onRequest(request: RequestOptionsArgs): RequestOptionsArgs {
    throw new Error('error');
  }

  onRequestError(request: RequestOptionsArgs): RequestOptionsArgs {
    if (!request.headers) {
      request.headers = new Headers();
    }
    request.headers.set('recovered', 'yes');
    return request;
  }

  onResponse(response: Response): Response {
    return new Response(new ResponseOptions({body: JSON.stringify('recovered'), status: 200}));
  }
}

describe('Service: HttpInterceptor', () => {

  let config: HttpConfig = {
    interceptors: [{
      interceptor: ResponseOverrideInterceptor, paths: ['/url**'],
    }, {
      interceptor: RequestAuthInterceptor, paths: ['**'],
    }, {
      interceptor: RequestFailureInterceptor, paths: ['/error'],
    }, {
      interceptor: RequestRecoveryInterceptor, paths: ['/recovery/*/fromerror'],
    }],
  };

  const httpInterceptorProviders: Type<IHttpInterceptor>[] = [
    ResponseOverrideInterceptor,
    RequestAuthInterceptor,
    RequestFailureInterceptor,
    RequestRecoveryInterceptor,
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentHttpModule.forRoot(config),
      ],
      providers: [
        MockBackend, {
          provide: XHRBackend,
          useExisting: MockBackend,
        },
        httpInterceptorProviders,
      ],
    });
  }));

  it('expect to intercept only the route with `/recovery/*/fromerror` and recover from a failure',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        if (connection.request.url === 'http://www.test.com/recovery/id/fromerror') {
          expect(connection.request.headers.get('recovered')).toBe('yes', 'did not execute onRequestError when failed');
        } else {
          expect(connection.request.headers.get('recovered'))
          .toBeNull('did execute onRequestError when failed when it shouldnt');
        }
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });

      map.call(service.patch('http://www.test.com/recovery/id/id2/fromerror', {}),
        (res: Response) => res.json()).subscribe((data: string) => {
          expect(data).toBe('success', '/error/*/fromerror was intercepted');
        });

      map.call(service.patch('http://www.test.com/recovery/id/fromerror', {}),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('recovered', '/error/*/fromerror was not intercepted');
      });
    }),
  ));

  it('expect to intercept only the route with `/error` and fail',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });

      map.call(service.patch('http://www.test.com/error', {}),
        (res: Response) => res.json()).subscribe((data: string) => {
          expect(data).toBeUndefined('/error was not intercepted so request didnt fail');
        }, (error: Error) => {
          expect(error.message).toBe('error');
        });
    }),
  ));

  it('expect to intercept all routes and add an `auth=test-auth` header',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.headers.get('auth')).toBe('test-auth', 'didnt add `auth` header on all routes');
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });

      map.call(service.post('http://www.test.com/url/with/any-path/another-path?query=1&query=2', {}),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      map.call(service.post('http://www.test.com/any_path?query=1&query=2', {}),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      map.call(service.get('http://www.test.com/url/any-path/111'),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      map.call(service.get('http://www.test.com/anypath/url'),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      map.call(service.delete('http://www.test.com/any_path?', {}),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      map.call(service.delete('http://www.test.com', {}),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      map.call(service.patch('http://www.test.com/any_path/111/url/another_path', {}),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      map.call(service.patch('http://www.test.com/any-path/111/another_path/', {}),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });
    }),
  ));

  it('expect to intercept routes that contain `/url` in them and override responses body with `override`',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });

      map.call(service.post('http://www.test.com/url/with/any-path/another-path?query=1&query=2', {}),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('override', 'didnt intercept url with `/url`');
      });

      map.call(service.post('http://www.test.com/any_path?query=1&query=2', {}),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('success', 'intercepted url without `/url`');
      });

      map.call(service.get('http://www.test.com/url/any-path/111'),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('override', 'didnt intercept url with `/url`');
      });

      map.call(service.get('http://www.test.com/anypath/url'),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('override', 'didnt intercept url with `/url`');
      });

      map.call(service.delete('http://www.test.com/any_path?', {}),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('success', 'intercepted url without `/url`');
      });

      map.call(service.delete('http://www.test.com', {}),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('success', 'intercepted url without `/url`');
      });

      map.call(service.patch('http://www.test.com/any_path/111/url/another_path', {}),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('override', 'didnt intercept url with `/url`');
      });

      map.call(service.patch('http://www.test.com/any-path/111/another_path/', {}),
      (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('success', 'intercepted url without `/url`');
      });
    }),
  ));

});

describe('Service: HttpInterceptor', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        MockBackend, {
          provide: XHRBackend,
          useExisting: MockBackend,
        }, {
          provide: HttpInterceptorService,
          useFactory: (http: Http, injector: Injector): HttpInterceptorService => {
            return new HttpInterceptorService(http, injector, new URLRegExpInterceptorMatcher(), []);
          },
          deps: [Http, Injector],
        },
      ],
    });
  }));

  it('expect to do a forkJoin get succesfully with observables',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;

      forkJoin(
        service.get('testurl'),
        service.get('testurl'))
      .subscribe((response: Response[]) => {
        success = true;
      }, () => {
        error = true;
      }, () => {
        complete = true;
      });

      expect(success).toBe(true, 'on success didnt execute with observables');
      expect(error).toBe(false, 'on error executed when it shouldnt have with observables');
      expect(complete).toBe(true, 'on complete didnt execute with observables');
    }),
  ));

  it('expect to do a post succesfully with observables',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      map.call(service.post('testurl', {}), (res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('success');
        success = true;
      }, () => {
        error = true;
      }, () => {
        complete = true;
      });
      expect(success).toBe(true, 'on success didnt execute with observables');
      expect(error).toBe(false, 'on error executed when it shouldnt have with observables');
      expect(complete).toBe(true, 'on complete didnt execute with observables');
    }),
  ));

  it('expect to do a post failure with observables',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockError(new Error('error'));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      map.call(service.post('testurl', {}), (res: Response) => res.json()).subscribe(() => {
        success = true;
      }, (err: Error) => {
        expect(err.message).toBe('error');
        error = true;
      }, () => {
        complete = true;
      });
      expect(success).toBe(false, 'on success execute when it shouldnt have with observables');
      expect(error).toBe(true, 'on error didnt execute with observables');
      expect(complete).toBe(false, 'on complete execute when it shouldnt have with observables');
    }),
  ));

  it('expect to do a post succesfully with promises',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      toPromise.call(map.call(service.post('testurl', {}), (res: Response) => res.json())).then((data: string) => {
        expect(data).toBe('success');
        success = true;
      }, () => {
        error = true;
      });
      setTimeout(() => {
        expect(success).toBe(true, 'on success didnt execute with promises');
        expect(error).toBe(false, 'on error executed when it shouldnt have with promises');
      });
    }),
  ));

  it('expect to do a post failure with promises',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockError(new Error('error'));
      });
      let success: boolean = false;
      let error: boolean = false;
      toPromise.call(map.call(service.post('testurl', {}), (res: Response) => res.json())).then(() => {
        success = true;
      }, (err: Error) => {
        expect(err.message).toBe('error');
        error = true;
      });
      setTimeout(() => {
        expect(success).toBe(false, 'on success execute when it shouldnt have with promises');
        expect(error).toBe(true, 'on error didnt execute with promises');
      });
    }),
  ));
});

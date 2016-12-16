import {
  TestBed,
  inject,
  async,
} from '@angular/core/testing';
import { Injector, Injectable } from '@angular/core';
import { Headers, XHRBackend, Response, ResponseOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http } from '@angular/http';
import { HttpInterceptorService, IHttpInterceptorConfig } from './http-interceptor.service';
import { URLRegExpInterceptorMatcher } from './url-regexp-interceptor-matcher.class';
import 'rxjs/Rx';

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

describe('Service: HttpInterceptor', () => {

  let config: IHttpInterceptorConfig[] = [{
    interceptor: ResponseOverrideInterceptor, paths: ['/url**'],
  }, {
    interceptor: RequestAuthInterceptor, paths: ['**'],
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        ResponseOverrideInterceptor,
        RequestAuthInterceptor,
        MockBackend, {
          provide: XHRBackend,
          useExisting: MockBackend,
        }, {
          provide: HttpInterceptorService,
          useFactory: (http: Http, injector: Injector): HttpInterceptorService => {
            return new HttpInterceptorService(http, injector, new URLRegExpInterceptorMatcher(), config);
          },
          deps: [Http, Injector],
        },
      ],
    });
  }));

  it('expect to intercept all routes and add an `auth=test-auth` header',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.headers.get('auth')).toBe('test-auth', 'didnt add `auth` header on all routes');
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')}
        )));
      });

      service.post('http://www.test.com/url/with/any-path/another-path?query=1&query=2', {})
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      service.post('http://www.test.com/any_path?query=1&query=2', {})
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      service.get('http://www.test.com/url/any-path/111')
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      service.get('http://www.test.com/anypath/url')
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      service.delete('http://www.test.com/any_path?', {})
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      service.delete('http://www.test.com', {})
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      service.patch('http://www.test.com/any_path/111/url/another_path', {})
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      service.patch('http://www.test.com/any-path/111/another_path/', {})
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });
    })
  ));

  it('expect to intercept routes that contain `/url` in them and override responses body with `override`',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')}
        )));
      });

      service.post('http://www.test.com/url/with/any-path/another-path?query=1&query=2', {})
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('override', 'didnt intercept url with `/url`');
      });

      service.post('http://www.test.com/any_path?query=1&query=2', {})
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('success', 'intercepted url without `/url`');
      });

      service.get('http://www.test.com/url/any-path/111')
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('override', 'didnt intercept url with `/url`');
      });

      service.get('http://www.test.com/anypath/url')
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('override', 'didnt intercept url with `/url`');
      });

      service.delete('http://www.test.com/any_path?', {})
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('success', 'intercepted url without `/url`');
      });

      service.delete('http://www.test.com', {})
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('success', 'intercepted url without `/url`');
      });

      service.patch('http://www.test.com/any_path/111/url/another_path', {})
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('override', 'didnt intercept url with `/url`');
      });

      service.patch('http://www.test.com/any-path/111/another_path/', {})
      .map((res: Response) => res.json()).subscribe((data: string) => {
        expect(data).toBe('success', 'intercepted url without `/url`');
      });
    })
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
            body: JSON.stringify('success')}
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;

      Observable.forkJoin(
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
    })
  ));

  it('expect to do a post succesfully with observables',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')}
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.post('testurl', {}).map((res: Response) => res.json()).subscribe((data: string) => {
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
    })
  ));

  it('expect to do a post failure with observables',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockError(new Error('error'));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.post('testurl', {}).map((res: Response) => res.json()).subscribe(() => {
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
    })
  ));

  it('expect to do a post succesfully with promises',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')}
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      service.post('testurl', {}).map((res: Response) => res.json()).toPromise().then((data: string) => {
        expect(data).toBe('success');
        success = true;
      }, () => {
        error = true;
      });
      setTimeout(() => {
        expect(success).toBe(true, 'on success didnt execute with promises');
        expect(error).toBe(false, 'on error executed when it shouldnt have with promises');
      });
    })
  ));

  it('expect to do a post failure with promises',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockError(new Error('error'));
      });
      let success: boolean = false;
      let error: boolean = false;
      service.post('testurl', {}).map((res: Response) => res.json()).toPromise().then(() => {
        success = true;
      }, (err: Error) => {
        expect(err.message).toBe('error');
        error = true;
      });
      setTimeout(() => {
        expect(success).toBe(false, 'on success execute when it shouldnt have with promises');
        expect(error).toBe(true, 'on error didnt execute with promises');
      });
    })
  ));
});

import {
  TestBed,
  inject,
  async,
} from '@angular/core/testing';
import { Injectable, Type } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpRequest, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { TdHttpService, HttpConfig, CovalentHttpModule, ITdHttpInterceptor, ITdHttpRESTOptionsWithBody } from '../';

@Injectable()
export class ResponseOverrideInterceptor implements ITdHttpInterceptor {

  handleResponse(obs: Observable<any>): Observable<any> {
    return obs.pipe(
      map((response: HttpResponse<any>) => {
        return new HttpResponse({body: 'override', status: 200});
      }),
    );
  }
}

@Injectable()
export class RequestAuthInterceptor implements ITdHttpInterceptor {
  handleOptions(options: ITdHttpRESTOptionsWithBody): ITdHttpRESTOptionsWithBody {
    if (!options.headers) {
      options.headers = new HttpHeaders();
    }
    if (options.headers instanceof HttpHeaders) {
      options.headers = options.headers.set('auth', 'test-auth');
    } else if (options.headers instanceof Array) {
      options.headers.push('auth', 'test-auth');
    }
    return options;
  }
}

@Injectable()
export class RequestFailureInterceptor implements ITdHttpInterceptor {
  handleOptions(request: ITdHttpRESTOptionsWithBody): ITdHttpRESTOptionsWithBody {
    throw new HttpErrorResponse({error: 'error'});
  }
}

@Injectable()
export class RequestRecoveryInterceptor implements ITdHttpInterceptor {
  handleOptions(options: ITdHttpRESTOptionsWithBody): ITdHttpRESTOptionsWithBody {
    try {
      throw new Error('error');
    } catch (e) {
      if (!options.headers) {
        options.headers = new HttpHeaders();
      }
      if (options.headers instanceof HttpHeaders) {
        options.headers = options.headers.set('recovered', 'yes');
      } else if (options.headers instanceof Array) {
        options.headers.push('recovered', 'yes');
      }
    }
    return options;
  }

  handleResponse(obs: Observable<any>): Observable<any> {
    return obs.pipe(
      map((response: HttpResponse<any>) => {
        return new HttpResponse({body: 'recovered', status: 200});
      }),
    );
  }
}

describe('Service: Http', () => {

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

  const httpInterceptorProviders: Type<ITdHttpInterceptor>[] = [
    ResponseOverrideInterceptor,
    RequestAuthInterceptor,
    RequestFailureInterceptor,
    RequestRecoveryInterceptor,
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentHttpModule.forRoot(config),
        HttpClientTestingModule,
      ],
      providers: [
        httpInterceptorProviders,
      ],
    });
  }));

  it('expect to intercept only the route with `/error` and fail',
    async(inject([TdHttpService, HttpTestingController],
                (service: TdHttpService, httpTestingController: HttpTestingController) => {
      let testUrl: string = 'http://www.test.com/error';

      service.patch(testUrl, {}).subscribe((data: string) => {
        expect(data).toBeUndefined('/error was not intercepted so request didnt fail');
      }, (e: HttpErrorResponse) => {
        expect(e.error).toBe('error');
      });
    }),
  ));

  it('expect to intercept all routes and add an `auth=test-auth` header',
    async(inject([TdHttpService, HttpTestingController],
                  (service: TdHttpService, httpTestingController: HttpTestingController) => {
      service.post('http://www.test.com/url/with/any-path/another-path?query=1&query=2', {observe: 'body'}).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      service.post('http://www.test.com/any_path?query=1&query=2', {observe: 'body'}).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      service.get('http://www.test.com/url/any-path/111', {observe: 'body'}).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      service.get('http://www.test.com/anypath/url', {observe: 'body'}).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      service.delete('http://www.test.com/any_path?', {observe: 'body'}).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      service.delete('http://www.test.com', {observe: 'body'}).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      service.patch('http://www.test.com/any_path/111/url/another_path', {}, {observe: 'body'}).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      service.patch('http://www.test.com/any-path/111/another_path/', {}, {observe: 'body'}).subscribe((data: string) => {
        expect(data).toBeTruthy();
      });

      let reqs: TestRequest[] = httpTestingController.match((req: HttpRequest<any>) => {
        return true;
      });
      expect(reqs.length).toBeGreaterThan(0);
      reqs.forEach((req: TestRequest) => {
        expect(req.request.headers.get('auth')).toBe('test-auth', 'didnt add `auth` header on all routes');
        req.flush('success', {
          status: 200,
          statusText: 'OK',
        });
      });
    }),
  ));

  it('expect to intercept routes that contain `/url` in them and override responses body with `override`',
    async(inject([TdHttpService, HttpTestingController],
                 (service: TdHttpService, httpTestingController: HttpTestingController) => {
      service.post('http://www.test.com/url/with/any-path/another-path?query=1&query=2', {}).subscribe((data: HttpResponse<any>) => {
        expect(data.body).toBe('override', 'didnt intercept url with `/url`');
      });

      service.post('http://www.test.com/any_path?query=1&query=2', {}).subscribe((data: HttpResponse<any>) => {
        expect(data.body).toBe('success', 'intercepted url without `/url`');
      });

      service.get('http://www.test.com/url/any-path/111').subscribe((data: HttpResponse<any>) => {
        expect(data.body).toBe('override', 'didnt intercept url with `/url`');
      });

      service.get('http://www.test.com/anypath/url').subscribe((data: HttpResponse<any>) => {
        expect(data.body).toBe('override', 'didnt intercept url with `/url`');
      });

      service.delete('http://www.test.com/any_path?').subscribe((data: HttpResponse<any>) => {
        expect(data.body).toBe('success', 'intercepted url without `/url`');
      });

      service.delete('http://www.test.com').subscribe((data: HttpResponse<any>) => {
        expect(data.body).toBe('success', 'intercepted url without `/url`');
      });

      service.patch('http://www.test.com/any_path/111/url/another_path', {}).subscribe((data: HttpResponse<any>) => {
        expect(data.body).toBe('override', 'didnt intercept url with `/url`');
      });

      service.patch('http://www.test.com/any-path/111/another_path/', {}).subscribe((data: HttpResponse<any>) => {
        expect(data.body).toBe('success', 'intercepted url without `/url`');
      });

      let reqs: TestRequest[] = httpTestingController.match((req: HttpRequest<any>) => {
        return req.url.indexOf('url') > -1;
      });
      expect(reqs.length).toBeGreaterThan(0);
      reqs.forEach((req: TestRequest) => {
        req.flush('success', {
          status: 200,
          statusText: 'OK',
        });
      });
    }),
  ));

  it('expect to intercept only the route with `/recovery/*/fromerror` and recover from a failure',
    async(inject([TdHttpService, HttpTestingController],
                  (service: TdHttpService, httpTestingController: HttpTestingController) => {
      let testUrl1: string = 'http://www.test.com/recovery/id/id2/fromerror';
      let testUrl2: string = 'http://www.test.com/recovery/id/fromerror';

      service.patch(testUrl1, {}, {observe: 'body'}).subscribe((data: string) => {
        expect(data).toBe('success', '/error/*/fromerror was intercepted');
      });
  
      service.delete(testUrl2).subscribe((data: HttpResponse<any>) => {
        expect(data.body).toBe('recovered', '/error/*/fromerror was not intercepted');
      });

      let req1: TestRequest = httpTestingController.expectOne(testUrl1);
      expect(req1.request.method).toEqual('PATCH');
      expect(req1.request.headers.get('recovered')).toBeNull('did execute onRequestError when failed when it shouldnt');
      req1.flush('success', {
        status: 200,
        statusText: 'OK',
      });

      let req2: TestRequest = httpTestingController.expectOne(testUrl2);
      expect(req2.request.method).toEqual('DELETE');
      expect(req2.request.headers.get('recovered')).toBe('yes', 'did not execute onRequestError when failed');
      req2.flush('success', {
        status: 200,
        statusText: 'OK',
      });

      httpTestingController.verify();
    }),
  ));
});

describe('Service: Http', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentHttpModule.forRoot(),
        HttpClientTestingModule,
      ],
    });
  }));

  it('expect to do a forkJoin get succesfully with observables',
    async(inject([TdHttpService, HttpTestingController],
                  (service: TdHttpService, httpTestingController: HttpTestingController) => {
      let testUrl: string = '/testurl';
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;

      forkJoin(
        service.get(testUrl, {observe: 'response'}),
        service.get(testUrl, {observe: 'response'}))
      .subscribe((response: HttpResponse<any>[]) => {
        success = true;
      }, () => {
        error = true;
      }, () => {
        complete = true;
      });

      let reqs: TestRequest[] = httpTestingController.match(testUrl);
      expect(reqs[0].request.method).toEqual('GET');
      reqs[0].flush('success', {
        status: 200,
        statusText: 'OK',
      });
      expect(reqs[1].request.method).toEqual('GET');
      reqs[1].flush('success', {
        status: 200,
        statusText: 'OK',
      });
      httpTestingController.verify();

      expect(success).toBe(true, 'on success didnt execute with observables');
      expect(error).toBe(false, 'on error executed when it shouldnt have with observables');
      expect(complete).toBe(true, 'on complete didnt execute with observables');
    }),
  ));

  it('expect to do a post succesfully with observables',
    async(inject([TdHttpService, HttpTestingController],
                  (service: TdHttpService, httpTestingController: HttpTestingController) => {
      let testUrl: string = '/testurl';
      let complete: boolean = false;
      service.post(testUrl, {}, {
        observe: 'body',
      }).subscribe((data: string) => {
        expect(data).toBe('success');
      }, () => {
        fail('on error executed when it shouldnt have with observables');
      }, () => {
        complete = true;
      });
      let req: TestRequest = httpTestingController.expectOne(testUrl);
      expect(req.request.method).toEqual('POST');
      req.flush('success', {
        status: 200,
        statusText: 'OK',
      });
      httpTestingController.verify();
      expect(complete).toBe(true, 'on complete didnt execute with observables');
    }),
  ));

  it('expect to do a post failure with observables',
    async(inject([TdHttpService, HttpTestingController],
                  (service: TdHttpService, httpTestingController: HttpTestingController) => {
      let testUrl: string = '/testurl';
      service.post(testUrl, {}).subscribe(() => {
        fail('on success execute when it shouldnt have with observables');
      }, (err: HttpErrorResponse) => {
        expect(err.error.message).toBe('error', 'on error didnt execute with observables');
      }, () => {
        fail('on complete execute when it shouldnt have with observables');
      });
      let req: TestRequest = httpTestingController.expectOne(testUrl);
      req.error(new ErrorEvent('Something Failed', {
        message: 'error',
      }));
      httpTestingController.verify();
    }),
  ));

  it('expect to do a post succesfully with promises',
    async(inject([TdHttpService, HttpTestingController],
                  (service: TdHttpService, httpTestingController: HttpTestingController) => {
      let testUrl: string = '/testurl';
      service.post(testUrl, {}, {
        observe: 'body',
      }).toPromise().then((data: string) => {
        expect(data).toBe('success', 'on success didnt execute with promises');
      }, () => {
        fail('on error executed when it shouldnt have with promises');
      });

      let req: TestRequest = httpTestingController.expectOne(testUrl);
      expect(req.request.method).toEqual('POST');
      req.flush('success', {
        status: 200,
        statusText: 'OK',
      });
      httpTestingController.verify();
    }),
  ));

  it('expect to do a post failure with promises',
    async(inject([TdHttpService, HttpTestingController],
                  (service: TdHttpService, httpTestingController: HttpTestingController) => {
      let testUrl: string = '/testurl';
      service.post(testUrl, {}).toPromise().then(() => {
        fail('on success execute when it shouldnt have with promises');
      }, (err: HttpErrorResponse) => {
        expect(err.error.message).toBe('error', 'on error didnt execute when it should have with promises');
      });

      let req: TestRequest = httpTestingController.expectOne(testUrl);
      req.error(new ErrorEvent('Something Failed', {
        message: 'error',
      }));
      httpTestingController.verify();
    }),
  ));
});

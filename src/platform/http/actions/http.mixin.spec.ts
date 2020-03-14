import { TestBed, inject, async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpHeaders, HttpResponse, HttpErrorResponse, HttpParams, HttpUrlEncodingCodec } from '@angular/common/http';
import { CovalentHttpModule } from '@covalent/http';
import { Observable } from 'rxjs';
import { mixinHttp, TdGET, TdPOST, TdPATCH, TdDELETE, TdParam, TdQueryParams, TdBody } from './';

const TEST_URL: string = 'www.url.com/path/to/endpoint';

@Injectable()
export class BasicTestRESTService extends mixinHttp(class {}, {
  baseUrl: TEST_URL,
}) {
  @TdGET({
    path: '/',
  })
  query(): Observable<any> {
    return undefined;
  }

  @TdGET({
    path: '/',
  })
  queryWithParams(@TdQueryParams() queryParams: HttpParams): Observable<any> {
    return undefined;
  }

  @TdGET({
    path: '/',
  })
  queryWithParamsCustomEncoder(@TdQueryParams() queryParams: HttpParams): Observable<any> {
    return undefined;
  }

  @TdGET({
    path: '/:id',
  })
  get(@TdParam('id') id: string): Observable<any> {
    return undefined;
  }

  @TdPOST({
    path: '/',
  })
  create(@TdBody() body: any): Observable<any> {
    return undefined;
  }

  @TdPATCH({
    path: '/:id',
  })
  update(@TdParam('id') id: string, @TdBody() body: any): Observable<any> {
    return undefined;
  }

  @TdDELETE({
    path: '/:id',
  })
  delete(@TdParam('id') id: string): Observable<any> {
    return undefined;
  }
}

@Injectable()
export class BaseHeadersTestRESTService extends mixinHttp(class {}, {
  baseUrl: TEST_URL,
  baseHeaders: new HttpHeaders().set('header', 'value'),
}) {
  @TdGET({
    path: '/',
  })
  query(): Observable<any> {
    return undefined;
  }
}

describe('Decorators: Http', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CovalentHttpModule.forRoot(), HttpClientTestingModule],
      providers: [BasicTestRESTService, BaseHeadersTestRESTService],
    });
  }));

  it('expect to do a query succesfully', async(
    inject(
      [BasicTestRESTService, HttpTestingController],
      (service: BasicTestRESTService, httpTestingController: HttpTestingController) => {
        let success: boolean = false;
        let complete: boolean = false;
        service.query().subscribe(
          (data: string) => {
            expect(data).toBe('success');
            success = true;
          },
          () => {
            fail('on error executed when it shouldnt have with observables');
          },
          () => {
            complete = true;
          },
        );

        const req: TestRequest = httpTestingController.expectOne(TEST_URL + '/');
        expect(req.request.method).toEqual('GET');
        expect(req.request.url).toEqual(TEST_URL + '/');
        req.flush('success', {
          status: 200,
          statusText: 'OK',
        });
        httpTestingController.verify();

        expect(success).toBe(true, 'on success didnt execute with observables');
        expect(complete).toBe(true, 'on complete didnt execute with observables');
      },
    ),
  ));

  it('expect to do a query failure', async(
    inject(
      [BasicTestRESTService, HttpTestingController],
      (service: BasicTestRESTService, httpTestingController: HttpTestingController) => {
        service.query().subscribe(
          (data: HttpResponse<any>) => {
            fail('on success execute when it shouldnt have with observables');
          },
          (err: HttpErrorResponse) => {
            expect(err.error.message).toBe('error', 'on error didnt execute with observables');
          },
          () => {
            fail('on complete execute when it shouldnt have with observables');
          },
        );

        const req: TestRequest = httpTestingController.expectOne(TEST_URL + '/');
        expect(req.request.method).toEqual('GET');
        expect(req.request.url).toEqual(TEST_URL + '/');
        req.error(
          new ErrorEvent('Something Failed', {
            message: 'error',
          }),
        );
        httpTestingController.verify();
      },
    ),
  ));

  it('expect to do a query with HttpParams parameters successfully', async(
    inject(
      [BasicTestRESTService, HttpTestingController],
      (service: BasicTestRESTService, httpTestingController: HttpTestingController) => {
        let success: boolean = false;
        let complete: boolean = false;
        const queryParams: HttpParams = new HttpParams()
          .set('firstParam', '1')
          .set('second-Param', '2')
          .append('second-Param', '3')
          .set('thirdParam', 'false');
        service.queryWithParams(queryParams).subscribe(
          (data: string) => {
            expect(data).toBe('success');
            success = true;
          },
          () => {
            fail('on error executed when it shouldnt have with observables');
          },
          () => {
            complete = true;
          },
        );

        const req: TestRequest = httpTestingController.match(() => true)[0];
        expect(req.request.method).toEqual('GET');
        expect(req.request.params).toEqual(queryParams);
        expect(req.request.url).toEqual(TEST_URL + '/');
        expect(req.request.urlWithParams).toEqual(
          `${TEST_URL}/?firstParam=1&second-Param=2&second-Param=3&thirdParam=false`,
        );
        req.flush('success', {
          status: 200,
          statusText: 'OK',
        });
        httpTestingController.verify();

        expect(success).toBe(true, 'on success didnt execute with observables');
        expect(complete).toBe(true, 'on complete didnt execute with observables');
      },
    ),
  ));

  it('expect to do a query with HttpParams parameters with a custom encoder successfully', async(
    inject(
      [BasicTestRESTService, HttpTestingController],
      (service: BasicTestRESTService, httpTestingController: HttpTestingController) => {
        let success: boolean = false;
        let complete: boolean = false;
        const firstParam: string = '/dir/child/test.csv';
        const secondParam: string = '!@#$%=';

        class CustomEncoder implements HttpUrlEncodingCodec {
          encodeKey(key: string): string {
            return encodeURIComponent(key);
          }
          encodeValue(value: string): string {
            return encodeURIComponent(value);
          }
          decodeKey(key: string): string {
            return decodeURIComponent(key);
          }
          decodeValue(value: string): string {
            return decodeURIComponent(value);
          }
        }
        const queryParams: HttpParams = new HttpParams({ encoder: new CustomEncoder() })
          .set('firstParam', firstParam)
          .set('secondParam', secondParam);
        service.queryWithParams(queryParams).subscribe(
          (data: string) => {
            expect(data).toBe('success');
            success = true;
          },
          () => {
            fail('on error executed when it shouldnt have with observables');
          },
          () => {
            complete = true;
          },
        );

        const req: TestRequest = httpTestingController.match(() => true)[0];
        expect(req.request.urlWithParams).toEqual(
          `${TEST_URL}/?firstParam=${encodeURIComponent(firstParam)}&secondParam=${encodeURIComponent(secondParam)}`,
        );

        req.flush('success', {
          status: 200,
          statusText: 'OK',
        });
        httpTestingController.verify();

        expect(success).toBe(true, 'on success didnt execute with observables');
        expect(complete).toBe(true, 'on complete didnt execute with observables');
      },
    ),
  ));

  it('expect to do a query with object parameters succesfully', async(
    inject(
      [BasicTestRESTService, HttpTestingController],
      (service: BasicTestRESTService, httpTestingController: HttpTestingController) => {
        let success: boolean = false;
        let complete: boolean = false;
        service
          .queryWithParams(<any>{
            firstParam: 1,
            secondParam: [2, 3],
            thirdParam: false,
          })
          .subscribe(
            (data: string) => {
              expect(data).toBe('success');
              success = true;
            },
            () => {
              fail('on error executed when it shouldnt have with observables');
            },
            () => {
              complete = true;
            },
          );

        const req: TestRequest = httpTestingController.match(() => true)[0];
        expect(req.request.method).toEqual('GET');
        expect(req.request.params.toString()).toEqual('firstParam=1&secondParam=2&secondParam=3&thirdParam=false');
        expect(req.request.url).toEqual(TEST_URL + '/');
        req.flush('success', {
          status: 200,
          statusText: 'OK',
        });
        httpTestingController.verify();

        expect(success).toBe(true, 'on success didnt execute with observables');
        expect(complete).toBe(true, 'on complete didnt execute with observables');
      },
    ),
  ));

  it('expect to do a get succesfully', async(
    inject(
      [BasicTestRESTService, HttpTestingController],
      (service: BasicTestRESTService, httpTestingController: HttpTestingController) => {
        let success: boolean = false;
        let complete: boolean = false;
        service.get('id-of-something').subscribe(
          (data: string) => {
            expect(data).toBe('success');
            success = true;
          },
          () => {
            fail('on error executed when it shouldnt have with observables');
          },
          () => {
            complete = true;
          },
        );

        const req: TestRequest = httpTestingController.match(() => true)[0];
        expect(req.request.method).toEqual('GET');
        expect(req.request.url).toEqual(TEST_URL + '/id-of-something');
        req.flush('success', {
          status: 200,
          statusText: 'OK',
        });
        httpTestingController.verify();

        expect(success).toBe(true, 'on success didnt execute with observables');
        expect(complete).toBe(true, 'on complete didnt execute with observables');
      },
    ),
  ));

  it('expect to do a create succesfully', async(
    inject(
      [BasicTestRESTService, HttpTestingController],
      (service: BasicTestRESTService, httpTestingController: HttpTestingController) => {
        let success: boolean = false;
        let complete: boolean = false;
        service.create('data').subscribe(
          (data: string) => {
            expect(data).toBe('success');
            success = true;
          },
          () => {
            fail('on error executed when it shouldnt have with observables');
          },
          () => {
            complete = true;
          },
        );

        const req: TestRequest = httpTestingController.match(() => true)[0];
        expect(req.request.method).toEqual('POST');
        expect(req.request.body).toEqual('data');
        expect(req.request.url).toEqual(TEST_URL + '/');
        req.flush('success', {
          status: 200,
          statusText: 'OK',
        });
        httpTestingController.verify();

        expect(success).toBe(true, 'on success didnt execute with observables');
        expect(complete).toBe(true, 'on complete didnt execute with observables');
      },
    ),
  ));

  it('expect to do an update succesfully', async(
    inject(
      [BasicTestRESTService, HttpTestingController],
      (service: BasicTestRESTService, httpTestingController: HttpTestingController) => {
        let success: boolean = false;
        let complete: boolean = false;
        service.update('id-of-something', 'data').subscribe(
          (data: string) => {
            expect(data).toBe('success');
            success = true;
          },
          () => {
            fail('on error executed when it shouldnt have with observables');
          },
          () => {
            complete = true;
          },
        );

        const req: TestRequest = httpTestingController.match(() => true)[0];
        expect(req.request.method).toEqual('PATCH');
        expect(req.request.body).toEqual('data');
        expect(req.request.url).toEqual(TEST_URL + '/id-of-something');
        req.flush('success', {
          status: 200,
          statusText: 'OK',
        });
        httpTestingController.verify();

        expect(success).toBe(true, 'on success didnt execute with observables');
        expect(complete).toBe(true, 'on complete didnt execute with observables');
      },
    ),
  ));

  it('expect to do an delete succesfully', async(
    inject(
      [BasicTestRESTService, HttpTestingController],
      (service: BasicTestRESTService, httpTestingController: HttpTestingController) => {
        let success: boolean = false;
        let complete: boolean = false;
        service.delete('id-of-something').subscribe(
          (data: string) => {
            expect(data).toBe('success');
            success = true;
          },
          () => {
            fail('on error executed when it shouldnt have with observables');
          },
          () => {
            complete = true;
          },
        );

        const req: TestRequest = httpTestingController.match(() => true)[0];
        expect(req.request.method).toEqual('DELETE');
        expect(req.request.url).toEqual(TEST_URL + '/id-of-something');
        req.flush('success', {
          status: 200,
          statusText: 'OK',
        });
        httpTestingController.verify();

        expect(success).toBe(true, 'on success didnt execute with observables');
        expect(complete).toBe(true, 'on complete didnt execute with observables');
      },
    ),
  ));

  it('expect to do a query succesfully with baseHeaders', async(
    inject(
      [BaseHeadersTestRESTService, HttpTestingController],
      (service: BaseHeadersTestRESTService, httpTestingController: HttpTestingController) => {
        let success: boolean = false;
        const error: boolean = false;
        let complete: boolean = false;
        service.query().subscribe(
          (data: string) => {
            expect(data).toBe('success');
            success = true;
          },
          () => {
            fail('on error executed when it shouldnt have with observables');
          },
          () => {
            complete = true;
          },
        );

        const req: TestRequest = httpTestingController.match(() => true)[0];
        expect(req.request.method).toEqual('GET');
        expect(req.request.url).toEqual(TEST_URL + '/');
        expect(req.request.headers.get('header')).toBe('value');
        req.flush('success', {
          status: 200,
          statusText: 'OK',
        });
        httpTestingController.verify();

        expect(success).toBe(true, 'on success didnt execute with observables');
        expect(error).toBe(false, 'on error executed when it shouldnt have with observables');
        expect(complete).toBe(true, 'on complete didnt execute with observables');
      },
    ),
  ));
});

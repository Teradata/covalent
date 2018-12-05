import {
  TestBed,
  inject,
  async,
} from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { CovalentHttpModule, TdHttpService } from '@covalent/http';
import { Observable } from 'rxjs';
import { TdHttp, TdGET, TdPOST, TdPATCH, TdDELETE } from './';

const TEST_URL: string = 'www.url.com/path/to/endpoint';

@TdHttp({
  baseUrl: TEST_URL,
})
@Injectable()
export class BasicTestRESTService {

  @TdGET({
    path: '/',
  })
  query(): Observable<any> { return undefined; }
}

@TdHttp({
  baseUrl: TEST_URL,
  baseHeaders: new HttpHeaders().set('header', 'value'),
})
@Injectable()
export class BaseHeadersTestRESTService {

  @TdGET({
    path: '/',
  })
  query(): Observable<any> { return undefined; }

}

describe('Decorators: Http', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentHttpModule.forRoot(),
        HttpClientTestingModule,
      ],
      providers: [
        BasicTestRESTService,
        BaseHeadersTestRESTService,
      ],
    });
  }));

  it('expect to do a query succesfully',
    async(inject([BasicTestRESTService, HttpTestingController],
                  (service: BasicTestRESTService, httpTestingController: HttpTestingController) => {
      let success: boolean = false;
      let complete: boolean = false;
      service.query().subscribe((data: string) => {
        expect(data).toBe('success');
        success = true;
      }, () => {
        fail('on error executed when it shouldnt have with observables');
      }, () => {
        complete = true;
      });

      let req: TestRequest = httpTestingController.expectOne(TEST_URL + '/');
      expect(req.request.method).toEqual('GET');
      expect(req.request.url).toEqual(TEST_URL + '/');
      req.flush('success', {
        status: 200,
        statusText: 'OK',
      });
      httpTestingController.verify();

      expect(success).toBe(true, 'on success didnt execute with observables');
      expect(complete).toBe(true, 'on complete didnt execute with observables');
    }),
  ));

  it('expect to do a query failure',
    async(inject([BasicTestRESTService, HttpTestingController],
                  (service: BasicTestRESTService, httpTestingController: HttpTestingController) => {
      let success: boolean = false;
      let complete: boolean = false;
      service.query().subscribe((data: HttpResponse<any>) => {
        fail('on success execute when it shouldnt have with observables');
      }, (err: HttpErrorResponse) => {
        expect(err.error.message).toBe('error', 'on error didnt execute with observables');
      }, () => {
        fail('on complete execute when it shouldnt have with observables');
      });

      let req: TestRequest = httpTestingController.expectOne(TEST_URL + '/');
      expect(req.request.method).toEqual('GET');
      expect(req.request.url).toEqual(TEST_URL + '/');
      req.error(new ErrorEvent('Something Failed', {
        message: 'error',
      }));
      httpTestingController.verify();
    }),
  ));

});

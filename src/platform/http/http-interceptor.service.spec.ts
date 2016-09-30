import {
  TestBed,
  inject,
  async,
} from '@angular/core/testing';
import { Injector } from '@angular/core';
import { XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, Http } from '@angular/http';
import { HttpInterceptorService } from './http-interceptor.service';
import 'rxjs/Rx';

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
            return new HttpInterceptorService(http, injector, []);
          },
          deps: [Http, Injector],
        },
      ],
    });
  }));

  it('expect to do a post succesfully with observables',
    async(inject([HttpInterceptorService, MockBackend], (service: HttpInterceptorService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: any) => {
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
      mockBackend.connections.subscribe((connection: any) => {
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
      mockBackend.connections.subscribe((connection: any) => {
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
      mockBackend.connections.subscribe((connection: any) => {
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

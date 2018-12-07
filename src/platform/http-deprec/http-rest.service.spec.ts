import {
  TestBed,
  inject,
  async,
} from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { XHRBackend, Response, ResponseOptions, Headers, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http } from '@angular/http';
import { RESTService } from './http-rest.service';

@Injectable()
export class BasicTestRESTService extends RESTService<any> {

  constructor(http: Http) {
    super(http, {
      baseUrl: 'www.url.com',
      path: 'path/to/endpoint',
    });
  }

}

@Injectable()
export class BaseHeadersTestRESTService extends RESTService<any> {

  constructor(http: Http) {
    super(http, {
      baseUrl: 'www.url.com',
      path: 'path/to/endpoint',
      baseHeaders: new Headers({'header': 'value'}),
    });
  }
}

@Injectable()
export class DynamicHeadersTestRESTService extends RESTService<any> {

  constructor(http: Http) {
    super(http, {
      baseUrl: 'www.url.com',
      path: 'path/to/endpoint',
      dynamicHeaders: () => {
        return new Headers({'header': 'value'});
      },
    });
  }
}

@Injectable()
export class TransformTestRESTService extends RESTService<any> {

  constructor(http: Http) {
    super(http, {
      baseUrl: 'www.url.com',
      path: 'path/to/endpoint',
      transform: (res: Response) => {
        return { data: res.json(), transformFrom: 'service'};
      },
    });
  }
}

describe('Service: RESTService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        MockBackend, {
          provide: XHRBackend,
          useExisting: MockBackend,
        },
        BasicTestRESTService,
        BaseHeadersTestRESTService,
        DynamicHeadersTestRESTService,
        TransformTestRESTService,
      ],
    });
  }));

  it('expect to do a query succesfully',
    async(inject([BasicTestRESTService, MockBackend], (service: BasicTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.url).toBe('www.url.com/path/to/endpoint',  'url doesnt match expected url');
        expect(connection.request.method).toBe(RequestMethod.Get, 'request didnt have GET method');
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.query().subscribe((data: string) => {
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

  it('expect to do a query and use the service transform() and then override it with a method transform()',
    async(inject([TransformTestRESTService, MockBackend],
                 (service: TransformTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.query().subscribe((data: any) => {
        expect(data.data).toBe('success');
        expect(data.transformFrom).toBe('service');
        success = true;
      }, () => {
        error = true;
      }, () => {
        complete = true;
      });
      expect(success).toBe(true, 'on success didnt execute with observables');
      expect(error).toBe(false, 'on error executed when it shouldnt have with observables');
      expect(complete).toBe(true, 'on complete didnt execute with observables');

      success = false;
      error = false;
      complete = false;
      service.query(undefined, (res: Response) => {
        return { data: res.json(), transformFrom: 'method'};
      }).subscribe((data: any) => {
        expect(data.data).toBe('success');
        expect(data.transformFrom).toBe('method');
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

  it('expect to do a query failure',
    async(inject([BasicTestRESTService, MockBackend], (service: BasicTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockError(new Error('error'));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.query().subscribe(() => {
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

  it('expect to do a query with parameters succesfully',
    async(inject([BasicTestRESTService, MockBackend], (service: BasicTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.url)
        .toBe('www.url.com/path/to/endpoint?firstParam=1&second-Param=value&thirdParam=false',
              'url with query parameters didnt match the expected url');
        expect(connection.request.method).toBe(RequestMethod.Get, 'request didnt have GET method');
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.query({
        firstParam: 1,
        'second-Param': 'value',
        thirdParam: false,
      }).subscribe((data: string) => {
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

  it('expect to do a get succesfully',
    async(inject([BasicTestRESTService, MockBackend], (service: BasicTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.url)
        .toBe('www.url.com/path/to/endpoint/id-of-something',
              'url with :id didnt match the expected url');
        expect(connection.request.method).toBe(RequestMethod.Get, 'request didnt have GET method');
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.get('id-of-something').subscribe((data: string) => {
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

  it('expect to do a get and use the service transform() and then override it with a method transform()',
    async(inject([TransformTestRESTService, MockBackend],
                 (service: TransformTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.get('id-of-something').subscribe((data: any) => {
        expect(data.data).toBe('success');
        expect(data.transformFrom).toBe('service');
        success = true;
      }, () => {
        error = true;
      }, () => {
        complete = true;
      });
      expect(success).toBe(true, 'on success didnt execute with observables');
      expect(error).toBe(false, 'on error executed when it shouldnt have with observables');
      expect(complete).toBe(true, 'on complete didnt execute with observables');

      success = false;
      error = false;
      complete = false;
      service.get('id-of-something', (res: Response) => {
        return { data: res.json(), transformFrom: 'method'};
      }).subscribe((data: any) => {
        expect(data.data).toBe('success');
        expect(data.transformFrom).toBe('method');
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

  it('expect to do a get failure',
    async(inject([BasicTestRESTService, MockBackend], (service: BasicTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockError(new Error('error'));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.get('id-of-something').subscribe(() => {
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

  it('expect to do a create succesfully',
    async(inject([BasicTestRESTService, MockBackend], (service: BasicTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.url)
        .toBe('www.url.com/path/to/endpoint',
              'url didnt match the expected url');
        expect(connection.request.method).toBe(RequestMethod.Post, 'request didnt have POST method');
        expect(connection.request.getBody()).toBe('data', 'request didnt have the body');
        connection.mockRespond(new Response(new ResponseOptions({
            status: 201,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.create('data').subscribe((data: string) => {
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

  it('expect to do a create and use the service transform() and then override it with a method transform()',
    async(inject([TransformTestRESTService, MockBackend],
                 (service: TransformTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            status: 201,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.create({}).subscribe((data: any) => {
        expect(data.data).toBe('success');
        expect(data.transformFrom).toBe('service');
        success = true;
      }, () => {
        error = true;
      }, () => {
        complete = true;
      });
      expect(success).toBe(true, 'on success didnt execute with observables');
      expect(error).toBe(false, 'on error executed when it shouldnt have with observables');
      expect(complete).toBe(true, 'on complete didnt execute with observables');

      success = false;
      error = false;
      complete = false;
      service.create({}, (res: Response) => {
        return { data: res.json(), transformFrom: 'method'};
      }).subscribe((data: any) => {
        expect(data.data).toBe('success');
        expect(data.transformFrom).toBe('method');
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

  it('expect to do a create failure',
    async(inject([BasicTestRESTService, MockBackend], (service: BasicTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockError(new Error('error'));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.create({data: 'value'}).subscribe(() => {
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

  it('expect to do an update succesfully',
    async(inject([BasicTestRESTService, MockBackend], (service: BasicTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.url)
        .toBe('www.url.com/path/to/endpoint/id-of-something',
              'url with :id didnt match the expected url');
        expect(connection.request.method).toBe(RequestMethod.Patch, 'request didnt have PATCH method');
        expect(connection.request.getBody()).toBe('data', 'request didnt have the body');
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.update('id-of-something', 'data').subscribe((data: string) => {
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

  it('expect to do an update and use the service transform() and then override it with a method transform()',
    async(inject([TransformTestRESTService, MockBackend],
                 (service: TransformTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.update('id-of-something', {}).subscribe((data: any) => {
        expect(data.data).toBe('success');
        expect(data.transformFrom).toBe('service');
        success = true;
      }, () => {
        error = true;
      }, () => {
        complete = true;
      });
      expect(success).toBe(true, 'on success didnt execute with observables');
      expect(error).toBe(false, 'on error executed when it shouldnt have with observables');
      expect(complete).toBe(true, 'on complete didnt execute with observables');

      success = false;
      error = false;
      complete = false;
      service.update('id-of-something', {}, (res: Response) => {
        return { data: res.json(), transformFrom: 'method'};
      }).subscribe((data: any) => {
        expect(data.data).toBe('success');
        expect(data.transformFrom).toBe('method');
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

  it('expect to do a update failure',
    async(inject([BasicTestRESTService, MockBackend], (service: BasicTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockError(new Error('error'));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.update('id-of-something', 'data').subscribe((data: string) => {
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

  it('expect to do a delete succesfully with observables',
    async(inject([BasicTestRESTService, MockBackend], (service: BasicTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.url)
        .toBe('www.url.com/path/to/endpoint/id-of-something',
              'url with :id didnt match the expected url');
        expect(connection.request.method).toBe(RequestMethod.Delete, 'request didnt have DELETE method');
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.delete('id-of-something').subscribe((data: string) => {
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

  it('expect to do a delete and use the service transform() and then override it with a method transform()',
    async(inject([TransformTestRESTService, MockBackend],
                 (service: TransformTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.delete('id-of-something').subscribe((data: any) => {
        expect(data.data).toBe('success');
        expect(data.transformFrom).toBe('service');
        success = true;
      }, () => {
        error = true;
      }, () => {
        complete = true;
      });
      expect(success).toBe(true, 'on success didnt execute with observables');
      expect(error).toBe(false, 'on error executed when it shouldnt have with observables');
      expect(complete).toBe(true, 'on complete didnt execute with observables');

      success = false;
      error = false;
      complete = false;
      service.delete('id-of-something', (res: Response) => {
        return { data: res.json(), transformFrom: 'method'};
      }).subscribe((data: any) => {
        expect(data.data).toBe('success');
        expect(data.transformFrom).toBe('method');
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

  it('expect to do a delete failure',
    async(inject([BasicTestRESTService, MockBackend], (service: BasicTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockError(new Error('error'));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.delete('id-of-something').subscribe((data: string) => {
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

  it('expect to do a query succesfully with baseHeaders',
    async(inject([BaseHeadersTestRESTService, MockBackend],
                 (service: BaseHeadersTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.headers.get('header')).toBe('value', 'request didnt have baseHeaders');
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.query().subscribe((data: string) => {
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

  it('expect to do a query succesfully with dynamicHeaders',
    async(inject([DynamicHeadersTestRESTService, MockBackend],
                 (service: DynamicHeadersTestRESTService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.headers.get('header')).toBe('value', 'request didnt have dynamicHeaders');
        connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: JSON.stringify('success')},
        )));
      });
      let success: boolean = false;
      let error: boolean = false;
      let complete: boolean = false;
      service.query().subscribe((data: string) => {
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
});

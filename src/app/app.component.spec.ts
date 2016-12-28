import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { CovalentCoreModule } from '../platform/core';
import { DocsAppComponent } from './app.component';

describe('Component: App', () => {

  let generalResponses: Map<string, Response> = new Map<string, Response>();
  generalResponses.set('/app/assets/icons/teradata.svg', new Response(new ResponseOptions({
    status: 200, body: '<svg></svg>',
  })));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentCoreModule.forRoot(),
        RouterTestingModule,
      ],
      declarations: [
        DocsAppComponent,
      ],
      providers: [
        MockBackend,
        { provide: XHRBackend, useExisting: MockBackend },
      ],
    });
    TestBed.compileComponents();
  }));

  it('should create the component', async(inject([MockBackend], (mockBackend: MockBackend) => {
    let responses: Map<string, Response> = new Map<string, Response>(generalResponses);
    mockBackend.connections.subscribe((connection: any) => {
      connection.mockRespond(responses.get(connection.request.url));
    });

    let fixture: ComponentFixture<any> = TestBed.createComponent(DocsAppComponent);
    let testComponent: DocsAppComponent = fixture.debugElement.componentInstance;
    let element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('[sidenavTitle="Covalent"]')).toBeTruthy();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(element.querySelectorAll('md-nav-list[menu-items] a[md-list-item]').length)
      .toBe(testComponent.routes.length);
    });
  })));
});

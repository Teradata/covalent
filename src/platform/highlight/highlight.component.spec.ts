import {
  TestBed,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import 'hammerjs';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CovalentHighlightModule } from './';

describe('Component: Highlight', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentHighlightModule,
      ],
      declarations: [
        TdHighlightEmptyStaticTestRenderingComponent,
        TdHighlightStaticHtmlTestRenderingComponent,
        TdHighlightDynamicCssTestRenderingComponent,
        TdHighlightUndefinedLangTestRenderingComponent,

        TdHighlightEmptyStaticTestEventsComponent,
        TdHighlightStaticHtmlTestEventsComponent,
        TdHighlightDynamicCssTestEventsComponent,
        TdHighlightUndefinedLangTestEventsComponent,
      ],
    });
    TestBed.compileComponents();
  }));

  describe('Rendering: ', () => {

    it('should render empty', async(() => {

      let fixture: ComponentFixture<any> = TestBed.createComponent(TdHighlightEmptyStaticTestRenderingComponent);
      let component: TdHighlightEmptyStaticTestRenderingComponent = fixture.debugElement.componentInstance;
      let element: HTMLElement = fixture.nativeElement;

      expect(fixture.debugElement.query(By.css('td-highlight')).nativeElement.textContent.trim())
      .toBe(``);
      expect(fixture.debugElement.query(By.css('td-highlight pre code'))).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-highlight pre code'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('td-highlight')).nativeElement.textContent.trim()).toBe('');
      });
    }));

    it('should render code from static content', async(() => {

      let fixture: ComponentFixture<any> = TestBed.createComponent(TdHighlightStaticHtmlTestRenderingComponent);
      let component: TdHighlightStaticHtmlTestRenderingComponent = fixture.debugElement.componentInstance;
      let element: HTMLElement = fixture.nativeElement;

      expect(fixture.debugElement.query(By.css('td-highlight')).nativeElement.textContent.trim())
      .toContain(`{ {property} }`.trim());
      expect(fixture.debugElement.query(By.css('td-highlight pre code'))).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-highlight pre code'))).toBeTruthy();
        expect(element.querySelector('td-highlight pre code').textContent.trim()).toContain(`{{property}}`);
        expect(element.querySelectorAll('.hljs-tag').length).toBe(6);
      });
    }));

    it('should render code from dynamic content', async(() => {

      let fixture: ComponentFixture<any> = TestBed.createComponent(TdHighlightDynamicCssTestRenderingComponent);
      let component: TdHighlightDynamicCssTestRenderingComponent = fixture.debugElement.componentInstance;
      component.content = `
        pre {
          background: #002451;
          border-radius: 2px;
        }`;
      let element: HTMLElement = fixture.nativeElement;

      expect(fixture.debugElement.query(By.css('td-highlight')).nativeElement.textContent.trim())
      .toBe('');
      expect(fixture.debugElement.query(By.css('td-highlight pre code'))).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-highlight pre code'))).toBeTruthy();
        expect(element.querySelectorAll('.hljs-number').length).toBe(2);
      });
    }));

    it('should throw error for undefined language', async(() => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdHighlightUndefinedLangTestRenderingComponent);
      let component: TdHighlightUndefinedLangTestRenderingComponent = fixture.debugElement.componentInstance;
      expect(function(): void {
        fixture.detectChanges();
      }).toThrowError();
    }));
  });

  describe('Event bindings: ', () => {

    describe('contentReady event: ', () => {
      
        it('should be fired only once after display renders empty static content', async(() => {

          let fixture: ComponentFixture<any> = TestBed.createComponent(TdHighlightEmptyStaticTestEventsComponent);
          let component: TdHighlightEmptyStaticTestEventsComponent = fixture.debugElement.componentInstance;
          let eventSpy: jasmine.Spy = spyOn(component, 'tdHighlightContentIsReady');
          
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(eventSpy.calls.count()).toBe(1);
          });
        }));

        it('should be fired only once after display renders highlight from static html', async(() => {

          let fixture: ComponentFixture<any> = TestBed.createComponent(TdHighlightStaticHtmlTestEventsComponent);
          let component: TdHighlightStaticHtmlTestEventsComponent = fixture.debugElement.componentInstance;
          let eventSpy: jasmine.Spy = spyOn(component, 'tdHighlightContentIsReady');
    
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(eventSpy.calls.count()).toBe(1);
          });
        }));

        it('should be fired only once after display renders inital highlight from dynamic css content', async(() => {

          let fixture: ComponentFixture<any> = TestBed.createComponent(TdHighlightDynamicCssTestEventsComponent);
          let component: TdHighlightDynamicCssTestEventsComponent = fixture.debugElement.componentInstance;
          let eventSpy: jasmine.Spy = spyOn(component, 'tdHighlightContentIsReady');

          // Inital dynamic css content
          component.content = `
            pre {
              background: #002451;
              border-radius: 2px;
            }`;

          fixture.detectChanges();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(eventSpy.calls.count()).toBe(1);
          });
        }));

        it('should be fired twice after changing the inital rendered highlight dynamic css content', async(() => {

          let fixture: ComponentFixture<any> = TestBed.createComponent(TdHighlightDynamicCssTestEventsComponent);
          let component: TdHighlightDynamicCssTestEventsComponent = fixture.debugElement.componentInstance;
          let eventSpy: jasmine.Spy = spyOn(component, 'tdHighlightContentIsReady');

          component.content = `
            pre {
              background: #002451;
              border-radius: 2px;
            }`;

          fixture.detectChanges();

          component.content = `
            pre {
              color: red;
              background: #000000;
              border-radius: 1em;
            }`;

          fixture.detectChanges();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(eventSpy.calls.count()).toBe(2);
          });
        }));
    });
  });
});

// Use the 4 components below to test the rendering requirements of the TdHighlight component.
@Component({
  template: `
    <td-highlight>
    </td-highlight>`,
})
class TdHighlightEmptyStaticTestRenderingComponent {
}

@Component({
  template: `<td-highlight lang="html">
      <![CDATA[
        <td-highlight lang="html">
          <h1>hello world!</h1>
          <span>{ {property} }</span>
        </td-highlight>
      ]]>
    </td-highlight>`,
})
class TdHighlightStaticHtmlTestRenderingComponent {
}

@Component({
  template: `
    <td-highlight lang="css" [content]="content">
    </td-highlight>`,
})
class TdHighlightDynamicCssTestRenderingComponent {
  content: string;
}

@Component({
  template: `
    <td-highlight [lang]="lang">
    </td-highlight>`,
})
class TdHighlightUndefinedLangTestRenderingComponent {
  lang: string;
}

// Use the 4 components below to test event binding requirements of the TdHighlight component.
@Component({
  template: `
    <td-highlight (contentReady)="tdHighlightContentIsReady()">
    </td-highlight>`,
})
class TdHighlightEmptyStaticTestEventsComponent {
  tdHighlightContentIsReady(): void { /* Stub */ }
}

@Component({
  template: `<td-highlight lang="html" (contentReady)="tdHighlightContentIsReady()">
      <![CDATA[
        <td-highlight lang="html">
          <h1>hello world!</h1>
          <span>{ {property} }</span>
        </td-highlight>
      ]]>
    </td-highlight>`,
})
class TdHighlightStaticHtmlTestEventsComponent {
  tdHighlightContentIsReady(): void { /* Stub */ }
}

@Component({
  template: `
    <td-highlight lang="css" [content]="content" (contentReady)="tdHighlightContentIsReady()">
    </td-highlight>`,
})
class TdHighlightDynamicCssTestEventsComponent {
  content: string;
  tdHighlightContentIsReady(): void { /* Stub */ }
}

@Component({
  template: `
    <td-highlight [lang]="lang" (contentReady)="tdHighlightContentIsReady()">
    </td-highlight>`,
})
class TdHighlightUndefinedLangTestEventsComponent {
  lang: string;
  tdHighlightContentIsReady(): void { /* Stub */ }
}

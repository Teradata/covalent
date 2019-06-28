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
        TdHighlightDynamicInputsTestRenderingComponent,

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

    it('should update code when the content input changes', async(async () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdHighlightDynamicInputsTestRenderingComponent);
      let component: TdHighlightDynamicInputsTestRenderingComponent = fixture.debugElement.componentInstance;
      const RED_BACKGROUND: string = 'background: red;';
      const BLUE_BACKGROUND: string = 'background: blue;';
      component.codeLang = 'css';
      component.content = `
        body {
          ${RED_BACKGROUND}
        }`;
      const element: HTMLElement = fixture.debugElement.nativeElement;
      fixture.detectChanges();
      await fixture.whenStable();
      expect(element.textContent).toContain(RED_BACKGROUND);
      component.content = `
        body {
          ${BLUE_BACKGROUND}
        }`;
      fixture.detectChanges();
      await fixture.whenStable();
      expect(element.textContent).not.toContain(RED_BACKGROUND);
      expect(element.textContent).toContain(BLUE_BACKGROUND);
    }));

    it('should update code when the codeLang input changes', async(async () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdHighlightDynamicInputsTestRenderingComponent);
      let component: TdHighlightDynamicInputsTestRenderingComponent = fixture.debugElement.componentInstance;
      component.content = `
        body {
          background: red;
        }`;
      component.codeLang = 'css';
      let element: HTMLElement = fixture.nativeElement;
      fixture.detectChanges();
      await fixture.whenStable();
      expect(element.querySelectorAll('.hljs-selector-tag').length).toBe(1);
      expect(element.querySelectorAll('.hljs-attribute').length).toBe(1);
      component.codeLang = 'typescript';
      fixture.detectChanges();
      await fixture.whenStable();
      expect(element.querySelectorAll('.hljs-selector-tag').length).toBe(0);
      expect(element.querySelectorAll('.hljs-attribute').length).toBe(0);
    }));

    it('should update code when the deprecated lang input changes', async(async () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdHighlightDynamicInputsTestRenderingComponent);
      let component: TdHighlightDynamicInputsTestRenderingComponent = fixture.debugElement.componentInstance;
      component.content = `
        body {
          background: red;
        }`;
      component.lang = 'css';
      let element: HTMLElement = fixture.nativeElement;
      fixture.detectChanges();
      await fixture.whenStable();
      expect(element.querySelectorAll('.hljs-selector-tag').length).toBe(1);
      expect(element.querySelectorAll('.hljs-attribute').length).toBe(1);
      component.lang = 'typescript';
      fixture.detectChanges();
      await fixture.whenStable();
      expect(element.querySelectorAll('.hljs-selector-tag').length).toBe(0);
      expect(element.querySelectorAll('.hljs-attribute').length).toBe(0);
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
  template: `<td-highlight codeLang="html">
      <![CDATA[
        <td-highlight codeLang="html">
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
    <td-highlight codeLang="css" [content]="content">
    </td-highlight>`,
})
class TdHighlightDynamicCssTestRenderingComponent {
  content: string;
}

@Component({
  template: `
    <td-highlight
      [codeLang]="codeLang"
      [lang]="lang"
      [content]="content"
    >
    </td-highlight>`,
})
class TdHighlightDynamicInputsTestRenderingComponent {
  content: string;
  codeLang: string;
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
  template: `<td-highlight codeLang="html" (contentReady)="tdHighlightContentIsReady()">
      <![CDATA[
        <td-highlight codeLang="html">
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
    <td-highlight codeLang="css" [content]="content" (contentReady)="tdHighlightContentIsReady()">
    </td-highlight>`,
})
class TdHighlightDynamicCssTestEventsComponent {
  content: string;
  tdHighlightContentIsReady(): void { /* Stub */ }
}

@Component({
  template: `
    <td-highlight [codeLang]="lang" (contentReady)="tdHighlightContentIsReady()">
    </td-highlight>`,
})
class TdHighlightUndefinedLangTestEventsComponent {
  lang: string;
  tdHighlightContentIsReady(): void { /* Stub */ }
}

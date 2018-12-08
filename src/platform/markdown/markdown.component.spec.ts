import {
  TestBed,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import 'hammerjs';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CovalentMarkdownModule } from './';

describe('Component: Markdown', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentMarkdownModule,
      ],
      declarations: [
        TdMarkdownEmptyStaticContentTestRenderingComponent,
        TdMarkdownStaticContentTestRenderingComponent,
        TdMarkdownDymanicContentTestRenderingComponent,
        TdMarkdownSimpleLineBreaksTestRenderingComponent,

        TdMarkdownEmptyStaticContentTestEventsComponent,
        TdMarkdownStaticContentTestEventsComponent,
        TdMarkdownDynamicContentTestEventsComponent,
      ],
    });
    TestBed.compileComponents();
  }));

  describe('Rendering: ', () => {

    it('should render empty static content', async(() => {

      let fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownEmptyStaticContentTestRenderingComponent);
      let component: TdMarkdownEmptyStaticContentTestRenderingComponent = fixture.debugElement.componentInstance;
      let element: HTMLElement = fixture.nativeElement;

      expect(fixture.debugElement.query(By.css('td-markdown')).nativeElement.textContent.trim())
      .toBe(``);
      expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('td-markdown')).nativeElement.textContent.trim()).toBe('');
      });
    }));

    it('should render markup from static content', async(() => {

      let fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownStaticContentTestRenderingComponent);
      let component: TdMarkdownStaticContentTestRenderingComponent = fixture.debugElement.componentInstance;
      let element: HTMLElement = fixture.nativeElement;

      expect(fixture.debugElement.query(By.css('td-markdown')).nativeElement.textContent.trim())
      .toBe(`
        # title

        * list item`.trim());
      expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeTruthy();
        expect(element.querySelector('td-markdown div h1').textContent.trim()).toBe('title');
        expect(element.querySelector('td-markdown div ul li').textContent.trim()).toBe('list item');
      });
    }));

    it('should render newlines as <br/> if simpleLineBreaks is true', async(() => {

      let fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownSimpleLineBreaksTestRenderingComponent);
      let component: TdMarkdownSimpleLineBreaksTestRenderingComponent = fixture.debugElement.componentInstance;
      component.simpleLineBreaks = true;
      let element: HTMLElement = fixture.nativeElement;

      expect(fixture.debugElement.query(By.css('td-markdown')).nativeElement.textContent.trim())
        .toBe(`
        first line
        second line
        third line
        `.trim());
      expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeTruthy();
        expect(element.querySelector('td-markdown').querySelectorAll('br').length).toBe(2);
      });
    }));

    it('should not render newlines as <br/> if simpleLineBreaks is false', async(() => {

      let fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownSimpleLineBreaksTestRenderingComponent);
      let component: TdMarkdownSimpleLineBreaksTestRenderingComponent = fixture.debugElement.componentInstance;
      component.simpleLineBreaks = false;
      let element: HTMLElement = fixture.nativeElement;

      expect(fixture.debugElement.query(By.css('td-markdown')).nativeElement.textContent.trim())
        .toBe(`
        first line
        second line
        third line
        `.trim());
      expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeTruthy();
        expect(element.querySelector('td-markdown').querySelectorAll('br').length).toBe(0);
      });
    }));

    it('should render markup from dynamic content', async(() => {

      let fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownDymanicContentTestRenderingComponent);
      let component: TdMarkdownDymanicContentTestRenderingComponent = fixture.debugElement.componentInstance;
      component.content = `
      # another title

      ## subtitle

      \`\`\`
      pseudo code
      \`\`\``;
      let element: HTMLElement = fixture.nativeElement;

      expect(fixture.debugElement.query(By.css('td-markdown')).nativeElement.textContent.trim())
      .toBe('');
      expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeTruthy();
        expect(element.querySelector('td-markdown div h1').textContent.trim()).toBe('another title');
        expect(element.querySelector('td-markdown div h2').textContent.trim()).toBe('subtitle');
        expect(element.querySelector('td-markdown div code').textContent.trim()).toBe('pseudo code');
      });
    }));

    it('should render markup from dynamic content incorrectly', async(() => {

      let fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownDymanicContentTestRenderingComponent);
      let component: TdMarkdownDymanicContentTestRenderingComponent = fixture.debugElement.componentInstance;
      component.content = `
      # another title

        ## subtitle`;
      let element: HTMLElement = fixture.nativeElement;

      expect(fixture.debugElement.query(By.css('td-markdown')).nativeElement.textContent.trim())
      .toBe('');
      expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeTruthy();
        expect(element.querySelector('td-markdown div h1').textContent.trim()).toBe('another title');
        expect(element.querySelector('td-markdown div h2')).toBeFalsy();
        expect(element.querySelector('td-markdown div').textContent.trim()).toContain('## subtitle');
      });
    }));
  });

  describe('Event bindings: ', () => {

    describe('contentReady event: ', () => {

      it('should be fired only once after display renders empty static content', async(() => {

        let fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownEmptyStaticContentTestEventsComponent);
        let component: TdMarkdownEmptyStaticContentTestEventsComponent = fixture.debugElement.componentInstance;

        let eventSpy: jasmine.Spy = spyOn(component, 'tdMarkdownContentIsReady');

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(eventSpy.calls.count()).toBe(1);
        });
      }));

      it('should be fired only once after display renders markup from static content', async(() => {

        let fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownStaticContentTestEventsComponent);
        let component: TdMarkdownStaticContentTestEventsComponent = fixture.debugElement.componentInstance;

        let eventSpy: jasmine.Spy = spyOn(component, 'tdMarkdownContentIsReady');

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(eventSpy.calls.count()).toBe(1);
        });
      }));

      it('should be fired only once after display renders initial markup from dynamic content', async(() => {

        let fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownDynamicContentTestEventsComponent);
        let component: TdMarkdownDynamicContentTestEventsComponent = fixture.debugElement.componentInstance;
        let eventSpy: jasmine.Spy = spyOn(component, 'tdMarkdownContentIsReady');

        // Inital dynamic content
        component.content = `
        # another title

        ## subtitle

        \`\`\`
        pseudo code
        \`\`\``;

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(eventSpy.calls.count()).toBe(1);
        });
      }));

      it(`should be fired twice after changing the initial rendered markup dynamic content`, async(() => {

        let fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownDynamicContentTestEventsComponent);
        let component: TdMarkdownDynamicContentTestEventsComponent = fixture.debugElement.componentInstance;
        let eventSpy: jasmine.Spy = spyOn(component, 'tdMarkdownContentIsReady');

        component.content = `
        # another title

        ## subtitle

        \`\`\`
        pseudo code
        \`\`\``;

        fixture.detectChanges();

        component.content = `
        # changed title

        ## changed subtitle

        \`\`\`
        changed pseudo code
        \`\`\``;

        fixture.detectChanges();

        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(eventSpy.calls.count()).toBe(2);
        });
      }));
    });
  });
});

// Use the 3 components below to test the rendering requirements of the TdMarkdown component.
@Component({
  template: `
      <td-markdown>
      </td-markdown>`,
})
class TdMarkdownEmptyStaticContentTestRenderingComponent { }

@Component({
  template: `
      <td-markdown>
        # title

        * list item
      </td-markdown>`,
  preserveWhitespaces: true,
})
class TdMarkdownStaticContentTestRenderingComponent { }

@Component({
  template: `
      <td-markdown [content]="content">
      </td-markdown>`,
})
class TdMarkdownDymanicContentTestRenderingComponent {
  content: string;
}

@Component({
  template: `
      <td-markdown [simpleLineBreaks]="simpleLineBreaks">
        first line
        second line
        third line
      </td-markdown>
      `,
      preserveWhitespaces: true,
})
class TdMarkdownSimpleLineBreaksTestRenderingComponent {
  simpleLineBreaks: boolean;
}

// Use the 3 components below to test event binding requirements of the TdMarkdown component.
@Component({
  template: `
      <td-markdown (contentReady)="tdMarkdownContentIsReady()">
      </td-markdown>`,
})
class TdMarkdownEmptyStaticContentTestEventsComponent {
  tdMarkdownContentIsReady(): void { /* Stub */ }
}

@Component({
  template: `
      <td-markdown (contentReady)="tdMarkdownContentIsReady()">
        # title

        * list item
      </td-markdown>`,
  preserveWhitespaces: true,
})
class TdMarkdownStaticContentTestEventsComponent {
  tdMarkdownContentIsReady(): void { /* Stub */ }
}

@Component({
  template: `
      <td-markdown [content]="content" (contentReady)="tdMarkdownContentIsReady()">
      </td-markdown>`,
})
class TdMarkdownDynamicContentTestEventsComponent {
  content: string;
  tdMarkdownContentIsReady(): void { /* Stub */ }
}

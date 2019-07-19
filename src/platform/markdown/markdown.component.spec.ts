import {
  TestBed,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import 'hammerjs';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CovalentMarkdownModule } from './';

function anchorTestMarkdown(): string {
  const heading1: string = 'Heading 1';
  const heading2: string = 'Heading 2';
  let str: string = `* **[${heading1}](#heading-1)** \n * **[${heading2}](#heading-2)** \n`;
  const arr: number[] = Array(100).fill(0);
  arr.forEach(() => {
    str += '\n * item \n';
  });
  str += `\n # ${heading1} \n`;
  arr.forEach(() => {
    str += '\n * item \n';
  });
  str += `\n # ${heading2} \n`;
  return str;
}

function anchorTestNonEnglishMarkdown(): string {
  const heading1: string = 'L10Nテスト';
  const heading2: string = 'すべてが楽しいです!';
  const heading3: string = '誰もが一生に一度ローカライズする必要があります。';
  let str: string = `* **[${heading1}](#${heading1})** \n * **[${heading2}](#${heading2})** \n * **[${heading3}](#${heading3})** \n`;
  const arr: number[] = Array(100).fill(0);
  arr.forEach(() => {
    str += '\n * item \n';
  });
  str += `\n # ${heading1} \n`;
  arr.forEach(() => {
    str += '\n * item \n';
  });
  str += `\n # ${heading2} \n`;
  arr.forEach(() => {
    str += '\n * item \n';
  });
  str += `\n # ${heading3} \n`;
  return str;
}

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
        TdMarkdownAnchorsTestEventsComponent,
        TdMarkdownLinksTestEventsComponent,
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

    it('should jump to anchor when anchor input is changed', async(async () => {

      const fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownAnchorsTestEventsComponent);
      const component: TdMarkdownAnchorsTestEventsComponent = fixture.debugElement.componentInstance;
      component.content = anchorTestMarkdown();

      fixture.detectChanges();
      await fixture.whenStable();

      window.scrollTo(0, 0);
      const originalScrollPos: number = window.scrollY;
      component.anchor = 'heading 1';

      fixture.detectChanges();
      await fixture.whenStable();

      const heading1ScrollPos: number = window.scrollY;
      expect(heading1ScrollPos).toBeGreaterThan(originalScrollPos);

      component.anchor = 'heading 2';

      fixture.detectChanges();
      await fixture.whenStable();

      const heading2ScrollPos: number = window.scrollY;
      expect(heading2ScrollPos).toBeGreaterThan(heading1ScrollPos);

      component.anchor = 'heading 1';

      fixture.detectChanges();
      await fixture.whenStable();

      expect(window.scrollY).toBeLessThan(heading2ScrollPos);
    }));

    it('should jump to anchor if an anchor link is clicked', async(async () => {

      const fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownAnchorsTestEventsComponent);
      const component: TdMarkdownAnchorsTestEventsComponent = fixture.debugElement.componentInstance;
      component.content = anchorTestMarkdown();

      fixture.detectChanges();
      await fixture.whenStable();

      window.scrollTo(0, 0);
      const originalScrollPos: number = window.scrollY;
      const headings: HTMLElement[] = fixture.debugElement.nativeElement.querySelectorAll('a');
      const heading1: HTMLElement = headings[0];
      const heading2: HTMLElement = headings[1];
      heading1.click();

      fixture.detectChanges();
      await fixture.whenStable();

      const heading1ScrollPos: number = window.scrollY;
      expect(heading1ScrollPos).toBeGreaterThanOrEqual(originalScrollPos);

      heading2.click();

      fixture.detectChanges();
      await fixture.whenStable();

      const heading2ScrollPos: number = window.scrollY;
      expect(heading2ScrollPos).toBeGreaterThan(heading1ScrollPos);

      heading1.click();

      fixture.detectChanges();
      await fixture.whenStable();

      expect(window.scrollY).toBeLessThan(heading2ScrollPos);
    }));

    it('should jump to anchor if an anchor link is clicked regardless of lang', async(async () => {

      const fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownAnchorsTestEventsComponent);
      const component: TdMarkdownAnchorsTestEventsComponent = fixture.debugElement.componentInstance;
      component.content = anchorTestNonEnglishMarkdown();

      fixture.detectChanges();
      await fixture.whenStable();

      window.scrollTo(0, 0);
      const originalScrollPos: number = window.scrollY;
      const headings: HTMLElement[] = fixture.debugElement.nativeElement.querySelectorAll('a');
      const heading1: HTMLElement = headings[0];
      const heading2: HTMLElement = headings[1];
      heading1.click();

      fixture.detectChanges();
      await fixture.whenStable();

      const heading1ScrollPos: number = window.scrollY;
      expect(heading1ScrollPos).toBeGreaterThanOrEqual(originalScrollPos);

      heading2.click();

      fixture.detectChanges();
      await fixture.whenStable();

      const heading2ScrollPos: number = window.scrollY;
      expect(heading2ScrollPos).toBeGreaterThan(heading1ScrollPos);

      heading1.click();

      fixture.detectChanges();
      await fixture.whenStable();

      expect(window.scrollY).toBeLessThan(heading2ScrollPos);
    }));

    it('should generate the proper urls', async(async () => {

      const fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownLinksTestEventsComponent);
      const component: TdMarkdownLinksTestEventsComponent = fixture.debugElement.componentInstance;

      const ANCHOR: string = '#anchor';
      const CURRENT_MD_FILE: string = 'GETTING_STARTED.md';
      const SIBLING_MD_FILE: string = 'CONTRIBUTING.md';
      const ROOT_MD_FILE: string = 'README.md';
      const NON_RAW_LINK: string = 'https://github.com/Teradata/covalent/blob/develop/';
      const RAW_LINK: string = 'https://raw.githubusercontent.com/Teradata/covalent/develop/';
      const EXTERNAL_URL: string = 'https://angular.io/';
      const SUB_DIRECTORY: string = 'docs/';
      const links: string[][] =
        [
          [`${ANCHOR}`, `${ANCHOR}`],

          [`./${SIBLING_MD_FILE}`, `${RAW_LINK}${SUB_DIRECTORY}${SIBLING_MD_FILE}`],
          [`${SIBLING_MD_FILE}`, `${RAW_LINK}${SUB_DIRECTORY}${SIBLING_MD_FILE}`],
          [`../${ROOT_MD_FILE}`, `${RAW_LINK}${ROOT_MD_FILE}`],
          [`./${SIBLING_MD_FILE}${ANCHOR}`, `${RAW_LINK}${SUB_DIRECTORY}${SIBLING_MD_FILE}${ANCHOR}`],

          [`./${CURRENT_MD_FILE}`, `${RAW_LINK}${SUB_DIRECTORY}${CURRENT_MD_FILE}`],
          [`${CURRENT_MD_FILE}`, `${RAW_LINK}${SUB_DIRECTORY}${CURRENT_MD_FILE}`],
          [`./${CURRENT_MD_FILE}${ANCHOR}`, `${RAW_LINK}${SUB_DIRECTORY}${CURRENT_MD_FILE}${ANCHOR}`],

          [`/${ROOT_MD_FILE}`, `${RAW_LINK}${ROOT_MD_FILE}`],
          [`/${ROOT_MD_FILE}${ANCHOR}`, `${RAW_LINK}${ROOT_MD_FILE}${ANCHOR}`],

          [`${NON_RAW_LINK}${ROOT_MD_FILE}`, `${NON_RAW_LINK}${ROOT_MD_FILE}`],
          [`${NON_RAW_LINK}${ROOT_MD_FILE}${ANCHOR}`, `${NON_RAW_LINK}${ROOT_MD_FILE}${ANCHOR}`],
          [`${RAW_LINK}${ROOT_MD_FILE}`, `${RAW_LINK}${ROOT_MD_FILE}`],
          [`${RAW_LINK}${ROOT_MD_FILE}${ANCHOR}`, `${RAW_LINK}${ROOT_MD_FILE}${ANCHOR}`],

          [`${EXTERNAL_URL}${ROOT_MD_FILE}`, `${EXTERNAL_URL}${ROOT_MD_FILE}`],
          [`${EXTERNAL_URL}${ROOT_MD_FILE}${ANCHOR}`, `${EXTERNAL_URL}${ROOT_MD_FILE}${ANCHOR}`],
          [`${EXTERNAL_URL}`, `${EXTERNAL_URL}`],
          [`${EXTERNAL_URL}${ANCHOR}`, `${EXTERNAL_URL}${ANCHOR}`],
        ];

      let markdown: string = '';

      links.forEach((link: string[]) => {
        markdown += `* [${link[0]}](${link[0]}) \n`;
      });
      component.content = markdown;
      component.hostedUrl = `${RAW_LINK}${SUB_DIRECTORY}${CURRENT_MD_FILE}`;

      fixture.detectChanges();
      await fixture.whenStable();

      const anchorElements: HTMLElement[] = fixture.debugElement.nativeElement.querySelectorAll('a');
      function checkAnchors(): void {
        Array.from(anchorElements).forEach((anchorElement: HTMLAnchorElement, index: number) => {
          const href: string = anchorElement.getAttribute('href');
          const expectedHref: string = links[index][1];
          expect(href).toEqual(expectedHref);
        });
      }

      checkAnchors();
      component.hostedUrl = `${NON_RAW_LINK}${SUB_DIRECTORY}${CURRENT_MD_FILE}`;

      fixture.detectChanges();
      await fixture.whenStable();

      checkAnchors();
    }));
    it('should generate the proper image urls', async(async () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownLinksTestEventsComponent);
      const component: TdMarkdownLinksTestEventsComponent = fixture.debugElement.componentInstance;

      const CURRENT_MD_FILE: string = 'readme.md';
      const SIBLING_IMG: string = 'typescript.jpg';
      const ROOT_IMG: string = 'angular.png';
      const NON_RAW_LINK: string = 'https://github.com/Teradata/covalent/blob/develop/';
      const RAW_LINK: string = 'https://raw.githubusercontent.com/Teradata/covalent/develop/';
      const EXTERNAL_IMG: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
      const SUB_DIRECTORY: string = 'dir/';
      // these are not valid image urls
      const images: string[][] =
        [
          [`./${SIBLING_IMG}`, `${RAW_LINK}${SUB_DIRECTORY}${SIBLING_IMG}`],
          [`${SIBLING_IMG}`, `${RAW_LINK}${SUB_DIRECTORY}${SIBLING_IMG}`],
          [`../${ROOT_IMG}`, `${RAW_LINK}${ROOT_IMG}`],
          [`/${ROOT_IMG}`, `${RAW_LINK}${ROOT_IMG}`],
          [`${RAW_LINK}${ROOT_IMG}`, `${RAW_LINK}${ROOT_IMG}`],
          [`${EXTERNAL_IMG}`, `${EXTERNAL_IMG}`],
          [`${NON_RAW_LINK}${SUB_DIRECTORY}${SIBLING_IMG}`, `${RAW_LINK}${SUB_DIRECTORY}${SIBLING_IMG}`],
        ];

      let markdown: string = '';

      images.forEach((link: string[]) => {
        markdown += `* ![${link[0]}](${link[0]}) \n`;
      });
      component.content = markdown;
      component.hostedUrl = `${RAW_LINK}${SUB_DIRECTORY}${CURRENT_MD_FILE}`;

      fixture.detectChanges();
      await fixture.whenStable();

      const imageElements: HTMLImageElement[] = fixture.debugElement.nativeElement.querySelectorAll('img');
      function checkImages(): void {
        Array.from(imageElements).forEach((imageElement: HTMLImageElement, index: number) => {
          const src: string = imageElement.getAttribute('src');
          const expectedSrc: string = images[index][1];
          expect(src).toEqual(expectedSrc);
        });
      }

      checkImages();
      component.hostedUrl = `${NON_RAW_LINK}${SUB_DIRECTORY}${CURRENT_MD_FILE}`;

      fixture.detectChanges();
      await fixture.whenStable();

      checkImages();
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

@Component({
  template: `
      <td-markdown [anchor]="anchor" [content]="content"></td-markdown>`,
})
class TdMarkdownAnchorsTestEventsComponent {
  content: string;
  anchor: string;
}

@Component({
  template: `
      <td-markdown [content]="content" [hostedUrl]="hostedUrl"></td-markdown>`,
})
class TdMarkdownLinksTestEventsComponent {
  hostedUrl: string;
  content: string;
}

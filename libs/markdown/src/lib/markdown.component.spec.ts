import {
  TestBed,
  waitForAsync,
  ComponentFixture,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { ApplicationRef, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CovalentMarkdownModule } from './markdown.module';
import { TdMarkdownComponent } from './markdown.component';

// Implementing scrollIntoView since its not implemented JSDOM
window.HTMLElement.prototype.scrollIntoView = function () {
  // noop
};
window.scrollTo = function () {
  // noop
};

function anchorTestMarkdown(): string {
  const heading1 = 'Heading 1';
  const heading2 = 'Heading 2';
  let str = `* **[${heading1}](#heading-1)** \n * **[${heading2}](#heading-2)** \n`;
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
  const heading1 = 'L10Nテスト';
  const heading2 = 'すべてが楽しいです!';
  const heading3 = '誰もが一生に一度ローカライズする必要があります。';
  let str = `* **[${heading1}](#${heading1})** \n * **[${heading2}](#${heading2})** \n * **[${heading3}](#${heading3})** \n`;
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
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CovalentMarkdownModule],
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
    })
  );

  describe('Rendering: ', () => {
    it(
      'should render empty static content',
      waitForAsync(() => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdMarkdownEmptyStaticContentTestRenderingComponent
        );
        const element: HTMLElement = fixture.nativeElement;

        expect(
          fixture.debugElement
            .query(By.css('td-markdown'))
            .nativeElement.textContent.trim()
        ).toBe(``);
        expect(element.querySelector('td-markdown div')).toBeFalsy();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(element.querySelector('td-markdown div')).toBeFalsy();
          expect(
            fixture.debugElement
              .query(By.css('td-markdown'))
              .nativeElement.textContent.trim()
          ).toBe('');
        });
      })
    );

    it(
      'should render markup from static content',
      waitForAsync(() => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdMarkdownStaticContentTestRenderingComponent
        );
        const element: HTMLElement = fixture.nativeElement;

        expect(
          fixture.debugElement
            .query(By.css('td-markdown'))
            .nativeElement.textContent.trim()
        ).toBe(
          `
        # title

        * list item`.trim()
        );
        expect(element.querySelector('td-markdown div')).toBeFalsy();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(element.querySelector('td-markdown div')).toBeTruthy();
          expect(
            element.querySelector('td-markdown div h1')?.textContent?.trim()
          ).toBe('title');
          expect(
            element.querySelector('td-markdown div ul li')?.textContent?.trim()
          ).toBe('list item');
        });
      })
    );

    it(
      'should render newlines as <br/> if simpleLineBreaks is true',
      waitForAsync(() => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdMarkdownSimpleLineBreaksTestRenderingComponent
        );
        const component: TdMarkdownSimpleLineBreaksTestRenderingComponent =
          fixture.debugElement.componentInstance;
        component.simpleLineBreaks = true;
        const element: HTMLElement = fixture.nativeElement;

        expect(
          fixture.debugElement
            .query(By.css('td-markdown'))
            .nativeElement.textContent.trim()
        ).toBe(
          `
        first line
        second line
        third line
        `.trim()
        );
        expect(element.querySelector('td-markdown div')).toBeFalsy();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(element.querySelector('td-markdown div')).toBeTruthy();
            expect(
              element.querySelector('td-markdown')?.querySelectorAll('br')
                .length
            ).toBe(2);
          });
        });
      })
    );

    it(
      'should not render newlines as <br/> if simpleLineBreaks is false',
      waitForAsync(() => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdMarkdownSimpleLineBreaksTestRenderingComponent
        );
        const component: TdMarkdownSimpleLineBreaksTestRenderingComponent =
          fixture.debugElement.componentInstance;
        component.simpleLineBreaks = false;
        const element: HTMLElement = fixture.nativeElement;

        expect(
          fixture.debugElement
            .query(By.css('td-markdown'))
            .nativeElement.textContent.trim()
        ).toBe(
          `
        first line
        second line
        third line
        `.trim()
        );
        expect(element.querySelector('td-markdown div')).toBeFalsy();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(element.querySelector('td-markdown div')).toBeTruthy();
            expect(
              element.querySelector('td-markdown')?.querySelectorAll('br')
                .length
            ).toBe(0);
          });
        });
      })
    );

    it(
      'should render markup from dynamic content',
      waitForAsync(() => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdMarkdownDymanicContentTestRenderingComponent
        );
        const component: TdMarkdownDymanicContentTestRenderingComponent =
          fixture.debugElement.componentInstance;
        component.content = `
      # another title

      ## subtitle

      \`\`\`
      pseudo code
      \`\`\``;
        const element: HTMLElement = fixture.nativeElement;

        expect(
          fixture.debugElement
            .query(By.css('td-markdown'))
            .nativeElement.textContent.trim()
        ).toBe('');
        expect(element.querySelector('td-markdown div')).toBeFalsy();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(element.querySelector('td-markdown div')).toBeTruthy();
          expect(
            element.querySelector('td-markdown div h1')?.textContent?.trim()
          ).toBe('another title');
          expect(
            element.querySelector('td-markdown div h2')?.textContent?.trim()
          ).toBe('subtitle');
          expect(
            element.querySelector('td-markdown div code')?.textContent?.trim()
          ).toBe('pseudo code');
        });
      })
    );

    it(
      'should render markup from dynamic content incorrectly',
      waitForAsync(() => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdMarkdownDymanicContentTestRenderingComponent
        );
        const component: TdMarkdownDymanicContentTestRenderingComponent =
          fixture.debugElement.componentInstance;
        component.content = `
      # another title

        ## subtitle`;
        const element: HTMLElement = fixture.nativeElement;

        expect(
          fixture.debugElement
            .query(By.css('td-markdown'))
            .nativeElement.textContent.trim()
        ).toBe('');
        expect(element.querySelector('td-markdown div')).toBeFalsy();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(element.querySelector('td-markdown div')).toBeTruthy();
          expect(
            element.querySelector('td-markdown div h1')?.textContent?.trim()
          ).toBe('another title');
          expect(element.querySelector('td-markdown div h2')).toBeFalsy();
          expect(
            element.querySelector('td-markdown div')?.textContent?.trim()
          ).toContain('## subtitle');
        });
      })
    );

    it(
      'should jump to anchor when anchor input is changed',
      waitForAsync(async () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdMarkdownAnchorsTestEventsComponent
        );
        const component: TdMarkdownAnchorsTestEventsComponent =
          fixture.debugElement.componentInstance;
        component.content = anchorTestMarkdown();

        fixture.detectChanges();
        await fixture.whenStable();

        window.scrollTo(0, 0);
        const originalScrollPos: number = window.scrollY;
        component.anchor = 'heading 1';

        fixture.detectChanges();
        await fixture.whenStable();

        const heading1ScrollPos: number = window.scrollY;
        expect(heading1ScrollPos).toBeGreaterThanOrEqual(originalScrollPos);

        component.anchor = 'heading 2';

        fixture.detectChanges();
        await fixture.whenStable();

        const heading2ScrollPos: number = window.scrollY;
        expect(heading2ScrollPos).toBeGreaterThanOrEqual(heading1ScrollPos);

        component.anchor = 'heading 1';

        fixture.detectChanges();
        await fixture.whenStable();

        expect(window.scrollY).toBeLessThanOrEqual(heading2ScrollPos);
      })
    );

    it(
      'should jump to anchor if an anchor link is clicked',
      waitForAsync(async () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdMarkdownAnchorsTestEventsComponent
        );
        const component: TdMarkdownAnchorsTestEventsComponent =
          fixture.debugElement.componentInstance;
        component.content = anchorTestMarkdown();

        fixture.detectChanges();
        await fixture.whenStable();

        window.scrollTo(0, 0);
        const originalScrollPos: number = window.scrollY;
        const headings: HTMLElement[] =
          fixture.debugElement.nativeElement.querySelectorAll('a');
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
        expect(heading2ScrollPos).toBeGreaterThanOrEqual(heading1ScrollPos);

        heading1.click();

        fixture.detectChanges();
        await fixture.whenStable();

        expect(window.scrollY).toBeLessThanOrEqual(heading2ScrollPos);
      })
    );

    it('should jump to anchor if an anchor link is clicked but should not run change detection', async () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(
        TdMarkdownAnchorsTestEventsComponent
      );
      const component: TdMarkdownAnchorsTestEventsComponent =
        fixture.debugElement.componentInstance;
      component.content = anchorTestMarkdown();

      fixture.detectChanges();
      await fixture.whenStable();

      const appRef: ApplicationRef = TestBed.inject(ApplicationRef);
      jest.spyOn(appRef, 'tick');

      window.scrollTo(0, 0);
      const originalScrollPos: number = window.scrollY;
      const heading: HTMLElement =
        fixture.debugElement.nativeElement.querySelector('a');

      const event: Event = new Event('click', { bubbles: true });
      jest.spyOn(event, 'preventDefault');

      heading.dispatchEvent(event);

      const headingScrollPos: number = window.scrollY;

      expect(appRef.tick).not.toHaveBeenCalled();
      expect(event.preventDefault).toHaveBeenCalled();
      expect(headingScrollPos).toBeGreaterThanOrEqual(originalScrollPos);
    });

    it('should emit `contentReady` and should not run change detection', fakeAsync(() => {
      const contentReadySpy: jest.Mock = jest.fn();
      const fixture: ComponentFixture<any> = TestBed.createComponent(
        TdMarkdownAnchorsTestEventsComponent
      );
      const component: TdMarkdownAnchorsTestEventsComponent =
        fixture.debugElement.componentInstance;
      component.anchor = 'heading 1';
      component.content = anchorTestMarkdown();

      const originalScrollPos: number = window.scrollY;
      const { componentInstance } = fixture.debugElement.query(
        By.directive(TdMarkdownComponent)
      );
      componentInstance.contentReady.subscribe(contentReadySpy);

      fixture.detectChanges();

      const appRef: ApplicationRef = TestBed.inject(ApplicationRef);
      jest.spyOn(appRef, 'tick');

      tick(250);

      expect(appRef.tick).not.toHaveBeenCalled();
      expect(contentReadySpy).toHaveBeenCalled();
    }));

    it(
      'should jump to anchor if an anchor link is clicked regardless of lang',
      waitForAsync(async () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdMarkdownAnchorsTestEventsComponent
        );
        const component: TdMarkdownAnchorsTestEventsComponent =
          fixture.debugElement.componentInstance;
        component.content = anchorTestNonEnglishMarkdown();

        fixture.detectChanges();
        await fixture.whenStable();

        window.scrollTo(0, 0);
        const originalScrollPos: number = window.scrollY;
        const headings: HTMLElement[] =
          fixture.debugElement.nativeElement.querySelectorAll('a');
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
        expect(heading2ScrollPos).toBeGreaterThanOrEqual(heading1ScrollPos);

        heading1.click();

        fixture.detectChanges();
        await fixture.whenStable();

        expect(window.scrollY).toBeLessThanOrEqual(heading2ScrollPos);
      })
    );

    it(
      'should generate the proper urls',
      waitForAsync(async () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdMarkdownLinksTestEventsComponent
        );
        const component: TdMarkdownLinksTestEventsComponent =
          fixture.debugElement.componentInstance;

        const ANCHOR = '#anchor';
        const CURRENT_MD_FILE = 'GETTING_STARTED.md';
        const ROOT_MD_FILE = 'README.md';
        const NON_RAW_LINK = 'https://github.com/Teradata/covalent/blob/main/';
        const RAW_LINK =
          'https://raw.githubusercontent.com/Teradata/covalent/main/';
        const EXTERNAL_URL = 'https://angular.io/';
        const SUB_DIRECTORY = 'docs/';
        const links: string[][] = [
          [`${ANCHOR}`, `${ANCHOR}`],
          [`${NON_RAW_LINK}${ROOT_MD_FILE}`, `${NON_RAW_LINK}${ROOT_MD_FILE}`],
          [
            `${NON_RAW_LINK}${ROOT_MD_FILE}${ANCHOR}`,
            `${NON_RAW_LINK}${ROOT_MD_FILE}${ANCHOR}`,
          ],
          [`${RAW_LINK}${ROOT_MD_FILE}`, `${RAW_LINK}${ROOT_MD_FILE}`],
          [
            `${RAW_LINK}${ROOT_MD_FILE}${ANCHOR}`,
            `${RAW_LINK}${ROOT_MD_FILE}${ANCHOR}`,
          ],

          [`${EXTERNAL_URL}${ROOT_MD_FILE}`, `${EXTERNAL_URL}${ROOT_MD_FILE}`],
          [
            `${EXTERNAL_URL}${ROOT_MD_FILE}${ANCHOR}`,
            `${EXTERNAL_URL}${ROOT_MD_FILE}${ANCHOR}`,
          ],
          [`${EXTERNAL_URL}`, `${EXTERNAL_URL}`],
          [`${EXTERNAL_URL}${ANCHOR}`, `${EXTERNAL_URL}${ANCHOR}`],
        ];

        let markdown = '';

        links.forEach((link: string[]) => {
          markdown += `* [${link[0]}](${link[0]}) \n`;
        });
        component.content = markdown;
        component.hostedUrl = `${RAW_LINK}${SUB_DIRECTORY}${CURRENT_MD_FILE}`;

        fixture.detectChanges();
        await fixture.whenStable();

        const anchorElements: HTMLAnchorElement[] =
          fixture.debugElement.nativeElement.querySelectorAll('a');
        function checkAnchors(): void {
          Array.from<HTMLAnchorElement>(anchorElements).forEach(
            (anchorElement: HTMLAnchorElement, index: number) => {
              const href = anchorElement.getAttribute('href');
              const expectedHref: string = links[index][1];
              expect(href).toEqual(expectedHref);
            }
          );
        }

        checkAnchors();
        component.hostedUrl = `${NON_RAW_LINK}${SUB_DIRECTORY}${CURRENT_MD_FILE}`;

        fixture.detectChanges();
        await fixture.whenStable();

        checkAnchors();
      })
    );
    it(
      'should generate the proper image urls',
      waitForAsync(async () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdMarkdownLinksTestEventsComponent
        );
        const component: TdMarkdownLinksTestEventsComponent =
          fixture.debugElement.componentInstance;

        const CURRENT_MD_FILE = 'readme.md';
        const SIBLING_IMG = 'typescript.jpg';
        const ROOT_IMG = 'angular.png';
        const NON_RAW_LINK = 'https://github.com/Teradata/covalent/blob/main/';
        const RAW_LINK =
          'https://raw.githubusercontent.com/Teradata/covalent/main/';
        const EXTERNAL_IMG =
          'https://angular.io/assets/images/logos/angular/angular.svg';
        const SUB_DIRECTORY = 'dir/';
        const SVG_IMG = 'src/assets/icons/covalent.svg';
        // these are not valid image urls
        const images: string[][] = [
          [`./${SIBLING_IMG}`, `${RAW_LINK}${SUB_DIRECTORY}${SIBLING_IMG}`],
          [`${SIBLING_IMG}`, `${RAW_LINK}${SUB_DIRECTORY}${SIBLING_IMG}`],
          [`../${ROOT_IMG}`, `${RAW_LINK}${ROOT_IMG}`],
          [`/${ROOT_IMG}`, `${RAW_LINK}${ROOT_IMG}`],
          [`${RAW_LINK}${ROOT_IMG}`, `${RAW_LINK}${ROOT_IMG}`],
          [`${EXTERNAL_IMG}`, `${EXTERNAL_IMG}`],
          [
            `${NON_RAW_LINK}${SUB_DIRECTORY}${SIBLING_IMG}`,
            `${RAW_LINK}${SUB_DIRECTORY}${SIBLING_IMG}`,
          ],
          [`${NON_RAW_LINK}${SVG_IMG}`, `${RAW_LINK}${SVG_IMG}?sanitize=true`],
        ];

        let markdown = '';

        images.forEach((link: string[]) => {
          markdown += `* ![${link[0]}](${link[0]}) \n`;
        });
        component.content = markdown;
        component.hostedUrl = `${RAW_LINK}${SUB_DIRECTORY}${CURRENT_MD_FILE}`;

        fixture.detectChanges();
        await fixture.whenStable();

        const imageElements: HTMLImageElement[] =
          fixture.debugElement.nativeElement.querySelectorAll('img');
        function checkImages(): void {
          Array.from(imageElements).forEach(
            (imageElement: HTMLImageElement, index: number) => {
              const src = imageElement.getAttribute('src');
              const expectedSrc: string = images[index][1];
              expect(src).toEqual(expectedSrc);
            }
          );
        }

        checkImages();
        component.hostedUrl = `${NON_RAW_LINK}${SUB_DIRECTORY}${CURRENT_MD_FILE}`;

        fixture.detectChanges();
        await fixture.whenStable();

        checkImages();
      })
    );
  });

  describe('Event bindings: ', () => {
    describe('contentReady event: ', () => {
      it(
        'should be fired only once after display renders empty static content',
        waitForAsync(() => {
          const fixture: ComponentFixture<any> = TestBed.createComponent(
            TdMarkdownEmptyStaticContentTestEventsComponent
          );
          const component: TdMarkdownEmptyStaticContentTestEventsComponent =
            fixture.debugElement.componentInstance;

          jest.spyOn(component, 'tdMarkdownContentIsReady');

          fixture.detectChanges();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(component.tdMarkdownContentIsReady).toHaveBeenCalledTimes(1);
          });
        })
      );

      it(
        'should be fired only once after display renders markup from static content',
        waitForAsync(() => {
          const fixture: ComponentFixture<any> = TestBed.createComponent(
            TdMarkdownStaticContentTestEventsComponent
          );
          const component: TdMarkdownStaticContentTestEventsComponent =
            fixture.debugElement.componentInstance;

          jest.spyOn(component, 'tdMarkdownContentIsReady');

          fixture.detectChanges();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(component.tdMarkdownContentIsReady).toHaveBeenCalledTimes(1);
          });
        })
      );

      it(
        'should be fired only once after display renders initial markup from dynamic content',
        waitForAsync(() => {
          const fixture: ComponentFixture<any> = TestBed.createComponent(
            TdMarkdownDynamicContentTestEventsComponent
          );
          const component: TdMarkdownDynamicContentTestEventsComponent =
            fixture.debugElement.componentInstance;
          jest.spyOn(component, 'tdMarkdownContentIsReady');

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
            expect(component.tdMarkdownContentIsReady).toHaveBeenCalledTimes(1);
          });
        })
      );

      it(
        `should be fired twice after changing the initial rendered markup dynamic content`,
        waitForAsync(() => {
          const fixture: ComponentFixture<any> = TestBed.createComponent(
            TdMarkdownDynamicContentTestEventsComponent
          );
          const component: TdMarkdownDynamicContentTestEventsComponent =
            fixture.debugElement.componentInstance;
          jest.spyOn(component, 'tdMarkdownContentIsReady');

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
            expect(component.tdMarkdownContentIsReady).toHaveBeenCalledTimes(2);
          });
        })
      );
    });
  });
});

// Use the 3 components below to test the rendering requirements of the TdMarkdown component.
@Component({
  template: ` <td-markdown></td-markdown> `,
})
class TdMarkdownEmptyStaticContentTestRenderingComponent {}

@Component({
  // prettier-ignore
  template: `
      <td-markdown>
        # title

        * list item
      </td-markdown>`,
  preserveWhitespaces: true,
})
class TdMarkdownStaticContentTestRenderingComponent {}

@Component({
  template: ` <td-markdown [content]="content"></td-markdown> `,
})
class TdMarkdownDymanicContentTestRenderingComponent {
  content!: string;
}

@Component({
  // prettier-ignore
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
  simpleLineBreaks!: boolean;
}

// Use the 3 components below to test event binding requirements of the TdMarkdown component.
@Component({
  template: `
    <td-markdown (contentReady)="tdMarkdownContentIsReady()"></td-markdown>
  `,
})
class TdMarkdownEmptyStaticContentTestEventsComponent {
  tdMarkdownContentIsReady(): void {
    /* Stub */
  }
}

@Component({
  // prettier-ignore
  template: `
      <td-markdown (contentReady)="tdMarkdownContentIsReady()">
        # title

        * list item
      </td-markdown>`,
  preserveWhitespaces: true,
})
class TdMarkdownStaticContentTestEventsComponent {
  tdMarkdownContentIsReady(): void {
    /* Stub */
  }
}

@Component({
  template: `
    <td-markdown
      [content]="content"
      (contentReady)="tdMarkdownContentIsReady()"
    ></td-markdown>
  `,
})
class TdMarkdownDynamicContentTestEventsComponent {
  content!: string;
  tdMarkdownContentIsReady(): void {
    /* Stub */
  }
}

@Component({
  template: `
    <td-markdown [anchor]="anchor" [content]="content"></td-markdown>
  `,
})
class TdMarkdownAnchorsTestEventsComponent {
  content!: string;
  anchor!: string;
}

@Component({
  template: `
    <td-markdown [content]="content" [hostedUrl]="hostedUrl"></td-markdown>
  `,
})
class TdMarkdownLinksTestEventsComponent {
  hostedUrl!: string;
  content!: string;
}

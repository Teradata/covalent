import { async, ComponentFixture, TestBed, inject, waitForAsync } from '@angular/core/testing';
import {
  TdMarkdownNavigatorComponent,
  IMarkdownNavigatorItem,
  IMarkdownNavigatorLabels,
  DEFAULT_MARKDOWN_NAVIGATOR_LABELS,
  IMarkdownNavigatorCompareWith,
} from './markdown-navigator.component';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, Type } from '@angular/core';
import { CovalentMarkdownNavigatorModule } from './markdown-navigator.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

const RAW_MARKDOWN_HEADING: string = 'Heading';
const RAW_MARKDOWN: string = `# ${RAW_MARKDOWN_HEADING}`;

const URL_ITEM: IMarkdownNavigatorItem[] = [
  {
    url: 'https://github.com/Teradata/covalent/blob/develop/README.md',
  },
];
const RAW_MARKDOWN_ITEM: IMarkdownNavigatorItem[] = [
  {
    markdownString: RAW_MARKDOWN,
  },
];

const FLAT_MIXED_ITEMS: IMarkdownNavigatorItem[] = [...URL_ITEM, ...RAW_MARKDOWN_ITEM];

const ITEMS_WITH_CUSTOM_ICONS: IMarkdownNavigatorItem[] = [
  { ...URL_ITEM[0], icon: 'whatshot' },
  { ...RAW_MARKDOWN_ITEM[0], icon: 'touch_app' },
];

const ITEMS_WITH_DESCRIPTIONS: IMarkdownNavigatorItem[] = [
  {
    ...URL_ITEM[0],
    description: 'An introduction into what Covalent is all about',
  },
  { ...RAW_MARKDOWN_ITEM[0], description: 'An example of using raw markdown' },
];

const NESTED_MIXED_ITEMS: IMarkdownNavigatorItem[] = [
  {
    title: 'First item',
    children: URL_ITEM,
  },
  {
    title: 'Second item',
    children: RAW_MARKDOWN_ITEM,
  },
];

@Component({
  template: `
    <div>Footer A Content</div>
  `,
})
export class FooterAComponent {}

@Component({
  template: `
    <div>Global Footer Content</div>
  `,
})
export class GlobalFooterComponent {}

const ITEMS_WITH_FOOTERS: IMarkdownNavigatorItem[] = [
  {
    markdownString: `Footer A`,
    footer: FooterAComponent,
  },
  {
    markdownString: `Global Footer`,
  },
];

const CHILDREN_URL: string = 'https://samplechildrenurl.com';

const ITEMS_WITH_CHILDREN_URL: IMarkdownNavigatorItem[] = [
  {
    title: 'Children url',
    id: 'root',
    childrenUrl: CHILDREN_URL,
  },
];

export const DEEPLY_NESTED_TREE: IMarkdownNavigatorItem[] = [
  {
    title: 'A',
    id: 'A_ID',
    children: [
      {
        title: 'A1',
        children: [
          {
            markdownString: 'A1I',
            title: 'A1I',
          },
          {
            markdownString: 'A1II',
            title: 'A1II',
          },
        ],
      },
      {
        title: 'A2',
        children: [
          {
            markdownString: 'A2I',
            title: 'A2I',
          },
          {
            markdownString: 'A2II',
            title: 'A2II',
          },
        ],
      },
    ],
  },
  {
    title: 'B',
    children: [
      {
        title: 'B1',
        children: [
          {
            markdownString: 'B1I',
            title: 'B1I',
          },
          {
            markdownString: 'B1II',
            title: 'B1II',
          },
        ],
      },
      {
        title: 'B2',
        children: [
          {
            markdownString: 'B2I',
            title: 'B2I',
          },
          {
            markdownString: 'B2II',
            title: 'B2II',
          },
        ],
      },
    ],
  },
];

export const ITEMS_AT_SAME_LEVEL_AS_MARKDOWN: IMarkdownNavigatorItem[] = [
  {
    title: 'A',
    markdownString: `A markdown`,
    children: [
      {
        title: 'A1',
        markdownString: `A1 markdown`,
      },
    ],
  },
  {
    title: 'B',
    markdownString: 'B',
  },
];

async function wait(fixture: ComponentFixture<TdMarkdownNavigatorTestComponent>): Promise<void> {
  fixture.detectChanges();
  await fixture.whenStable();
}
function getItem(fixture: ComponentFixture<TdMarkdownNavigatorTestComponent>, index: number): HTMLElement {
  return fixture.debugElement.queryAll(By.css('mat-action-list button'))[index].nativeElement;
}
async function goBack(fixture: ComponentFixture<TdMarkdownNavigatorTestComponent>): Promise<void> {
  fixture.debugElement.query(By.css('.mat-icon-button[data-test="back-button"]')).nativeElement.click();
  await wait(fixture);
}

async function goHome(fixture: ComponentFixture<TdMarkdownNavigatorTestComponent>): Promise<void> {
  fixture.debugElement.query(By.css('.mat-icon-button[data-test="home-button"]')).nativeElement.click();
  await wait(fixture);
}
function getMarkdown(fixture: ComponentFixture<TdMarkdownNavigatorTestComponent>): string {
  return fixture.debugElement.query(By.css('td-flavored-markdown ')).nativeElement.textContent;
}

function getTitle(fixture: ComponentFixture<TdMarkdownNavigatorTestComponent>): string {
  return fixture.debugElement.query(By.css('[data-test="title"]')).nativeElement.textContent;
}

export function compareByTitle(o1: IMarkdownNavigatorItem, o2: IMarkdownNavigatorItem): boolean {
  return o1.title === o2.title;
}

async function validateTree(fixture: ComponentFixture<TdMarkdownNavigatorTestComponent>): Promise<void> {
  expect(getItem(fixture, 0).textContent).toContain('A');
  getItem(fixture, 0).click();
  await wait(fixture);
  expect(getTitle(fixture)).toContain('A');
  expect(getItem(fixture, 0).textContent).toContain('A1');
  getItem(fixture, 0).click();
  await wait(fixture);
  expect(getTitle(fixture)).toContain('A1');
  expect(getItem(fixture, 0).textContent).toContain('A1I');
  getItem(fixture, 0).click();
  await wait(fixture);
  expect(getTitle(fixture)).toContain('A1I');
  expect(getMarkdown(fixture)).toContain('A1I');
  await goBack(fixture);
  expect(getItem(fixture, 1).textContent).toContain('A1II');
  getItem(fixture, 1).click();
  await wait(fixture);
  expect(getTitle(fixture)).toContain('A1II');
  expect(getMarkdown(fixture)).toContain('A1II');
  await goBack(fixture);
  await goBack(fixture);
  expect(getItem(fixture, 1).textContent).toContain('A2');
  getItem(fixture, 1).click();
  await wait(fixture);
  expect(getTitle(fixture)).toContain('A2');
  expect(getItem(fixture, 0).textContent).toContain('A2I');
  getItem(fixture, 0).click();
  await wait(fixture);
  expect(getTitle(fixture)).toContain('A2I');
  expect(getMarkdown(fixture)).toContain('A2I');
  await goBack(fixture);
  expect(getItem(fixture, 1).textContent).toContain('A2II');
  getItem(fixture, 1).click();
  await wait(fixture);
  expect(getTitle(fixture)).toContain('A2II');
  expect(getMarkdown(fixture)).toContain('A2II');
  await goBack(fixture);
  await goBack(fixture);
  await goBack(fixture);
  expect(getItem(fixture, 1).textContent).toContain('B');
  getItem(fixture, 1).click();
  await wait(fixture);
  expect(getTitle(fixture)).toContain('B');
  expect(getItem(fixture, 0).textContent).toContain('B1');
  getItem(fixture, 0).click();
  await wait(fixture);
  expect(getTitle(fixture)).toContain('B1');
  expect(getItem(fixture, 0).textContent).toContain('B1I');
  getItem(fixture, 0).click();
  await wait(fixture);
  expect(getTitle(fixture)).toContain('B1I');
  expect(getMarkdown(fixture)).toContain('B1I');
  await goBack(fixture);
  expect(getItem(fixture, 1).textContent).toContain('B1II');
  getItem(fixture, 1).click();
  await wait(fixture);
  expect(getTitle(fixture)).toContain('B1II');
  expect(getMarkdown(fixture)).toContain('B1II');
  await goBack(fixture);
  await goBack(fixture);
  expect(getItem(fixture, 1).textContent).toContain('B2');
  getItem(fixture, 1).click();
  await wait(fixture);
  expect(getTitle(fixture)).toContain('B2');
  expect(getItem(fixture, 0).textContent).toContain('B2I');
  getItem(fixture, 0).click();
  await wait(fixture);
  expect(getTitle(fixture)).toContain('B2I');
  expect(getMarkdown(fixture)).toContain('B2I');
  await goBack(fixture);
  expect(getItem(fixture, 1).textContent).toContain('B2II');
  getItem(fixture, 1).click();
  await wait(fixture);
  expect(getTitle(fixture)).toContain('B2II');
  expect(getMarkdown(fixture)).toContain('B2II');
}
@Component({
  selector: 'td-markdown-navigator-test',
  template: `
    <td-markdown-navigator
      [items]="items"
      [style.height.px]="450"
      [labels]="labels"
      [startAt]="startAt"
      [compareWith]="compareWith"
      [footer]="footer"
    ></td-markdown-navigator>
  `,
})
class TdMarkdownNavigatorTestComponent {
  items: IMarkdownNavigatorItem[] = [];
  labels: IMarkdownNavigatorLabels;
  startAt: IMarkdownNavigatorItem | IMarkdownNavigatorItem[];
  compareWith: IMarkdownNavigatorCompareWith;
  footer: Type<any>;
}

describe('MarkdownNavigatorComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TdMarkdownNavigatorTestComponent],
        imports: [NoopAnimationsModule, CovalentMarkdownNavigatorModule, HttpClientTestingModule],
      }).compileComponents();

      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
    }),
  );

  it(
    'should render empty state when an empty array is passed into items',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = [];
        await wait(fixture);

        const markdownNavigator: TdMarkdownNavigatorComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorComponent),
        ).componentInstance;

        expect(markdownNavigator.showEmptyState).toBeTruthy();
        expect(markdownNavigator.loading).toBeFalsy();
        expect(markdownNavigator.showGoBackButton).toBeFalsy();
        expect(markdownNavigator.showMenu).toBeFalsy();
        expect(markdownNavigator.showTdMarkdown).toBeFalsy();
        expect(markdownNavigator.showTdMarkdownLoader).toBeFalsy();
      }),
    ),
  );

  it(
    'should render empty state when undefined is passed into items',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = undefined;
        await wait(fixture);

        const markdownNavigator: TdMarkdownNavigatorComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorComponent),
        ).componentInstance;

        expect(markdownNavigator.showEmptyState).toBeTruthy();
        expect(markdownNavigator.loading).toBeFalsy();
        expect(markdownNavigator.showGoBackButton).toBeFalsy();
        expect(markdownNavigator.showMenu).toBeFalsy();
        expect(markdownNavigator.showTdMarkdown).toBeFalsy();
        expect(markdownNavigator.showTdMarkdownLoader).toBeFalsy();
      }),
    ),
  );

  it(
    'should render one raw markdown item',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = RAW_MARKDOWN_ITEM;
        await wait(fixture);

        const markdownNavigator: TdMarkdownNavigatorComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorComponent),
        ).componentInstance;

        expect(markdownNavigator.showEmptyState).toBeFalsy();
        expect(markdownNavigator.loading).toBeFalsy();
        expect(markdownNavigator.showGoBackButton).toBeFalsy();
        expect(markdownNavigator.showMenu).toBeFalsy();
        expect(markdownNavigator.showTdMarkdown).toBeTruthy();
        expect(markdownNavigator.showTdMarkdownLoader).toBeFalsy();
      }),
    ),
  );

  it(
    'should fetch childrenUrl and render',
    waitForAsync(
      inject([], async () => {
        const itemATitle: string = 'fetched item A';
        const itemBTitle: string = 'fetched item B';

        const testData: IMarkdownNavigatorItem[] = [{ title: itemATitle }, { title: itemBTitle }];
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = ITEMS_WITH_CHILDREN_URL;
        await wait(fixture);

        const markdownNavigator: TdMarkdownNavigatorComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorComponent),
        ).componentInstance;

        expect(markdownNavigator.showMenu).toBeTruthy();
        expect(markdownNavigator.showTdMarkdown).toBeFalsy();

        getItem(fixture, 0).click();
        const req: TestRequest = httpTestingController.expectOne(CHILDREN_URL);
        req.flush(testData);

        await wait(fixture);
        await wait(fixture);

        expect(markdownNavigator.showMenu).toBeTruthy();
        expect(markdownNavigator.showTdMarkdown).toBeFalsy();
        expect(getItem(fixture, 0).textContent).toContain(itemATitle);
        expect(getItem(fixture, 1).textContent).toContain(itemBTitle);

        httpTestingController.verify();
      }),
    ),
  );

  it(
    'should show proper error messages',
    waitForAsync(
      inject([], async () => {
        const invalidMarkdownUrl: string = 'https://invalid_markdown_url.com';
        const invalidChildrenUrl: string = 'https://invalid_children_url.com';
        const ITEMS_WITH_ERRORS: IMarkdownNavigatorItem[] = [
          {
            title: 'Invalid markdown url',
            url: invalidMarkdownUrl,
            children: [
              {
                title: 'Invalid children url',
                childrenUrl: invalidChildrenUrl,
              },
            ],
          },
          { title: 'Invalid markdown and children url', url: invalidMarkdownUrl, childrenUrl: invalidChildrenUrl },
        ];
        const invalidMarkdownUrlOptions: object = { status: 404, statusText: 'Not Found' };
        const message: string = 'Failed :(';
        function getMarkdownLoaderError(): HTMLElement {
          return (fixture.debugElement.query(By.css('[data-test="markdown-loader-error"]')) || {}).nativeElement;
        }
        function getChildrenUrlError(): HTMLElement {
          return (fixture.debugElement.query(By.css('[data-test="children-url-error"]')) || {}).nativeElement;
        }

        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );
        fixture.componentInstance.items = ITEMS_WITH_ERRORS;

        await wait(fixture);
        getItem(fixture, 0).click();
        await wait(fixture);

        const invalidMarkdownUrlRequest: TestRequest = httpTestingController.expectOne(invalidMarkdownUrl);
        invalidMarkdownUrlRequest.flush(message, invalidMarkdownUrlOptions);

        await wait(fixture);
        await wait(fixture);
        await wait(fixture);

        expect(getMarkdownLoaderError()).toBeTruthy();
        expect(getMarkdownLoaderError().textContent).toContain('Not Found');

        getItem(fixture, 0).click();
        const invalidChildrenUrlRequest: TestRequest = httpTestingController.expectOne(invalidChildrenUrl);
        invalidChildrenUrlRequest.flush(message, invalidMarkdownUrlOptions);

        await wait(fixture);
        await wait(fixture);
        await wait(fixture);

        expect(getMarkdownLoaderError()).toBeFalsy();
        expect(getChildrenUrlError()).toBeTruthy();
        goBack(fixture);

        const invalidMarkdownUrlRequest2: TestRequest = httpTestingController.expectOne(invalidMarkdownUrl);
        invalidMarkdownUrlRequest2.flush(message, invalidMarkdownUrlOptions);

        await wait(fixture);
        await wait(fixture);
        await wait(fixture);

        expect(getMarkdownLoaderError()).toBeTruthy();
        expect(getChildrenUrlError()).toBeFalsy();

        goBack(fixture);
        getItem(fixture, 1).click();
        await wait(fixture);

        const invalidMarkdownUrlRequest3: TestRequest = httpTestingController.expectOne(invalidMarkdownUrl);
        invalidMarkdownUrlRequest3.flush(message, invalidMarkdownUrlOptions);
        const invalidChildrenUrlRequest2: TestRequest = httpTestingController.expectOne(invalidChildrenUrl);
        invalidChildrenUrlRequest2.flush(message, invalidMarkdownUrlOptions);

        await wait(fixture);
        await wait(fixture);
        await wait(fixture);

        expect(getMarkdownLoaderError()).toBeTruthy();
        expect(getChildrenUrlError()).toBeTruthy();

        goBack(fixture);

        expect(getMarkdownLoaderError()).toBeFalsy();
        expect(getChildrenUrlError()).toBeFalsy();

        httpTestingController.verify();
      }),
    ),
  );

  it(
    'should render one url item from GitHub',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = URL_ITEM;
        await wait(fixture);

        const markdownNavigator: TdMarkdownNavigatorComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorComponent),
        ).componentInstance;

        expect(markdownNavigator.showEmptyState).toBeFalsy();
        expect(markdownNavigator.loading).toBeFalsy();
        expect(markdownNavigator.showGoBackButton).toBeFalsy();
        expect(markdownNavigator.showMenu).toBeFalsy();
        expect(markdownNavigator.showTdMarkdown).toBeFalsy();
        expect(markdownNavigator.showTdMarkdownLoader).toBeTruthy();
      }),
    ),
  );

  it(
    'should render a flat list of items',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = FLAT_MIXED_ITEMS;
        await wait(fixture);

        const markdownNavigator: TdMarkdownNavigatorComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorComponent),
        ).componentInstance;
        const listItems: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-action-list button'));

        expect(markdownNavigator.showEmptyState).toBeFalsy();
        expect(markdownNavigator.loading).toBeFalsy();
        expect(markdownNavigator.showGoBackButton).toBeFalsy();
        expect(markdownNavigator.showMenu).toBeTruthy();
        expect(markdownNavigator.showTdMarkdown).toBeFalsy();
        expect(markdownNavigator.showTdMarkdownLoader).toBeFalsy();
        expect(listItems.length).toBe(FLAT_MIXED_ITEMS.length);
      }),
    ),
  );

  it(
    'should use custom icons if passed in',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = ITEMS_WITH_CUSTOM_ICONS;
        await wait(fixture);

        const listItems: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-action-list button'));

        expect(listItems.length).toBe(ITEMS_WITH_CUSTOM_ICONS.length);
        expect(listItems[0].nativeElement.textContent).toContain(ITEMS_WITH_CUSTOM_ICONS[0].icon);
        expect(listItems[1].nativeElement.textContent).toContain(ITEMS_WITH_CUSTOM_ICONS[1].icon);
      }),
    ),
  );

  it(
    'should use descriptions if passed in',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = ITEMS_WITH_DESCRIPTIONS;
        await wait(fixture);

        const listItems: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-action-list button'));

        expect(listItems.length).toBe(ITEMS_WITH_DESCRIPTIONS.length);
        expect(listItems[0].nativeElement.textContent).toContain(ITEMS_WITH_DESCRIPTIONS[0].description);
        expect(listItems[1].nativeElement.textContent).toContain(ITEMS_WITH_DESCRIPTIONS[1].description);
      }),
    ),
  );

  it(
    'should render a nested list of items',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = NESTED_MIXED_ITEMS;
        await wait(fixture);

        const markdownNavigator: TdMarkdownNavigatorComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorComponent),
        ).componentInstance;
        const listItems: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-action-list button'));

        expect(markdownNavigator.showEmptyState).toBeFalsy();
        expect(markdownNavigator.loading).toBeFalsy();
        expect(markdownNavigator.showGoBackButton).toBeFalsy();
        expect(markdownNavigator.showMenu).toBeTruthy();
        expect(markdownNavigator.showTdMarkdown).toBeFalsy();
        expect(markdownNavigator.showTdMarkdownLoader).toBeFalsy();
        expect(listItems.length).toBe(NESTED_MIXED_ITEMS.length);
        expect(listItems[0].nativeElement.textContent).toContain(NESTED_MIXED_ITEMS[0].title);
        expect(listItems[1].nativeElement.textContent).toContain(NESTED_MIXED_ITEMS[1].title);
      }),
    ),
  );

  it(
    'should render list and markdown side by side',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = ITEMS_AT_SAME_LEVEL_AS_MARKDOWN;
        await wait(fixture);

        const markdownNavigator: TdMarkdownNavigatorComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorComponent),
        ).componentInstance;
        const listItems: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-action-list button'));

        expect(markdownNavigator.showTdMarkdown).toBeFalsy();
        expect(markdownNavigator.showTdMarkdownLoader).toBeFalsy();
        expect(listItems.length).toBe(ITEMS_AT_SAME_LEVEL_AS_MARKDOWN.length);
        expect(listItems[0].nativeElement.textContent).toContain(ITEMS_AT_SAME_LEVEL_AS_MARKDOWN[0].title);
        expect(listItems[1].nativeElement.textContent).toContain(ITEMS_AT_SAME_LEVEL_AS_MARKDOWN[1].title);
        getItem(fixture, 0).click();
        await wait(fixture);

        expect(markdownNavigator.showMenu).toBeTruthy();
        expect(markdownNavigator.showTdMarkdown).toBeTruthy();
        expect(getTitle(fixture)).toContain(ITEMS_AT_SAME_LEVEL_AS_MARKDOWN[0].title);
        expect(getMarkdown(fixture)).toContain(ITEMS_AT_SAME_LEVEL_AS_MARKDOWN[0].markdownString);

        getItem(fixture, 0).click();
        await wait(fixture);

        expect(markdownNavigator.showMenu).toBeFalsy();
        expect(markdownNavigator.showTdMarkdown).toBeTruthy();
        expect(getTitle(fixture)).toContain(ITEMS_AT_SAME_LEVEL_AS_MARKDOWN[0].children[0].title);
        expect(getMarkdown(fixture)).toContain(ITEMS_AT_SAME_LEVEL_AS_MARKDOWN[0].children[0].markdownString);
        goBack(fixture);

        expect(markdownNavigator.showMenu).toBeTruthy();
        expect(markdownNavigator.showTdMarkdown).toBeTruthy();
        expect(getTitle(fixture)).toContain(ITEMS_AT_SAME_LEVEL_AS_MARKDOWN[0].title);
        expect(getMarkdown(fixture)).toContain(ITEMS_AT_SAME_LEVEL_AS_MARKDOWN[0].markdownString);
      }),
    ),
  );

  it(
    'should use default labels if labels is undefined',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = undefined;
        await wait(fixture);

        const markdownNavigator: TdMarkdownNavigatorComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorComponent),
        ).componentInstance;
        const elem: DebugElement = fixture.debugElement.query(By.directive(TdMarkdownNavigatorComponent));

        expect(markdownNavigator.goBackLabel).toContain(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goBack);
        expect(markdownNavigator.goHomeLabel).toContain(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goHome);
        expect(markdownNavigator.emptyStateLabel).toContain(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.emptyState);
        expect(elem.nativeElement.textContent).toContain(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.emptyState);
      }),
    ),
  );

  it(
    'should use default labels if labels is an empty object',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.labels = {};
        await wait(fixture);

        const markdownNavigator: TdMarkdownNavigatorComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorComponent),
        ).componentInstance;
        const elem: DebugElement = fixture.debugElement.query(By.directive(TdMarkdownNavigatorComponent));

        expect(markdownNavigator.goBackLabel).toContain(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goBack);
        expect(markdownNavigator.goHomeLabel).toContain(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goHome);
        expect(markdownNavigator.emptyStateLabel).toContain(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.emptyState);
        expect(elem.nativeElement.textContent).toContain(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.emptyState);
      }),
    ),
  );

  it(
    'should use labels if passed in',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        const SAMPLE_LABELS: IMarkdownNavigatorLabels = {
          goHome: 'Vete pa tu casa',
          goBack: 'Regresa',
          emptyState: 'No hay nada',
        };
        fixture.componentInstance.labels = SAMPLE_LABELS;
        await wait(fixture);

        const markdownNavigator: TdMarkdownNavigatorComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorComponent),
        ).componentInstance;
        const elem: DebugElement = fixture.debugElement.query(By.directive(TdMarkdownNavigatorComponent));

        expect(markdownNavigator.goBackLabel).toContain(SAMPLE_LABELS.goBack);
        expect(markdownNavigator.goHomeLabel).toContain(SAMPLE_LABELS.goHome);
        expect(markdownNavigator.emptyStateLabel).toContain(SAMPLE_LABELS.emptyState);
        expect(elem.nativeElement.textContent).toContain(SAMPLE_LABELS.emptyState);
      }),
    ),
  );

  it(
    'should be able to navigate up and down tree using the back button',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = DEEPLY_NESTED_TREE;
        await wait(fixture);

        validateTree(fixture);
      }),
    ),
  );

  it(
    'should be able to go to root using home button',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = DEEPLY_NESTED_TREE;
        await wait(fixture);

        getItem(fixture, 0).click();
        await wait(fixture);
        getItem(fixture, 0).click();
        await wait(fixture);
        getItem(fixture, 0).click();
        await wait(fixture);
        expect(getMarkdown(fixture)).toContain('A1I');
        await goHome(fixture);
        expect(getItem(fixture, 0).textContent).toContain('A');
        expect(getItem(fixture, 1).textContent).toContain('B');

        validateTree(fixture);
      }),
    ),
  );

  it(
    'should be able to start at a certain item by passing a reference to that item',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );
        fixture.componentInstance.items = DEEPLY_NESTED_TREE;
        fixture.componentInstance.startAt = DEEPLY_NESTED_TREE[0];
        await wait(fixture);
        expect(getTitle(fixture)).toContain('A');
        goBack(fixture);

        // should not jump to new spot unless items is changed
        fixture.componentInstance.startAt = DEEPLY_NESTED_TREE[0].children[0];
        await wait(fixture);
        expect(getItem(fixture, 0).textContent).toContain('A');

        // should handle an invalid startAt
        fixture.componentInstance.items = NESTED_MIXED_ITEMS;
        await wait(fixture);
        expect(getItem(fixture, 0).textContent).toContain('First item');

        fixture.componentInstance.items = DEEPLY_NESTED_TREE;
        fixture.componentInstance.startAt = DEEPLY_NESTED_TREE[1];
        await wait(fixture);
        expect(getTitle(fixture)).toContain('B');
        await goBack(fixture);
        validateTree(fixture);
      }),
    ),
  );

  it(
    'should be able to jump to start at a certain item by referencing an id',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = DEEPLY_NESTED_TREE;
        fixture.componentInstance.startAt = { id: 'A_ID' };
        await wait(fixture);
        expect(getTitle(fixture)).toContain('A');
        await goBack(fixture);
        validateTree(fixture);
      }),
    ),
  );

  it(
    'should be able to jump to start at a certain item by referencing a path of items',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = DEEPLY_NESTED_TREE;
        fixture.componentInstance.startAt = [{ id: 'A_ID' }];
        await wait(fixture);
        await wait(fixture);
        expect(getTitle(fixture)).toContain('A');
        await goBack(fixture);
        validateTree(fixture);
      }),
    ),
  );

  it(
    'should not jump anywhere if path is invalid',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = DEEPLY_NESTED_TREE;
        fixture.componentInstance.startAt = [{ id: 'A_ID' }, { id: 'NON_EXISTING_ID' }];
        await wait(fixture);
        await wait(fixture);
        expect(getItem(fixture, 0).textContent).toContain('A');
        expect(getItem(fixture, 1).textContent).toContain('B');
        validateTree(fixture);
      }),
    ),
  );

  it(
    'should be able to jump to start at a certain item by referencing a path of items that depends on children_url',
    waitForAsync(
      inject([], async () => {
        const childrenUrl1: string = CHILDREN_URL;
        const childrenUrl2: string = 'https://anothersamplechildrenurl.com';
        const childrenUrlRequest1: IMarkdownNavigatorItem[] = [{ id: '2a', title: '2a', childrenUrl: childrenUrl2 }];
        const childrenUrlRequest2: IMarkdownNavigatorItem[] = [{ title: '3c', id: '3c' }];

        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = ITEMS_WITH_CHILDREN_URL;
        fixture.componentInstance.startAt = [{ id: 'root' }, { id: '2a' }, { id: '3c' }];
        await wait(fixture);
        const req1: TestRequest = httpTestingController.expectOne(childrenUrl1);
        req1.flush(childrenUrlRequest1);
        await wait(fixture);
        const req2: TestRequest = httpTestingController.expectOne(childrenUrl2);
        req2.flush(childrenUrlRequest2);
        await wait(fixture);
        await wait(fixture);
        expect(getTitle(fixture)).toContain('3c');
      }),
    ),
  );

  it(
    'should be able to jump to start at a certain item by using a custom compareWith function',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = DEEPLY_NESTED_TREE;
        fixture.componentInstance.compareWith = compareByTitle;
        fixture.componentInstance.startAt = { title: 'A' };
        await wait(fixture);
        expect(getTitle(fixture)).toContain('A');

        function deepHackyComparison(o1: IMarkdownNavigatorItem, o2: IMarkdownNavigatorItem): boolean {
          // order matters
          return JSON.stringify(o1) === JSON.stringify(o2);
        }

        fixture.componentInstance.compareWith = deepHackyComparison;
        fixture.componentInstance.items = NESTED_MIXED_ITEMS;
        fixture.componentInstance.startAt = NESTED_MIXED_ITEMS[1];
        await wait(fixture);
        expect(getTitle(fixture)).toContain(NESTED_MIXED_ITEMS[1].title);
      }),
    ),
  );

  it(
    'should be able to render a custom component as a footer',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorTestComponent,
        );

        fixture.componentInstance.items = ITEMS_WITH_FOOTERS;
        fixture.componentInstance.footer = GlobalFooterComponent;

        await wait(fixture);

        expect(fixture.nativeElement.textContent).toContain('Global Footer Content');

        getItem(fixture, 0).click();

        await wait(fixture);

        expect(fixture.nativeElement.textContent).toContain('Footer A Content');

        goBack(fixture);

        await wait(fixture);

        getItem(fixture, 1).click();

        await wait(fixture);

        expect(fixture.nativeElement.textContent).toContain('Global Footer Content');
      }),
    ),
  );
});

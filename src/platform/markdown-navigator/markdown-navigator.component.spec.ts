import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {
  TdMarkdownNavigatorComponent,
  IMarkdownNavigatorItem,
  IMarkdownNavigatorLabels,
  DEFAULT_MARKDOWN_NAVIGATOR_LABELS,
  IMarkdownNavigatorCompareWith,
} from './markdown-navigator.component';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { CovalentMarkdownNavigatorModule } from './markdown-navigator.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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

export const DEEPLY_NESTED_TREE: IMarkdownNavigatorItem[] = [
  {
    title: 'A',
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
    ></td-markdown-navigator>
  `,
})
class TdMarkdownNavigatorTestComponent {
  items: IMarkdownNavigatorItem[] = [];
  labels: IMarkdownNavigatorLabels;
  startAt: IMarkdownNavigatorItem;
  compareWith: IMarkdownNavigatorCompareWith;
}

describe('MarkdownNavigatorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TdMarkdownNavigatorTestComponent],
      imports: [NoopAnimationsModule, CovalentMarkdownNavigatorModule],
    }).compileComponents();
  }));

  it('should render empty state when an empty array is passed into items', async(
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
  ));

  it('should render empty state when undefined is passed into items', async(
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
  ));

  it('should render one raw markdown item', async(
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
  ));

  it('should render one url item from GitHub', async(
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
  ));

  it('should render a flat list of items', async(
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
  ));

  it('should render a nested list of items', async(
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
  ));

  it('should use default labels if labels is undefined', async(
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
  ));

  it('should use default labels if labels is an empty object', async(
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
  ));

  it('should use labels if passed in', async(
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
  ));

  it('should be able to navigate up and down tree using the back button', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMarkdownNavigatorTestComponent> = TestBed.createComponent(
        TdMarkdownNavigatorTestComponent,
      );

      fixture.componentInstance.items = DEEPLY_NESTED_TREE;
      await wait(fixture);

      validateTree(fixture);
    }),
  ));

  it('should be able to go to root using home button', async(
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
  ));

  it('should be able to start at a certain item by passing a reference to that item', async(
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
  ));

  it('should be able to jump to start at a certain item by using a custom compareWith function', async(
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
      expect(getMarkdown(fixture)).toContain('Heading');
    }),
  ));
});

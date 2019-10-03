import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {
  MarkdownNavigatorComponent,
  IMarkdownNavigatorItem,
  IMarkdownNavigatorLabels,
  DEFAULT_MARKDOWN_NAVIGATOR_LABELS,
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

async function wait(fixture: ComponentFixture<any>): Promise<void> {
  fixture.detectChanges();
  await fixture.whenStable();
}

@Component({
  selector: 'td-markdown-navigator-test',
  template: `
    <td-markdown-navigator [items]="items" [style.height.px]="450" [labels]="labels"></td-markdown-navigator>
  `,
})
class TdMarkdownNavigatorTestComponent {
  items: IMarkdownNavigatorItem[] = [];
  labels: IMarkdownNavigatorLabels;
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

      const markdownNavigator: MarkdownNavigatorComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorComponent),
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

      const markdownNavigator: MarkdownNavigatorComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorComponent),
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

      const markdownNavigator: MarkdownNavigatorComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorComponent),
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

      const markdownNavigator: MarkdownNavigatorComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorComponent),
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

      const markdownNavigator: MarkdownNavigatorComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorComponent),
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

      const markdownNavigator: MarkdownNavigatorComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorComponent),
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

      const markdownNavigator: MarkdownNavigatorComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorComponent),
      ).componentInstance;
      const elem: DebugElement = fixture.debugElement.query(By.directive(MarkdownNavigatorComponent));

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

      const markdownNavigator: MarkdownNavigatorComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorComponent),
      ).componentInstance;
      const elem: DebugElement = fixture.debugElement.query(By.directive(MarkdownNavigatorComponent));

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

      const markdownNavigator: MarkdownNavigatorComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorComponent),
      ).componentInstance;
      const elem: DebugElement = fixture.debugElement.query(By.directive(MarkdownNavigatorComponent));

      expect(markdownNavigator.goBackLabel).toContain(SAMPLE_LABELS.goBack);
      expect(markdownNavigator.goHomeLabel).toContain(SAMPLE_LABELS.goHome);
      expect(markdownNavigator.emptyStateLabel).toContain(SAMPLE_LABELS.emptyState);
      expect(elem.nativeElement.textContent).toContain(SAMPLE_LABELS.emptyState);
    }),
  ));
});

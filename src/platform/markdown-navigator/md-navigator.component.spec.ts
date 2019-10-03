import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {
  MdNavigatorComponent,
  IMdNavigatorItem,
  IMdNavigatorLabels,
  DEFAULT_MD_NAVIGATOR_LABELS,
} from './md-navigator.component';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { CovalentMdNavigatorModule } from './md-navigator.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const RAW_MARKDOWN_HEADING: string = 'Heading';
const RAW_MARKDOWN: string = `# ${RAW_MARKDOWN_HEADING}`;

const URL_ITEM: IMdNavigatorItem[] = [
  {
    url: 'https://github.com/Teradata/covalent/blob/develop/README.md',
  },
];
const RAW_MARKDOWN_ITEM: IMdNavigatorItem[] = [
  {
    markdownString: RAW_MARKDOWN,
  },
];

const FLAT_MIXED_ITEMS: IMdNavigatorItem[] = [...URL_ITEM, ...RAW_MARKDOWN_ITEM];

const NESTED_MIXED_ITEMS: IMdNavigatorItem[] = [
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
  selector: 'td-md-navigator-test',
  template: `
    <td-md-navigator [items]="items" [style.height.px]="450" [labels]="labels"></td-md-navigator>
  `,
})
class TdMdNavigatorTestComponent {
  items: IMdNavigatorItem[] = [];
  labels: IMdNavigatorLabels;
}

describe('MdNavigatorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TdMdNavigatorTestComponent],
      imports: [NoopAnimationsModule, CovalentMdNavigatorModule],
    }).compileComponents();
  }));

  it('should render empty state when an empty array is passed into items', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMdNavigatorTestComponent> = TestBed.createComponent(TdMdNavigatorTestComponent);

      fixture.componentInstance.items = [];
      await wait(fixture);

      const mdNavigator: MdNavigatorComponent = fixture.debugElement.query(By.directive(MdNavigatorComponent))
        .componentInstance;

      expect(mdNavigator.showEmptyState).toBeTruthy();
      expect(mdNavigator.loading).toBeFalsy();
      expect(mdNavigator.showGoBackButton).toBeFalsy();
      expect(mdNavigator.showMenu).toBeFalsy();
      expect(mdNavigator.showTdMarkdown).toBeFalsy();
      expect(mdNavigator.showTdMarkdownLoader).toBeFalsy();
    }),
  ));

  it('should render empty state when undefined is passed into items', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMdNavigatorTestComponent> = TestBed.createComponent(TdMdNavigatorTestComponent);

      fixture.componentInstance.items = undefined;
      await wait(fixture);

      const mdNavigator: MdNavigatorComponent = fixture.debugElement.query(By.directive(MdNavigatorComponent))
        .componentInstance;

      expect(mdNavigator.showEmptyState).toBeTruthy();
      expect(mdNavigator.loading).toBeFalsy();
      expect(mdNavigator.showGoBackButton).toBeFalsy();
      expect(mdNavigator.showMenu).toBeFalsy();
      expect(mdNavigator.showTdMarkdown).toBeFalsy();
      expect(mdNavigator.showTdMarkdownLoader).toBeFalsy();
    }),
  ));

  it('should render one raw markdown item', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMdNavigatorTestComponent> = TestBed.createComponent(TdMdNavigatorTestComponent);

      fixture.componentInstance.items = RAW_MARKDOWN_ITEM;
      await wait(fixture);

      const mdNavigator: MdNavigatorComponent = fixture.debugElement.query(By.directive(MdNavigatorComponent))
        .componentInstance;

      expect(mdNavigator.showEmptyState).toBeFalsy();
      expect(mdNavigator.loading).toBeFalsy();
      expect(mdNavigator.showGoBackButton).toBeFalsy();
      expect(mdNavigator.showMenu).toBeFalsy();
      expect(mdNavigator.showTdMarkdown).toBeTruthy();
      expect(mdNavigator.showTdMarkdownLoader).toBeFalsy();
    }),
  ));

  it('should render one url item from GitHub', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMdNavigatorTestComponent> = TestBed.createComponent(TdMdNavigatorTestComponent);

      fixture.componentInstance.items = URL_ITEM;
      await wait(fixture);

      const mdNavigator: MdNavigatorComponent = fixture.debugElement.query(By.directive(MdNavigatorComponent))
        .componentInstance;

      expect(mdNavigator.showEmptyState).toBeFalsy();
      expect(mdNavigator.loading).toBeFalsy();
      expect(mdNavigator.showGoBackButton).toBeFalsy();
      expect(mdNavigator.showMenu).toBeFalsy();
      expect(mdNavigator.showTdMarkdown).toBeFalsy();
      expect(mdNavigator.showTdMarkdownLoader).toBeTruthy();
    }),
  ));

  it('should render a flat list of items', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMdNavigatorTestComponent> = TestBed.createComponent(TdMdNavigatorTestComponent);

      fixture.componentInstance.items = FLAT_MIXED_ITEMS;
      await wait(fixture);

      const mdNavigator: MdNavigatorComponent = fixture.debugElement.query(By.directive(MdNavigatorComponent))
        .componentInstance;
      const listItems: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-action-list button'));

      expect(mdNavigator.showEmptyState).toBeFalsy();
      expect(mdNavigator.loading).toBeFalsy();
      expect(mdNavigator.showGoBackButton).toBeFalsy();
      expect(mdNavigator.showMenu).toBeTruthy();
      expect(mdNavigator.showTdMarkdown).toBeFalsy();
      expect(mdNavigator.showTdMarkdownLoader).toBeFalsy();
      expect(listItems.length).toBe(FLAT_MIXED_ITEMS.length);
    }),
  ));

  it('should render a nested list of items', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMdNavigatorTestComponent> = TestBed.createComponent(TdMdNavigatorTestComponent);

      fixture.componentInstance.items = NESTED_MIXED_ITEMS;
      await wait(fixture);

      const mdNavigator: MdNavigatorComponent = fixture.debugElement.query(By.directive(MdNavigatorComponent))
        .componentInstance;
      const listItems: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-action-list button'));

      expect(mdNavigator.showEmptyState).toBeFalsy();
      expect(mdNavigator.loading).toBeFalsy();
      expect(mdNavigator.showGoBackButton).toBeFalsy();
      expect(mdNavigator.showMenu).toBeTruthy();
      expect(mdNavigator.showTdMarkdown).toBeFalsy();
      expect(mdNavigator.showTdMarkdownLoader).toBeFalsy();
      expect(listItems.length).toBe(NESTED_MIXED_ITEMS.length);
      expect(listItems[0].nativeElement.textContent).toContain(NESTED_MIXED_ITEMS[0].title);
      expect(listItems[1].nativeElement.textContent).toContain(NESTED_MIXED_ITEMS[1].title);
    }),
  ));

  it('should use default labels if labels is undefined', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMdNavigatorTestComponent> = TestBed.createComponent(TdMdNavigatorTestComponent);

      fixture.componentInstance.items = undefined;
      await wait(fixture);

      const mdNavigator: MdNavigatorComponent = fixture.debugElement.query(By.directive(MdNavigatorComponent))
        .componentInstance;
      const elem: DebugElement = fixture.debugElement.query(By.directive(MdNavigatorComponent));

      expect(mdNavigator.goBackLabel).toContain(DEFAULT_MD_NAVIGATOR_LABELS.goBack);
      expect(mdNavigator.goHomeLabel).toContain(DEFAULT_MD_NAVIGATOR_LABELS.goHome);
      expect(mdNavigator.emptyStateLabel).toContain(DEFAULT_MD_NAVIGATOR_LABELS.emptyState);
      expect(elem.nativeElement.textContent).toContain(DEFAULT_MD_NAVIGATOR_LABELS.emptyState);
    }),
  ));

  it('should use default labels if labels is an empty object', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMdNavigatorTestComponent> = TestBed.createComponent(TdMdNavigatorTestComponent);

      fixture.componentInstance.labels = {};
      await wait(fixture);

      const mdNavigator: MdNavigatorComponent = fixture.debugElement.query(By.directive(MdNavigatorComponent))
        .componentInstance;
      const elem: DebugElement = fixture.debugElement.query(By.directive(MdNavigatorComponent));

      expect(mdNavigator.goBackLabel).toContain(DEFAULT_MD_NAVIGATOR_LABELS.goBack);
      expect(mdNavigator.goHomeLabel).toContain(DEFAULT_MD_NAVIGATOR_LABELS.goHome);
      expect(mdNavigator.emptyStateLabel).toContain(DEFAULT_MD_NAVIGATOR_LABELS.emptyState);
      expect(elem.nativeElement.textContent).toContain(DEFAULT_MD_NAVIGATOR_LABELS.emptyState);
    }),
  ));

  it('should use labels if passed in', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMdNavigatorTestComponent> = TestBed.createComponent(TdMdNavigatorTestComponent);

      const SAMPLE_LABELS: IMdNavigatorLabels = {
        goHome: 'Vete pa tu casa',
        goBack: 'Regresa',
        emptyState: 'No hay nada',
      };
      fixture.componentInstance.labels = SAMPLE_LABELS;
      await wait(fixture);

      const mdNavigator: MdNavigatorComponent = fixture.debugElement.query(By.directive(MdNavigatorComponent))
        .componentInstance;
      const elem: DebugElement = fixture.debugElement.query(By.directive(MdNavigatorComponent));

      expect(mdNavigator.goBackLabel).toContain(SAMPLE_LABELS.goBack);
      expect(mdNavigator.goHomeLabel).toContain(SAMPLE_LABELS.goHome);
      expect(mdNavigator.emptyStateLabel).toContain(SAMPLE_LABELS.emptyState);
      expect(elem.nativeElement.textContent).toContain(SAMPLE_LABELS.emptyState);
    }),
  ));
});

import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HelpComponent } from './help.component';
import { IHelpMenuDataItem, IHelpComponentLabels, DEFAULT_LABELS } from './help.utils';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { CovalentHelpModule } from './help.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const RAW_MARKDOWN_HEADING: string = 'Heading';
const RAW_MARKDOWN: string = `# ${RAW_MARKDOWN_HEADING}`;

const URL_ITEM: IHelpMenuDataItem[] = [
  {
    url: 'https://github.com/Teradata/covalent/blob/develop/README.md',
  },
];
const RAW_MARKDOWN_ITEM: IHelpMenuDataItem[] = [
  {
    markdownString: RAW_MARKDOWN,
  },
];

const FLAT_MIXED_ITEMS: IHelpMenuDataItem[] = [...URL_ITEM, ...RAW_MARKDOWN_ITEM];

const NESTED_MIXED_ITEMS: IHelpMenuDataItem[] = [
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
  await fixture.whenRenderingDone();
  await fixture.whenStable();
}

@Component({
  selector: 'td-help-test',
  template: `
    <td-help [items]="items" [style.height.px]="450" [labels]="labels"></td-help>
  `,
})
class TdHelpTestComponent {
  items: IHelpMenuDataItem[] = [];
  labels: IHelpComponentLabels;
}

describe('HelpComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TdHelpTestComponent],
      imports: [NoopAnimationsModule, CovalentHelpModule],
    }).compileComponents();
  }));

  beforeEach(() => {});

  it('should render empty state when an empty array is passed into items', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdHelpTestComponent> = TestBed.createComponent(TdHelpTestComponent);
      fixture.componentInstance.items = [];
      await wait(fixture);
      const help: HelpComponent = fixture.debugElement.query(By.directive(HelpComponent)).componentInstance;
      expect(help.showEmptyState).toBeTruthy();
      expect(help.loading).toBeFalsy();
      expect(help.showGoBackButton).toBeFalsy();
      expect(help.showMenu).toBeFalsy();
      expect(help.showTdMarkdown).toBeFalsy();
      expect(help.showTdMarkdownLoader).toBeFalsy();
    }),
  ));

  it('should render empty state when undefined is passed into items', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdHelpTestComponent> = TestBed.createComponent(TdHelpTestComponent);
      fixture.componentInstance.items = undefined;
      await wait(fixture);
      const help: HelpComponent = fixture.debugElement.query(By.directive(HelpComponent)).componentInstance;
      expect(help.showEmptyState).toBeTruthy();
      expect(help.loading).toBeFalsy();
      expect(help.showGoBackButton).toBeFalsy();
      expect(help.showMenu).toBeFalsy();
      expect(help.showTdMarkdown).toBeFalsy();
      expect(help.showTdMarkdownLoader).toBeFalsy();
    }),
  ));

  it('should render one raw markdown item', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdHelpTestComponent> = TestBed.createComponent(TdHelpTestComponent);
      fixture.componentInstance.items = RAW_MARKDOWN_ITEM;
      await wait(fixture);
      const help: HelpComponent = fixture.debugElement.query(By.directive(HelpComponent)).componentInstance;
      const elem: DebugElement = fixture.debugElement.query(By.directive(HelpComponent));

      expect(help.showEmptyState).toBeFalsy();
      expect(help.loading).toBeFalsy();
      expect(help.showGoBackButton).toBeFalsy();
      expect(help.showMenu).toBeFalsy();
      expect(help.showTdMarkdown).toBeTruthy();
      expect(help.showTdMarkdownLoader).toBeFalsy();

      // expect(elem.nativeElement.textContent).toContain(RAW_MARKDOWN_HEADING);
    }),
  ));

  it('should render one url item from GitHub', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdHelpTestComponent> = TestBed.createComponent(TdHelpTestComponent);
      fixture.componentInstance.items = URL_ITEM;
      await wait(fixture);
      const help: HelpComponent = fixture.debugElement.query(By.directive(HelpComponent)).componentInstance;
      const elem: DebugElement = fixture.debugElement.query(By.directive(HelpComponent));

      expect(help.showEmptyState).toBeFalsy();
      expect(help.loading).toBeFalsy();
      expect(help.showGoBackButton).toBeFalsy();
      expect(help.showMenu).toBeFalsy();
      expect(help.showTdMarkdown).toBeFalsy();
      expect(help.showTdMarkdownLoader).toBeTruthy();
      // expect(elem.nativeElement.textContent).toContain('Covalent');
    }),
  ));

  it('should render a flat list of items', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdHelpTestComponent> = TestBed.createComponent(TdHelpTestComponent);
      fixture.componentInstance.items = FLAT_MIXED_ITEMS;
      await wait(fixture);
      const help: HelpComponent = fixture.debugElement.query(By.directive(HelpComponent)).componentInstance;
      const listItems: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-action-list button'));

      expect(help.showEmptyState).toBeFalsy();
      expect(help.loading).toBeFalsy();
      expect(help.showGoBackButton).toBeFalsy();
      expect(help.showMenu).toBeTruthy();
      expect(help.showTdMarkdown).toBeFalsy();
      expect(help.showTdMarkdownLoader).toBeFalsy();
      expect(listItems.length).toBe(FLAT_MIXED_ITEMS.length);
    }),
  ));

  it('should render a nested list of items', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdHelpTestComponent> = TestBed.createComponent(TdHelpTestComponent);
      fixture.componentInstance.items = NESTED_MIXED_ITEMS;
      await wait(fixture);
      const help: HelpComponent = fixture.debugElement.query(By.directive(HelpComponent)).componentInstance;
      const listItems: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-action-list button'));

      expect(help.showEmptyState).toBeFalsy();
      expect(help.loading).toBeFalsy();
      expect(help.showGoBackButton).toBeFalsy();
      expect(help.showMenu).toBeTruthy();
      expect(help.showTdMarkdown).toBeFalsy();
      expect(help.showTdMarkdownLoader).toBeFalsy();
      expect(listItems.length).toBe(NESTED_MIXED_ITEMS.length);
      expect(listItems[0].nativeElement.textContent).toContain(NESTED_MIXED_ITEMS[0].title); // todo maybe test in it's own component?
      expect(listItems[1].nativeElement.textContent).toContain(NESTED_MIXED_ITEMS[1].title);
    }),
  ));

  it('should default to certain labels', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdHelpTestComponent> = TestBed.createComponent(TdHelpTestComponent);
      fixture.componentInstance.items = [];

      await wait(fixture);
      const help: HelpComponent = fixture.debugElement.query(By.directive(HelpComponent)).componentInstance;
      const elem: DebugElement = fixture.debugElement.query(By.directive(HelpComponent));

      expect(help.goBackLabel).toContain(DEFAULT_LABELS.goBack);
      expect(help.goHomeLabel).toContain(DEFAULT_LABELS.goHome);
      expect(help.emptyStateLabel).toContain(DEFAULT_LABELS.emptyState);
      expect(elem.nativeElement.textContent).toContain(DEFAULT_LABELS.emptyState);
    }),
  ));

  it('should accept labels as an input', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdHelpTestComponent> = TestBed.createComponent(TdHelpTestComponent);
      const SAMPLE_LABELS: IHelpComponentLabels = {
        goHome: 'Vete pa tu casa',
        goBack: 'Regresa',
        emptyState: 'No hay nada',
      };
      fixture.componentInstance.labels = SAMPLE_LABELS;

      await wait(fixture);
      const help: HelpComponent = fixture.debugElement.query(By.directive(HelpComponent)).componentInstance;
      const elem: DebugElement = fixture.debugElement.query(By.directive(HelpComponent));

      expect(help.goBackLabel).toContain(SAMPLE_LABELS.goBack);
      expect(help.goHomeLabel).toContain(SAMPLE_LABELS.goHome);
      expect(help.emptyStateLabel).toContain(SAMPLE_LABELS.emptyState);
      expect(elem.nativeElement.textContent).toContain(SAMPLE_LABELS.emptyState);
    }),
  ));
});

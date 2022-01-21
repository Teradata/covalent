import { ComponentFixture, TestBed, inject, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ThemePalette } from '@angular/material/core';
import { CovalentMarkdownNavigatorModule } from '../markdown-navigator.module';
import { MatToolbar } from '@angular/material/toolbar';
import {
  IMarkdownNavigatorWindowLabels,
  TdMarkdownNavigatorWindowComponent,
  DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS,
} from './markdown-navigator-window.component';
import {
  IMarkdownNavigatorItem,
  TdMarkdownNavigatorComponent,
  DEFAULT_MARKDOWN_NAVIGATOR_LABELS,
  IMarkdownNavigatorCompareWith,
} from '../markdown-navigator.component';
import { DEEPLY_NESTED_TREE, compareByTitle } from '../markdown-navigator.component.spec';

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

async function wait(
  fixture: ComponentFixture<TdMarkdownNavigatorWindowTestComponent | TdMarkdownNavigatorWindowWOColorTestComponent>,
): Promise<void> {
  fixture.detectChanges();
  await fixture.whenStable();
}

@Component({
  selector: 'td-markdown-navigator-window-test',
  template: `
    <td-markdown-navigator-window
      [items]="items"
      [style.height.px]="450"
      [labels]="labels"
      [toolbarColor]="toolbarColor"
      [startAt]="startAt"
      [compareWith]="compareWith"
    ></td-markdown-navigator-window>
  `,
})
class TdMarkdownNavigatorWindowTestComponent {
  items: IMarkdownNavigatorItem[] = [];
  labels: IMarkdownNavigatorWindowLabels;
  toolbarColor: ThemePalette;
  startAt: IMarkdownNavigatorItem;
  compareWith: IMarkdownNavigatorCompareWith;
}

@Component({
  selector: 'td-markdown-navigator-window-w-o-color-test',
  template: `
    <td-markdown-navigator-window
      [items]="items"
      [style.height.px]="450"
      [labels]="labels"
    ></td-markdown-navigator-window>
  `,
})
class TdMarkdownNavigatorWindowWOColorTestComponent {
  items: IMarkdownNavigatorItem[] = [];
  labels: IMarkdownNavigatorWindowLabels;
}

describe('MarkdownNavigatorWindowComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TdMarkdownNavigatorWindowTestComponent, TdMarkdownNavigatorWindowWOColorTestComponent],
        imports: [NoopAnimationsModule, CovalentMarkdownNavigatorModule],
      }).compileComponents();
    }),
  );

  it(
    'should use default labels if labels is undefined',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorWindowTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorWindowTestComponent,
        );

        await wait(fixture);

        const markdownNavigatorWindow: TdMarkdownNavigatorWindowComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorWindowComponent),
        ).componentInstance;
        const markdownNavigator: TdMarkdownNavigatorComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorComponent),
        ).componentInstance;

        expect(markdownNavigatorWindow.titleLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.title);
        expect(markdownNavigatorWindow.closeLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.close);
        expect(markdownNavigatorWindow.markdownNavigatorLabels).toBeFalsy();
        expect(markdownNavigator.goHomeLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goHome);
        expect(markdownNavigator.goBackLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goBack);
        expect(markdownNavigator.emptyStateLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.emptyState);
      }),
    ),
  );

  it(
    'should use default labels if labels is an empty object',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorWindowTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorWindowTestComponent,
        );

        await wait(fixture);

        const markdownNavigatorWindow: TdMarkdownNavigatorWindowComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorWindowComponent),
        ).componentInstance;
        const markdownNavigator: TdMarkdownNavigatorComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorComponent),
        ).componentInstance;

        expect(markdownNavigatorWindow.titleLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.title);
        expect(markdownNavigatorWindow.closeLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.close);
        expect(markdownNavigator.goHomeLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goHome);
        expect(markdownNavigator.goBackLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goBack);
        expect(markdownNavigator.emptyStateLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.emptyState);
      }),
    ),
  );

  it(
    'should use labels if passed in',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorWindowTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorWindowTestComponent,
        );

        const SAMPLE_LABELS: IMarkdownNavigatorWindowLabels = {
          title: 'Ayuda!',
          close: 'Cierra',
          goHome: 'Vete pa tu casa',
          goBack: 'Regresa',
          emptyState: 'No hay nada',
          dock: 'Minimizar',
          unDock: 'Maximizar',
        };
        fixture.componentInstance.labels = SAMPLE_LABELS;
        await wait(fixture);

        const markdownNavigatorWindow: TdMarkdownNavigatorWindowComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorWindowComponent),
        ).componentInstance;

        expect(markdownNavigatorWindow.titleLabel).toBe(SAMPLE_LABELS.title);
        expect(markdownNavigatorWindow.closeLabel).toBe(SAMPLE_LABELS.close);
        expect(markdownNavigatorWindow.markdownNavigatorLabels).toBeTruthy();
        expect(markdownNavigatorWindow.toggleDockedStateLabel).toBe(SAMPLE_LABELS.dock);
        expect(markdownNavigatorWindow.markdownNavigatorLabels).toEqual({
          goHome: SAMPLE_LABELS.goHome,
          goBack: SAMPLE_LABELS.goBack,
          emptyState: SAMPLE_LABELS.emptyState,
        });
      }),
    ),
  );

  it(
    'pass items to markdownNavigator component',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorWindowTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorWindowTestComponent,
        );

        fixture.componentInstance.items = URL_ITEM;
        await wait(fixture);

        const markdownNavigator: TdMarkdownNavigatorComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorComponent),
        ).componentInstance;

        expect(markdownNavigator.items).toEqual(URL_ITEM);

        fixture.componentInstance.items = RAW_MARKDOWN_ITEM;
        await wait(fixture);

        expect(markdownNavigator.items).toEqual(RAW_MARKDOWN_ITEM);
      }),
    ),
  );

  it(
    'default to primary color if toolbarColor is not passed in',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorWindowWOColorTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorWindowWOColorTestComponent,
        );

        await wait(fixture);

        const toolbar: MatToolbar = fixture.debugElement.query(By.directive(MatToolbar)).componentInstance;

        expect(toolbar.color).toBe('primary');
      }),
    ),
  );

  it(
    'use color if toolBar color is passed in',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorWindowTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorWindowTestComponent,
        );

        fixture.componentInstance.toolbarColor = 'accent';
        await wait(fixture);

        const toolbar: MatToolbar = fixture.debugElement.query(By.directive(MatToolbar)).componentInstance;

        expect(toolbar.color).toBe('accent');

        fixture.componentInstance.toolbarColor = 'primary';
        await wait(fixture);

        expect(toolbar.color).toBe('primary');

        fixture.componentInstance.toolbarColor = 'warn';
        await wait(fixture);

        expect(toolbar.color).toBe('warn');

        fixture.componentInstance.toolbarColor = undefined;
        await wait(fixture);

        expect(toolbar.color).toBe(undefined);
      }),
    ),
  );

  it(
    'emit a close event ',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorWindowTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorWindowTestComponent,
        );

        await wait(fixture);
        const markdownNavigatorWindow: TdMarkdownNavigatorWindowComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorWindowComponent),
        ).componentInstance;

        spyOn(markdownNavigatorWindow.closed, 'emit');

        const closeButton: DebugElement = fixture.debugElement.query(By.css('.td-window-dialog-close'));
        closeButton.nativeElement.click();

        await wait(fixture);

        expect(markdownNavigatorWindow.closed.emit).toHaveBeenCalled();
      }),
    ),
  );

  it(
    'pass startAt item to markdownNavigator component',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorWindowTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorWindowTestComponent,
        );

        fixture.componentInstance.startAt = DEEPLY_NESTED_TREE[0];
        await wait(fixture);

        const markdownNavigator: TdMarkdownNavigatorComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorComponent),
        ).componentInstance;

        expect(markdownNavigator.startAt).toEqual(DEEPLY_NESTED_TREE[0]);

        fixture.componentInstance.startAt = DEEPLY_NESTED_TREE[1];
        await wait(fixture);
        expect(markdownNavigator.startAt).toEqual(DEEPLY_NESTED_TREE[1]);
      }),
    ),
  );

  it(
    'pass compareWith item to markdownNavigator component',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdMarkdownNavigatorWindowTestComponent> = TestBed.createComponent(
          TdMarkdownNavigatorWindowTestComponent,
        );
        function compareByUrl(o1: IMarkdownNavigatorItem, o2: IMarkdownNavigatorItem): boolean {
          return o1.url === o2.url;
        }
        fixture.componentInstance.compareWith = compareByUrl;
        await wait(fixture);

        const markdownNavigator: TdMarkdownNavigatorWindowComponent = fixture.debugElement.query(
          By.directive(TdMarkdownNavigatorWindowComponent),
        ).componentInstance;

        expect(markdownNavigator.compareWith).toEqual(compareByUrl);

        fixture.componentInstance.compareWith = compareByTitle;
        await wait(fixture);
        expect(markdownNavigator.compareWith).toEqual(compareByTitle);
      }),
    ),
  );
});

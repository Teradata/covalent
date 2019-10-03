import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ThemePalette } from '@angular/material/core';
import { CovalentMarkdownNavigatorModule } from '../markdown-navigator.module';
import { MatToolbar } from '@angular/material/toolbar';
import {
  IMarkdownNavigatorWindowLabels,
  MarkdownNavigatorWindowComponent,
  DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS,
} from './markdown-navigator-window.component';
import {
  IMarkdownNavigatorItem,
  MarkdownNavigatorComponent,
  DEFAULT_MARKDOWN_NAVIGATOR_LABELS,
} from '../markdown-navigator.component';

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

async function wait(fixture: ComponentFixture<any>): Promise<void> {
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
    ></td-markdown-navigator-window>
  `,
})
class TdMarkdownNavigatorWindowTestComponent {
  items: IMarkdownNavigatorItem[] = [];
  labels: IMarkdownNavigatorWindowLabels;
  toolbarColor: ThemePalette;
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
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TdMarkdownNavigatorWindowTestComponent, TdMarkdownNavigatorWindowWOColorTestComponent],
      imports: [NoopAnimationsModule, CovalentMarkdownNavigatorModule],
    }).compileComponents();
  }));

  it('should use default labels if labels is undefined', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMarkdownNavigatorWindowTestComponent> = TestBed.createComponent(
        TdMarkdownNavigatorWindowTestComponent,
      );

      await wait(fixture);

      const markdownNavigatorWindow: MarkdownNavigatorWindowComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorWindowComponent),
      ).componentInstance;
      const markdownNavigator: MarkdownNavigatorComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorComponent),
      ).componentInstance;

      expect(markdownNavigatorWindow.titleLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.title);
      expect(markdownNavigatorWindow.closeLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.close);
      expect(markdownNavigatorWindow.markdownNavigatorLabels).toBeFalsy();
      expect(markdownNavigator.goHomeLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goHome);
      expect(markdownNavigator.goBackLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goBack);
      expect(markdownNavigator.emptyStateLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.emptyState);
    }),
  ));

  it('should use default labels if labels is an empty object', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMarkdownNavigatorWindowTestComponent> = TestBed.createComponent(
        TdMarkdownNavigatorWindowTestComponent,
      );

      await wait(fixture);

      const markdownNavigatorWindow: MarkdownNavigatorWindowComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorWindowComponent),
      ).componentInstance;
      const markdownNavigator: MarkdownNavigatorComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorComponent),
      ).componentInstance;

      expect(markdownNavigatorWindow.titleLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.title);
      expect(markdownNavigatorWindow.closeLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.close);
      expect(markdownNavigator.goHomeLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goHome);
      expect(markdownNavigator.goBackLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.goBack);
      expect(markdownNavigator.emptyStateLabel).toBe(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.emptyState);
    }),
  ));

  it('should use labels if passed in', async(
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
      };
      fixture.componentInstance.labels = SAMPLE_LABELS;
      await wait(fixture);

      const markdownNavigatorWindow: MarkdownNavigatorWindowComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorWindowComponent),
      ).componentInstance;

      expect(markdownNavigatorWindow.titleLabel).toBe(SAMPLE_LABELS.title);
      expect(markdownNavigatorWindow.closeLabel).toBe(SAMPLE_LABELS.close);
      expect(markdownNavigatorWindow.markdownNavigatorLabels).toBeTruthy();
      expect(markdownNavigatorWindow.markdownNavigatorLabels).toEqual({
        goHome: SAMPLE_LABELS.goHome,
        goBack: SAMPLE_LABELS.goBack,
        emptyState: SAMPLE_LABELS.emptyState,
      });
    }),
  ));

  it('pass items to markdownNavigator component', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMarkdownNavigatorWindowTestComponent> = TestBed.createComponent(
        TdMarkdownNavigatorWindowTestComponent,
      );

      fixture.componentInstance.items = URL_ITEM;
      await wait(fixture);

      const markdownNavigator: MarkdownNavigatorComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorComponent),
      ).componentInstance;

      expect(markdownNavigator.items).toEqual(URL_ITEM);

      fixture.componentInstance.items = RAW_MARKDOWN_ITEM;
      await wait(fixture);

      expect(markdownNavigator.items).toEqual(RAW_MARKDOWN_ITEM);
    }),
  ));

  it('default to primary color if toolbarColor is not passed in', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMarkdownNavigatorWindowWOColorTestComponent> = TestBed.createComponent(
        TdMarkdownNavigatorWindowWOColorTestComponent,
      );

      await wait(fixture);

      const toolbar: MatToolbar = fixture.debugElement.query(By.directive(MatToolbar)).componentInstance;

      expect(toolbar.color).toBe('primary');
    }),
  ));

  it('use color if toolBar color is passed in', async(
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
  ));

  it('emit a close event ', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMarkdownNavigatorWindowTestComponent> = TestBed.createComponent(
        TdMarkdownNavigatorWindowTestComponent,
      );

      await wait(fixture);
      const markdownNavigatorWindow: MarkdownNavigatorWindowComponent = fixture.debugElement.query(
        By.directive(MarkdownNavigatorWindowComponent),
      ).componentInstance;

      spyOn(markdownNavigatorWindow.closed, 'emit');

      const closeButton: DebugElement = fixture.debugElement.query(By.css('.td-markdown-navigator-window-close'));
      closeButton.nativeElement.click();

      await wait(fixture);

      expect(markdownNavigatorWindow.closed.emit).toHaveBeenCalled();
    }),
  ));
});

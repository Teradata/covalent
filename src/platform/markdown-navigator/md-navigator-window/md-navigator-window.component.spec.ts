import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ThemePalette } from '@angular/material/core';
import { CovalentMdNavigatorModule } from '../md-navigator.module';
import { MatToolbar } from '@angular/material/toolbar';
import {
  IMdNavigatorWindowLabels,
  MdNavigatorWindowComponent,
  DEFAULT_MD_NAVIGATOR_WINDOW_LABELS,
} from './md-navigator-window.component';
import { IMdNavigatorItem, MdNavigatorComponent, DEFAULT_MD_NAVIGATOR_LABELS } from '../md-navigator.component';

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

async function wait(fixture: ComponentFixture<any>): Promise<void> {
  fixture.detectChanges();
  await fixture.whenStable();
}

@Component({
  selector: 'td-md-navigator-window-test',
  template: `
    <td-md-navigator-window
      [items]="items"
      [style.height.px]="450"
      [labels]="labels"
      [toolbarColor]="toolbarColor"
    ></td-md-navigator-window>
  `,
})
class TdMdNavigatorWindowTestComponent {
  items: IMdNavigatorItem[] = [];
  labels: IMdNavigatorWindowLabels;
  toolbarColor: ThemePalette;
}

@Component({
  selector: 'td-md-navigator-window-w-o-color-test',
  template: `
    <td-md-navigator-window [items]="items" [style.height.px]="450" [labels]="labels"></td-md-navigator-window>
  `,
})
class TdMdNavigatorWindowWOColorTestComponent {
  items: IMdNavigatorItem[] = [];
  labels: IMdNavigatorWindowLabels;
}

describe('MdNavigatorWindowComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TdMdNavigatorWindowTestComponent, TdMdNavigatorWindowWOColorTestComponent],
      imports: [NoopAnimationsModule, CovalentMdNavigatorModule],
    }).compileComponents();
  }));

  it('should use default labels if labels is undefined', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMdNavigatorWindowTestComponent> = TestBed.createComponent(TdMdNavigatorWindowTestComponent);

      await wait(fixture);

      const mdNavigatorWindow: MdNavigatorWindowComponent = fixture.debugElement.query(By.directive(MdNavigatorWindowComponent))
        .componentInstance;
      const mdNavigator: MdNavigatorComponent = fixture.debugElement.query(By.directive(MdNavigatorComponent)).componentInstance;

      expect(mdNavigatorWindow.titleLabel).toBe(DEFAULT_MD_NAVIGATOR_WINDOW_LABELS.title);
      expect(mdNavigatorWindow.closeLabel).toBe(DEFAULT_MD_NAVIGATOR_WINDOW_LABELS.close);
      expect(mdNavigatorWindow.mdNavigatorLabels).toBeFalsy();
      expect(mdNavigator.goHomeLabel).toBe(DEFAULT_MD_NAVIGATOR_LABELS.goHome);
      expect(mdNavigator.goBackLabel).toBe(DEFAULT_MD_NAVIGATOR_LABELS.goBack);
      expect(mdNavigator.emptyStateLabel).toBe(DEFAULT_MD_NAVIGATOR_LABELS.emptyState);
    }),
  ));

  it('should use default labels if labels is an empty object', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMdNavigatorWindowTestComponent> = TestBed.createComponent(TdMdNavigatorWindowTestComponent);

      await wait(fixture);

      const mdNavigatorWindow: MdNavigatorWindowComponent = fixture.debugElement.query(By.directive(MdNavigatorWindowComponent))
        .componentInstance;
      const mdNavigator: MdNavigatorComponent = fixture.debugElement.query(By.directive(MdNavigatorComponent)).componentInstance;

      expect(mdNavigatorWindow.titleLabel).toBe(DEFAULT_MD_NAVIGATOR_WINDOW_LABELS.title);
      expect(mdNavigatorWindow.closeLabel).toBe(DEFAULT_MD_NAVIGATOR_WINDOW_LABELS.close);
      expect(mdNavigator.goHomeLabel).toBe(DEFAULT_MD_NAVIGATOR_LABELS.goHome);
      expect(mdNavigator.goBackLabel).toBe(DEFAULT_MD_NAVIGATOR_LABELS.goBack);
      expect(mdNavigator.emptyStateLabel).toBe(DEFAULT_MD_NAVIGATOR_LABELS.emptyState);
    }),
  ));

  it('should use labels if passed in', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMdNavigatorWindowTestComponent> = TestBed.createComponent(TdMdNavigatorWindowTestComponent);

      const SAMPLE_LABELS: IMdNavigatorWindowLabels = {
        title: 'Ayuda!',
        close: 'Cierra',
        goHome: 'Vete pa tu casa',
        goBack: 'Regresa',
        emptyState: 'No hay nada',
      };
      fixture.componentInstance.labels = SAMPLE_LABELS;
      await wait(fixture);

      const mdNavigatorWindow: MdNavigatorWindowComponent = fixture.debugElement.query(By.directive(MdNavigatorWindowComponent))
        .componentInstance;

      expect(mdNavigatorWindow.titleLabel).toBe(SAMPLE_LABELS.title);
      expect(mdNavigatorWindow.closeLabel).toBe(SAMPLE_LABELS.close);
      expect(mdNavigatorWindow.mdNavigatorLabels).toBeTruthy();
      expect(mdNavigatorWindow.mdNavigatorLabels).toEqual({
        goHome: SAMPLE_LABELS.goHome,
        goBack: SAMPLE_LABELS.goBack,
        emptyState: SAMPLE_LABELS.emptyState,
      });
    }),
  ));

  it('pass items to mdNavigator component', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMdNavigatorWindowTestComponent> = TestBed.createComponent(TdMdNavigatorWindowTestComponent);

      fixture.componentInstance.items = URL_ITEM;
      await wait(fixture);

      const mdNavigator: MdNavigatorComponent = fixture.debugElement.query(By.directive(MdNavigatorComponent)).componentInstance;

      expect(mdNavigator.items).toEqual(URL_ITEM);

      fixture.componentInstance.items = RAW_MARKDOWN_ITEM;
      await wait(fixture);

      expect(mdNavigator.items).toEqual(RAW_MARKDOWN_ITEM);
    }),
  ));

  it('default to primary color if toolbarColor is not passed in', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMdNavigatorWindowWOColorTestComponent> = TestBed.createComponent(
        TdMdNavigatorWindowWOColorTestComponent,
      );

      await wait(fixture);

      const toolbar: MatToolbar = fixture.debugElement.query(By.directive(MatToolbar)).componentInstance;

      expect(toolbar.color).toBe('primary');
    }),
  ));

  it('use color if toolBar color is passed in', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdMdNavigatorWindowTestComponent> = TestBed.createComponent(TdMdNavigatorWindowTestComponent);

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
      const fixture: ComponentFixture<TdMdNavigatorWindowTestComponent> = TestBed.createComponent(TdMdNavigatorWindowTestComponent);

      await wait(fixture);
      const mdNavigatorWindow: MdNavigatorWindowComponent = fixture.debugElement.query(By.directive(MdNavigatorWindowComponent))
        .componentInstance;

      spyOn(mdNavigatorWindow.closed, 'emit');

      const closeButton: DebugElement = fixture.debugElement.query(By.css('.td-md-navigator-window-close'));
      closeButton.nativeElement.click();

      await wait(fixture);

      expect(mdNavigatorWindow.closed.emit).toHaveBeenCalled();
    }),
  ));
});

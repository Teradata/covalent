import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  IHelpWindowComponentLabels,
  IHelpMenuDataItem,
  DEFAULT_HELP_WINDOW_COMP_LABELS,
  DEFAULT_HELP_COMP_LABELS,
} from '../help.utils';
import { ThemePalette } from '@angular/material/core';
import { CovalentHelpModule } from '../help.module';
import { HelpWindowComponent } from './help-window.component';
import { HelpComponent } from '../help.component';
import { MatToolbar } from '@angular/material/toolbar';

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

async function wait(fixture: ComponentFixture<any>): Promise<void> {
  fixture.detectChanges();
  await fixture.whenRenderingDone();
  await fixture.whenStable();
}

@Component({
  selector: 'td-help-window-test',
  template: `
    <td-help-window
      [items]="items"
      [style.height.px]="450"
      [labels]="labels"
      [toolbarColor]="toolbarColor"
    ></td-help-window>
  `,
})
class TdHelpWindowTestComponent {
  items: IHelpMenuDataItem[] = [];
  labels: IHelpWindowComponentLabels;
  toolbarColor: ThemePalette;
}

@Component({
  selector: 'td-help-window-w-o-color-test',
  template: `
    <td-help-window [items]="items" [style.height.px]="450" [labels]="labels"></td-help-window>
  `,
})
class TdHelpWindowWOColorTestComponent {
  items: IHelpMenuDataItem[] = [];
  labels: IHelpWindowComponentLabels;
}

describe('HelpWindowComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TdHelpWindowTestComponent, TdHelpWindowWOColorTestComponent],
      imports: [NoopAnimationsModule, CovalentHelpModule],
    }).compileComponents();
  }));

  it('should use default labels if labels is undefined', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdHelpWindowTestComponent> = TestBed.createComponent(TdHelpWindowTestComponent);

      await wait(fixture);

      const helpWindow: HelpWindowComponent = fixture.debugElement.query(By.directive(HelpWindowComponent))
        .componentInstance;
      const help: HelpComponent = fixture.debugElement.query(By.directive(HelpComponent)).componentInstance;

      expect(helpWindow.helpLabel).toBe(DEFAULT_HELP_WINDOW_COMP_LABELS.help);
      expect(helpWindow.closeLabel).toBe(DEFAULT_HELP_WINDOW_COMP_LABELS.close);
      expect(helpWindow.helpComponentLabels).toBeFalsy();
      expect(help.goHomeLabel).toBe(DEFAULT_HELP_COMP_LABELS.goHome);
      expect(help.goBackLabel).toBe(DEFAULT_HELP_COMP_LABELS.goBack);
      expect(help.emptyStateLabel).toBe(DEFAULT_HELP_COMP_LABELS.emptyState);
    }),
  ));

  it('should use default labels if labels is an empty object', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdHelpWindowTestComponent> = TestBed.createComponent(TdHelpWindowTestComponent);

      await wait(fixture);

      const helpWindow: HelpWindowComponent = fixture.debugElement.query(By.directive(HelpWindowComponent))
        .componentInstance;
      const help: HelpComponent = fixture.debugElement.query(By.directive(HelpComponent)).componentInstance;

      expect(helpWindow.helpLabel).toBe(DEFAULT_HELP_WINDOW_COMP_LABELS.help);
      expect(helpWindow.closeLabel).toBe(DEFAULT_HELP_WINDOW_COMP_LABELS.close);
      expect(help.goHomeLabel).toBe(DEFAULT_HELP_COMP_LABELS.goHome);
      expect(help.goBackLabel).toBe(DEFAULT_HELP_COMP_LABELS.goBack);
      expect(help.emptyStateLabel).toBe(DEFAULT_HELP_COMP_LABELS.emptyState);
    }),
  ));

  it('should use labels if passed in', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdHelpWindowTestComponent> = TestBed.createComponent(TdHelpWindowTestComponent);

      const SAMPLE_LABELS: IHelpWindowComponentLabels = {
        help: 'Ayuda!',
        close: 'Cierra',
        goHome: 'Vete pa tu casa',
        goBack: 'Regresa',
        emptyState: 'No hay nada',
      };
      fixture.componentInstance.labels = SAMPLE_LABELS;
      await wait(fixture);

      const helpWindow: HelpWindowComponent = fixture.debugElement.query(By.directive(HelpWindowComponent))
        .componentInstance;

      expect(helpWindow.helpLabel).toBe(SAMPLE_LABELS.help);
      expect(helpWindow.closeLabel).toBe(SAMPLE_LABELS.close);
      expect(helpWindow.helpComponentLabels).toBeTruthy();
      expect(helpWindow.helpComponentLabels).toEqual({
        goHome: SAMPLE_LABELS.goHome,
        goBack: SAMPLE_LABELS.goBack,
        emptyState: SAMPLE_LABELS.emptyState,
      });
    }),
  ));

  it('pass items to help component', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdHelpWindowTestComponent> = TestBed.createComponent(TdHelpWindowTestComponent);

      fixture.componentInstance.items = URL_ITEM;
      await wait(fixture);

      const help: HelpComponent = fixture.debugElement.query(By.directive(HelpComponent)).componentInstance;

      expect(help.items).toEqual(URL_ITEM);

      fixture.componentInstance.items = RAW_MARKDOWN_ITEM;
      await wait(fixture);

      expect(help.items).toEqual(RAW_MARKDOWN_ITEM);
    }),
  ));

  it('default to primary color if toolbarColor is not passed in', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdHelpWindowWOColorTestComponent> = TestBed.createComponent(
        TdHelpWindowWOColorTestComponent,
      );

      await wait(fixture);

      const toolbar: MatToolbar = fixture.debugElement.query(By.directive(MatToolbar)).componentInstance;

      expect(toolbar.color).toBe('primary');
    }),
  ));

  it('use color if toolBar color is passed in', async(
    inject([], async () => {
      const fixture: ComponentFixture<TdHelpWindowTestComponent> = TestBed.createComponent(TdHelpWindowTestComponent);

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
      const fixture: ComponentFixture<TdHelpWindowTestComponent> = TestBed.createComponent(TdHelpWindowTestComponent);

      await wait(fixture);
      const helpWindow: HelpWindowComponent = fixture.debugElement.query(By.directive(HelpWindowComponent))
        .componentInstance;

      spyOn(helpWindow.closed, 'emit');

      const closeButton: DebugElement = fixture.debugElement.query(By.css('.td-help-window-close'));
      closeButton.nativeElement.click();

      await wait(fixture);

      expect(helpWindow.closed.emit).toHaveBeenCalled();
    }),
  ));
});

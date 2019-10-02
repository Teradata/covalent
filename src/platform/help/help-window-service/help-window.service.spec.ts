import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { CovalentHelpModule } from '../help.module';
import { HelpWindowService } from './help-window.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { IHelpItem, DEFAULT_HELP_COMP_LABELS } from '../help.component';
import { HelpWindowComponent, IHelpWindowComponentLabels } from '../help-window/help-window.component';

const RAW_MARKDOWN_HEADING: string = 'Heading';
const RAW_MARKDOWN: string = `# ${RAW_MARKDOWN_HEADING}`;
const RAW_MARKDOWN_ITEMS: IHelpItem[] = [
  {
    markdownString: RAW_MARKDOWN,
  },
  {
    markdownString: RAW_MARKDOWN,
  },
];

async function wait(fixture: ComponentFixture<any>): Promise<void> {
  fixture.detectChanges();
  await fixture.whenStable();
}

@Component({
  selector: 'test-component',
  template: `
    <div></div>
  `,
})
class TestComponent {}

describe('HelpWindowService', () => {
  let overlayContainerElement: HTMLElement;

  function getHelpComponent(): HTMLElement {
    return <HTMLElement>overlayContainerElement.querySelector(`td-help`);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, CovalentHelpModule],
      declarations: [TestComponent],
      providers: [
        {
          provide: OverlayContainer,
          useFactory: () => {
            overlayContainerElement = document.createElement('div') as HTMLElement;
            overlayContainerElement.classList.add('cdk-overlay-container');
            document.body.appendChild(overlayContainerElement);
            return { getContainerElement: () => overlayContainerElement };
          },
        },
      ],
    });
  }));

  it('should open and close help window properly', async(
    inject([HelpWindowService], async (_helpWindowService: HelpWindowService) => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
      const dialogRef: MatDialogRef<HelpWindowComponent> = _helpWindowService.open({ items: [] });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(getHelpComponent()).toBeTruthy();

      (<HTMLElement>overlayContainerElement.querySelector(`td-help-window .td-help-window-close`)).click();
      await wait(fixture);

      expect(getHelpComponent()).toBeFalsy();
    }),
  ));
  it('should open with no items', async(
    inject([HelpWindowService], async (_helpWindowService: HelpWindowService) => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
      const dialogRef: MatDialogRef<HelpWindowComponent> = _helpWindowService.open({ items: [] });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.items).toEqual([]);
      expect(getHelpComponent().querySelectorAll('mat-action-list button').length).toBe(0);

      dialogRef.close();
      await wait(fixture);
    }),
  ));
  it('should open with an item', async(
    inject([HelpWindowService], async (_helpWindowService: HelpWindowService) => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
      const dialogRef: MatDialogRef<HelpWindowComponent> = _helpWindowService.open({
        items: RAW_MARKDOWN_ITEMS,
      });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.items).toEqual(RAW_MARKDOWN_ITEMS);
      expect(getHelpComponent().querySelectorAll('mat-action-list button').length).toBe(2);

      dialogRef.close();
      await wait(fixture);
    }),
  ));

  it('should use passed in labels', async(
    inject([HelpWindowService], async (_helpWindowService: HelpWindowService) => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
      let dialogRef: MatDialogRef<HelpWindowComponent> = _helpWindowService.open({
        items: [],
        labels: {},
      });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.labels).toEqual({});
      expect(getHelpComponent().textContent).toContain(DEFAULT_HELP_COMP_LABELS.emptyState);
      dialogRef.close();
      await wait(fixture);

      const SAMPLE_LABELS: IHelpWindowComponentLabels = {
        emptyState: 'Boo hoo :(',
      };
      dialogRef = _helpWindowService.open({
        items: [],
        labels: SAMPLE_LABELS,
      });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.labels).toEqual(SAMPLE_LABELS);
      expect(getHelpComponent().textContent).toContain(SAMPLE_LABELS.emptyState);

      dialogRef.close();
      await wait(fixture);
    }),
  ));

  it('should use default to primary toolbar color', async(
    inject([HelpWindowService], async (_helpWindowService: HelpWindowService) => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
      const dialogRef: MatDialogRef<HelpWindowComponent> = _helpWindowService.open({
        items: RAW_MARKDOWN_ITEMS,
      });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.toolbarColor).toBe('primary');

      dialogRef.close();
      await wait(fixture);
    }),
  ));
  it('should use passed in toolbar color', async(
    inject([HelpWindowService], async (_helpWindowService: HelpWindowService) => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
      let dialogRef: MatDialogRef<HelpWindowComponent> = _helpWindowService.open({
        items: [],
        toolbarColor: 'accent',
      });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.toolbarColor).toBe('accent');

      dialogRef.close();
      await wait(fixture);

      dialogRef = _helpWindowService.open({ items: [], toolbarColor: 'primary' });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.toolbarColor).toBe('primary');

      dialogRef.close();
      await wait(fixture);

      dialogRef = _helpWindowService.open({ items: [], toolbarColor: 'warn' });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.toolbarColor).toBe('warn');

      dialogRef.close();
      await wait(fixture);

      dialogRef = _helpWindowService.open({ items: [], toolbarColor: undefined });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.toolbarColor).toBe(undefined);

      dialogRef.close();
      await wait(fixture);
    }),
  ));

  it('should have proper classes', async(
    inject([HelpWindowService], async (_helpWindowService: HelpWindowService) => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
      const dialogRef: MatDialogRef<HelpWindowComponent> = _helpWindowService.open({ items: [] });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(overlayContainerElement.querySelector(`.td-draggable-help-window-wrapper`)).toBeTruthy();
      expect(overlayContainerElement.querySelector(`td-help-window.td-draggable-help-window`)).toBeTruthy();
      expect(window.getComputedStyle(overlayContainerElement.querySelector(`.td-help-window-toolbar`)).cursor).toBe(
        'move',
      );

      dialogRef.close();
      await wait(fixture);
    }),
  ));
});

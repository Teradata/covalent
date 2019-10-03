import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { CovalentMdNavigatorModule } from '../md-navigator.module';
import { MdNavigatorWindowService } from './md-navigator-window.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { IMdNavigatorItem, DEFAULT_MD_NAVIGATOR_LABELS } from '../md-navigator.component';
import { MdNavigatorWindowComponent, IMdNavigatorWindowLabels } from '../md-navigator-window/md-navigator-window.component';

const RAW_MARKDOWN_HEADING: string = 'Heading';
const RAW_MARKDOWN: string = `# ${RAW_MARKDOWN_HEADING}`;
const RAW_MARKDOWN_ITEMS: IMdNavigatorItem[] = [
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

describe('MdNavigatorWindowService', () => {
  let overlayContainerElement: HTMLElement;

  function getMdNavigator(): HTMLElement {
    return <HTMLElement>overlayContainerElement.querySelector(`td-md-navigator`);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, CovalentMdNavigatorModule],
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

  it('should open and close md navigator window properly', async(
    inject([MdNavigatorWindowService], async (_mdNavigatorWindowService: MdNavigatorWindowService) => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
      const dialogRef: MatDialogRef<MdNavigatorWindowComponent> = _mdNavigatorWindowService.open({ items: [] });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(getMdNavigator()).toBeTruthy();

      (<HTMLElement>overlayContainerElement.querySelector(`td-md-navigator-window .td-md-navigator-window-close`)).click();
      await wait(fixture);

      expect(getMdNavigator()).toBeFalsy();
    }),
  ));
  it('should open with no items', async(
    inject([MdNavigatorWindowService], async (_mdNavigatorWindowService: MdNavigatorWindowService) => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
      const dialogRef: MatDialogRef<MdNavigatorWindowComponent> = _mdNavigatorWindowService.open({ items: [] });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.items).toEqual([]);
      expect(getMdNavigator().querySelectorAll('mat-action-list button').length).toBe(0);

      dialogRef.close();
      await wait(fixture);
    }),
  ));
  it('should open with an item', async(
    inject([MdNavigatorWindowService], async (_mdNavigatorWindowService: MdNavigatorWindowService) => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
      const dialogRef: MatDialogRef<MdNavigatorWindowComponent> = _mdNavigatorWindowService.open({
        items: RAW_MARKDOWN_ITEMS,
      });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.items).toEqual(RAW_MARKDOWN_ITEMS);
      expect(getMdNavigator().querySelectorAll('mat-action-list button').length).toBe(2);

      dialogRef.close();
      await wait(fixture);
    }),
  ));

  it('should use passed in labels', async(
    inject([MdNavigatorWindowService], async (_mdNavigatorWindowService: MdNavigatorWindowService) => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
      let dialogRef: MatDialogRef<MdNavigatorWindowComponent> = _mdNavigatorWindowService.open({
        items: [],
        labels: {},
      });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.labels).toEqual({});
      expect(getMdNavigator().textContent).toContain(DEFAULT_MD_NAVIGATOR_LABELS.emptyState);
      dialogRef.close();
      await wait(fixture);

      const SAMPLE_LABELS: IMdNavigatorWindowLabels = {
        emptyState: 'Boo hoo :(',
      };
      dialogRef = _mdNavigatorWindowService.open({
        items: [],
        labels: SAMPLE_LABELS,
      });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.labels).toEqual(SAMPLE_LABELS);
      expect(getMdNavigator().textContent).toContain(SAMPLE_LABELS.emptyState);

      dialogRef.close();
      await wait(fixture);
    }),
  ));

  it('should use default to primary toolbar color', async(
    inject([MdNavigatorWindowService], async (_mdNavigatorWindowService: MdNavigatorWindowService) => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
      const dialogRef: MatDialogRef<MdNavigatorWindowComponent> = _mdNavigatorWindowService.open({
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
    inject([MdNavigatorWindowService], async (_mdNavigatorWindowService: MdNavigatorWindowService) => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
      let dialogRef: MatDialogRef<MdNavigatorWindowComponent> = _mdNavigatorWindowService.open({
        items: [],
        toolbarColor: 'accent',
      });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.toolbarColor).toBe('accent');

      dialogRef.close();
      await wait(fixture);

      dialogRef = _mdNavigatorWindowService.open({ items: [], toolbarColor: 'primary' });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.toolbarColor).toBe('primary');

      dialogRef.close();
      await wait(fixture);

      dialogRef = _mdNavigatorWindowService.open({ items: [], toolbarColor: 'warn' });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.toolbarColor).toBe('warn');

      dialogRef.close();
      await wait(fixture);

      dialogRef = _mdNavigatorWindowService.open({ items: [], toolbarColor: undefined });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(dialogRef.componentInstance.toolbarColor).toBe(undefined);

      dialogRef.close();
      await wait(fixture);
    }),
  ));

  it('should have proper classes', async(
    inject([MdNavigatorWindowService], async (_mdNavigatorWindowService: MdNavigatorWindowService) => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
      const dialogRef: MatDialogRef<MdNavigatorWindowComponent> = _mdNavigatorWindowService.open({ items: [] });

      await wait(fixture);
      await dialogRef.afterOpen().toPromise();

      expect(overlayContainerElement.querySelector(`.td-draggable-md-navigator-window-wrapper`)).toBeTruthy();
      expect(overlayContainerElement.querySelector(`td-md-navigator-window.td-draggable-md-navigator-window`)).toBeTruthy();
      expect(window.getComputedStyle(overlayContainerElement.querySelector(`.td-md-navigator-window-toolbar`)).cursor).toBe(
        'move',
      );

      dialogRef.close();
      await wait(fixture);
    }),
  ));
});

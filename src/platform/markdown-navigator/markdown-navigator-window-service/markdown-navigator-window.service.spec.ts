import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { CovalentMarkdownNavigatorModule } from '../markdown-navigator.module';
import { MarkdownNavigatorWindowService } from './markdown-navigator-window.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { IMarkdownNavigatorItem, DEFAULT_MARKDOWN_NAVIGATOR_LABELS } from '../markdown-navigator.component';
import {
  MarkdownNavigatorWindowComponent,
  IMarkdownNavigatorWindowLabels,
} from '../markdown-navigator-window/markdown-navigator-window.component';

const RAW_MARKDOWN_HEADING: string = 'Heading';
const RAW_MARKDOWN: string = `# ${RAW_MARKDOWN_HEADING}`;
const RAW_MARKDOWN_ITEMS: IMarkdownNavigatorItem[] = [
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

describe('MarkdownNavigatorWindowService', () => {
  let overlayContainerElement: HTMLElement;

  function getMarkdownNavigator(): HTMLElement {
    return <HTMLElement>overlayContainerElement.querySelector(`td-markdown-navigator`);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, CovalentMarkdownNavigatorModule],
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

  it('should open and close markdown navigator window properly', async(
    inject(
      [MarkdownNavigatorWindowService],
      async (_markdownNavigatorWindowService: MarkdownNavigatorWindowService) => {
        const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
        const dialogRef: MatDialogRef<MarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
          items: [],
        });

        await wait(fixture);
        await dialogRef.afterOpen().toPromise();

        expect(getMarkdownNavigator()).toBeTruthy();

        (<HTMLElement>(
          overlayContainerElement.querySelector(`td-markdown-navigator-window .td-markdown-navigator-window-close`)
        )).click();
        await wait(fixture);

        expect(getMarkdownNavigator()).toBeFalsy();
      },
    ),
  ));
  it('should open with no items', async(
    inject(
      [MarkdownNavigatorWindowService],
      async (_markdownNavigatorWindowService: MarkdownNavigatorWindowService) => {
        const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
        const dialogRef: MatDialogRef<MarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
          items: [],
        });

        await wait(fixture);
        await dialogRef.afterOpen().toPromise();

        expect(dialogRef.componentInstance.items).toEqual([]);
        expect(getMarkdownNavigator().querySelectorAll('mat-action-list button').length).toBe(0);

        dialogRef.close();
        await wait(fixture);
      },
    ),
  ));
  it('should open with an item', async(
    inject(
      [MarkdownNavigatorWindowService],
      async (_markdownNavigatorWindowService: MarkdownNavigatorWindowService) => {
        const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
        const dialogRef: MatDialogRef<MarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
          items: RAW_MARKDOWN_ITEMS,
        });

        await wait(fixture);
        await dialogRef.afterOpen().toPromise();

        expect(dialogRef.componentInstance.items).toEqual(RAW_MARKDOWN_ITEMS);
        expect(getMarkdownNavigator().querySelectorAll('mat-action-list button').length).toBe(2);

        dialogRef.close();
        await wait(fixture);
      },
    ),
  ));

  it('should use passed in labels', async(
    inject(
      [MarkdownNavigatorWindowService],
      async (_markdownNavigatorWindowService: MarkdownNavigatorWindowService) => {
        const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
        let dialogRef: MatDialogRef<MarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
          items: [],
          labels: {},
        });

        await wait(fixture);
        await dialogRef.afterOpen().toPromise();

        expect(dialogRef.componentInstance.labels).toEqual({});
        expect(getMarkdownNavigator().textContent).toContain(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.emptyState);
        dialogRef.close();
        await wait(fixture);

        const SAMPLE_LABELS: IMarkdownNavigatorWindowLabels = {
          emptyState: 'Boo hoo :(',
        };
        dialogRef = _markdownNavigatorWindowService.open({
          items: [],
          labels: SAMPLE_LABELS,
        });

        await wait(fixture);
        await dialogRef.afterOpen().toPromise();

        expect(dialogRef.componentInstance.labels).toEqual(SAMPLE_LABELS);
        expect(getMarkdownNavigator().textContent).toContain(SAMPLE_LABELS.emptyState);

        dialogRef.close();
        await wait(fixture);
      },
    ),
  ));

  it('should use default to primary toolbar color', async(
    inject(
      [MarkdownNavigatorWindowService],
      async (_markdownNavigatorWindowService: MarkdownNavigatorWindowService) => {
        const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
        const dialogRef: MatDialogRef<MarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
          items: RAW_MARKDOWN_ITEMS,
        });

        await wait(fixture);
        await dialogRef.afterOpen().toPromise();

        expect(dialogRef.componentInstance.toolbarColor).toBe('primary');

        dialogRef.close();
        await wait(fixture);
      },
    ),
  ));
  it('should use passed in toolbar color', async(
    inject(
      [MarkdownNavigatorWindowService],
      async (_markdownNavigatorWindowService: MarkdownNavigatorWindowService) => {
        const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
        let dialogRef: MatDialogRef<MarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
          items: [],
          toolbarColor: 'accent',
        });

        await wait(fixture);
        await dialogRef.afterOpen().toPromise();

        expect(dialogRef.componentInstance.toolbarColor).toBe('accent');

        dialogRef.close();
        await wait(fixture);

        dialogRef = _markdownNavigatorWindowService.open({ items: [], toolbarColor: 'primary' });

        await wait(fixture);
        await dialogRef.afterOpen().toPromise();

        expect(dialogRef.componentInstance.toolbarColor).toBe('primary');

        dialogRef.close();
        await wait(fixture);

        dialogRef = _markdownNavigatorWindowService.open({ items: [], toolbarColor: 'warn' });

        await wait(fixture);
        await dialogRef.afterOpen().toPromise();

        expect(dialogRef.componentInstance.toolbarColor).toBe('warn');

        dialogRef.close();
        await wait(fixture);

        dialogRef = _markdownNavigatorWindowService.open({ items: [], toolbarColor: undefined });

        await wait(fixture);
        await dialogRef.afterOpen().toPromise();

        expect(dialogRef.componentInstance.toolbarColor).toBe(undefined);

        dialogRef.close();
        await wait(fixture);
      },
    ),
  ));

  it('should have proper classes', async(
    inject(
      [MarkdownNavigatorWindowService],
      async (_markdownNavigatorWindowService: MarkdownNavigatorWindowService) => {
        const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
        const dialogRef: MatDialogRef<MarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
          items: [],
        });

        await wait(fixture);
        await dialogRef.afterOpen().toPromise();

        expect(overlayContainerElement.querySelector(`.td-draggable-markdown-navigator-window-wrapper`)).toBeTruthy();
        expect(
          overlayContainerElement.querySelector(`td-markdown-navigator-window.td-draggable-markdown-navigator-window`),
        ).toBeTruthy();
        expect(
          window.getComputedStyle(overlayContainerElement.querySelector(`.td-markdown-navigator-window-toolbar`))
            .cursor,
        ).toBe('move');

        dialogRef.close();
        await wait(fixture);
      },
    ),
  ));
});

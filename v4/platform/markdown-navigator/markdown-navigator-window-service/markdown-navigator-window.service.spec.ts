import { TestBed, inject, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { CovalentMarkdownNavigatorModule } from '../markdown-navigator.module';
import { TdMarkdownNavigatorWindowService } from './markdown-navigator-window.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { IMarkdownNavigatorItem, DEFAULT_MARKDOWN_NAVIGATOR_LABELS } from '../markdown-navigator.component';
import {
  TdMarkdownNavigatorWindowComponent,
  IMarkdownNavigatorWindowLabels,
} from '../markdown-navigator-window/markdown-navigator-window.component';
import { DEEPLY_NESTED_TREE, compareByTitle } from '../markdown-navigator.component.spec';
import { ITdFlavoredMarkdownButtonClickEvent } from '@covalent/flavored-markdown';

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

async function wait(fixture: ComponentFixture<TestComponent>): Promise<void> {
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
    return overlayContainerElement.querySelector(`td-markdown-navigator`);
  }

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, CovalentMarkdownNavigatorModule],
        declarations: [TestComponent],
        providers: [
          {
            provide: OverlayContainer,
            useFactory: () => {
              overlayContainerElement = document.createElement('div');
              overlayContainerElement.classList.add('cdk-overlay-container');
              document.body.appendChild(overlayContainerElement);
              return { getContainerElement: () => overlayContainerElement };
            },
          },
        ],
      });
    }),
  );

  it(
    'should open and close markdown navigator window properly',
    waitForAsync(
      inject(
        [TdMarkdownNavigatorWindowService],
        async (_markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) => {
          const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
          const dialogRef: MatDialogRef<TdMarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
            items: [],
          });

          await wait(fixture);
          await dialogRef.afterOpened().toPromise();

          expect(getMarkdownNavigator()).toBeTruthy();
          // tslint:disable-next-line:no-useless-cast
          (<HTMLElement>(
            overlayContainerElement.querySelector(`td-markdown-navigator-window .td-window-dialog-close`)
          )).click();
          await wait(fixture);

          expect(getMarkdownNavigator()).toBeFalsy();
        },
      ),
    ),
  );
  it(
    'should open with no items',
    waitForAsync(
      inject(
        [TdMarkdownNavigatorWindowService],
        async (_markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) => {
          const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
          const dialogRef: MatDialogRef<TdMarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
            items: [],
          });

          await wait(fixture);
          await dialogRef.afterOpened().toPromise();

          expect(dialogRef.componentInstance.items).toEqual([]);
          expect(getMarkdownNavigator().querySelectorAll('mat-action-list button').length).toBe(0);
          _markdownNavigatorWindowService.close();
          await wait(fixture);
        },
      ),
    ),
  );
  it(
    'should open with an item',
    waitForAsync(
      inject(
        [TdMarkdownNavigatorWindowService],
        async (_markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) => {
          const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
          const dialogRef: MatDialogRef<TdMarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
            items: RAW_MARKDOWN_ITEMS,
          });

          await wait(fixture);
          await dialogRef.afterOpened().toPromise();

          expect(dialogRef.componentInstance.items).toEqual(RAW_MARKDOWN_ITEMS);
          expect(getMarkdownNavigator().querySelectorAll('mat-action-list button').length).toBe(2);

          _markdownNavigatorWindowService.close();
          await wait(fixture);
        },
      ),
    ),
  );

  it(
    'should open to a certain item',
    waitForAsync(
      inject(
        [TdMarkdownNavigatorWindowService],
        async (_markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) => {
          const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
          const dialogRef: MatDialogRef<TdMarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
            items: DEEPLY_NESTED_TREE,
            startAt: DEEPLY_NESTED_TREE[0],
          });

          await wait(fixture);
          await dialogRef.afterOpened().toPromise();

          expect(dialogRef.componentInstance.startAt).toEqual(DEEPLY_NESTED_TREE[0]);
          expect(getMarkdownNavigator().querySelector('[data-test="title"]').textContent).toContain(
            DEEPLY_NESTED_TREE[0].title,
          );

          dialogRef.close();
          await wait(fixture);
        },
      ),
    ),
  );

  it(
    'should open to a certain item using compareWith function',
    waitForAsync(
      inject(
        [TdMarkdownNavigatorWindowService],
        async (_markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) => {
          const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
          const dialogRef: MatDialogRef<TdMarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
            items: DEEPLY_NESTED_TREE,
            startAt: DEEPLY_NESTED_TREE[1],
            compareWith: compareByTitle,
          });

          await wait(fixture);
          await dialogRef.afterOpened().toPromise();

          expect(dialogRef.componentInstance.compareWith).toEqual(compareByTitle);
          expect(getMarkdownNavigator().querySelector('[data-test="title"]').textContent).toContain(
            DEEPLY_NESTED_TREE[1].title,
          );

          dialogRef.close();
          await wait(fixture);
        },
      ),
    ),
  );

  it(
    'should use passed in labels',
    waitForAsync(
      inject(
        [TdMarkdownNavigatorWindowService],
        async (_markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) => {
          const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
          let dialogRef: MatDialogRef<TdMarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
            items: [],
            labels: {},
          });

          await wait(fixture);
          await dialogRef.afterOpened().toPromise();

          expect(dialogRef.componentInstance.labels).toEqual({});
          expect(getMarkdownNavigator().textContent).toContain(DEFAULT_MARKDOWN_NAVIGATOR_LABELS.emptyState);
          _markdownNavigatorWindowService.close();
          await wait(fixture);

          const SAMPLE_LABELS: IMarkdownNavigatorWindowLabels = {
            emptyState: 'Boo hoo :(',
          };
          dialogRef = _markdownNavigatorWindowService.open({
            items: [],
            labels: SAMPLE_LABELS,
          });

          await wait(fixture);
          await dialogRef.afterOpened().toPromise();

          expect(dialogRef.componentInstance.labels).toEqual(SAMPLE_LABELS);
          expect(getMarkdownNavigator().textContent).toContain(SAMPLE_LABELS.emptyState);

          _markdownNavigatorWindowService.close();
          await wait(fixture);
        },
      ),
    ),
  );

  it(
    'should use default to primary toolbar color',
    waitForAsync(
      inject(
        [TdMarkdownNavigatorWindowService],
        async (_markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) => {
          const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
          const dialogRef: MatDialogRef<TdMarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
            items: RAW_MARKDOWN_ITEMS,
          });

          await wait(fixture);
          await dialogRef.afterOpened().toPromise();

          expect(dialogRef.componentInstance.toolbarColor).toBe('primary');

          _markdownNavigatorWindowService.close();
          await wait(fixture);
        },
      ),
    ),
  );
  it(
    'should use passed in toolbar color',
    waitForAsync(
      inject(
        [TdMarkdownNavigatorWindowService],
        async (_markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) => {
          const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
          let dialogRef: MatDialogRef<TdMarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
            items: [],
            toolbarColor: 'accent',
          });

          await wait(fixture);
          await dialogRef.afterOpened().toPromise();

          expect(dialogRef.componentInstance.toolbarColor).toBe('accent');

          _markdownNavigatorWindowService.close();
          await wait(fixture);

          dialogRef = _markdownNavigatorWindowService.open({ items: [], toolbarColor: 'primary' });

          await wait(fixture);
          await dialogRef.afterOpened().toPromise();

          expect(dialogRef.componentInstance.toolbarColor).toBe('primary');

          _markdownNavigatorWindowService.close();
          await wait(fixture);

          dialogRef = _markdownNavigatorWindowService.open({ items: [], toolbarColor: 'warn' });

          await wait(fixture);
          await dialogRef.afterOpened().toPromise();

          expect(dialogRef.componentInstance.toolbarColor).toBe('warn');

          _markdownNavigatorWindowService.close();
          await wait(fixture);

          dialogRef = _markdownNavigatorWindowService.open({ items: [], toolbarColor: undefined });

          await wait(fixture);
          await dialogRef.afterOpened().toPromise();

          expect(dialogRef.componentInstance.toolbarColor).toBe(undefined);

          _markdownNavigatorWindowService.close();
          await wait(fixture);
        },
      ),
    ),
  );

  it(
    'should have proper classes',
    waitForAsync(
      inject(
        [TdMarkdownNavigatorWindowService],
        async (_markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) => {
          const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
          const dialogRef: MatDialogRef<TdMarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
            items: [],
          });

          await wait(fixture);
          await dialogRef.afterOpened().toPromise();

          expect(overlayContainerElement.querySelector(`.td-window-dialog`)).toBeTruthy();
          expect(
            overlayContainerElement.querySelector(
              `td-markdown-navigator-window.td-draggable-markdown-navigator-window`,
            ),
          ).toBeTruthy();
          expect(
            window.getComputedStyle(overlayContainerElement.querySelector(`.td-window-dialog-toolbar`)).cursor,
          ).toBe('move');

          _markdownNavigatorWindowService.close();
          await wait(fixture);
        },
      ),
    ),
  );

  it(
    'should only have one markdown navigator open at a time',
    waitForAsync(
      inject(
        [TdMarkdownNavigatorWindowService],
        async (_markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) => {
          const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
          expect(overlayContainerElement.querySelectorAll(`td-markdown-navigator`).length).toBe(0);
          expect(_markdownNavigatorWindowService.isOpen).toBeFalsy();
          _markdownNavigatorWindowService.open({
            items: [],
          });
          _markdownNavigatorWindowService.open({
            items: [],
          });
          _markdownNavigatorWindowService.open({
            items: [],
          });
          await wait(fixture);
          expect(overlayContainerElement.querySelectorAll(`td-markdown-navigator`).length).toBe(1);
          expect(_markdownNavigatorWindowService.isOpen).toBeTruthy();
          _markdownNavigatorWindowService.close();
        },
      ),
    ),
  );
  it(
    'should be able to listen to markdown button events',
    waitForAsync(
      inject(
        [TdMarkdownNavigatorWindowService],
        async (_markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) => {
          const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);

          const marsButtonEvent: ITdFlavoredMarkdownButtonClickEvent = {
            text: 'Got to Mars',
            data: '{"oribital_speed": "24.007 km/s"}',
          };
          const dialogRef: MatDialogRef<TdMarkdownNavigatorWindowComponent> = _markdownNavigatorWindowService.open({
            items: [
              {
                title: 'Mars',
                markdownString: ` [${marsButtonEvent.text}](#data=${marsButtonEvent.data})`,
              },
            ],
          });

          let event: ITdFlavoredMarkdownButtonClickEvent;
          dialogRef.componentInstance.buttonClicked.subscribe((data: ITdFlavoredMarkdownButtonClickEvent) => {
            event = data;
          });

          await wait(fixture);

          const button: HTMLElement = document.querySelector('td-markdown-navigator button');
          button.click();

          await wait(fixture);

          expect(event).toEqual(marsButtonEvent);
          _markdownNavigatorWindowService.close();
        },
      ),
    ),
  );
});

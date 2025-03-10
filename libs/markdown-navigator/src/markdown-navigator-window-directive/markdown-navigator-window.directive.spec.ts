import {
  TestBed,
  inject,
  ComponentFixture,
  waitForAsync,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentMarkdownNavigatorModule } from '../markdown-navigator.module';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import {
  TdMarkdownNavigatorWindowService,
  IMarkdownNavigatorWindowConfig,
} from '../markdown-navigator-window-service/markdown-navigator-window.service';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

@Component({
  selector: 'td-test-component',
  template: `
    <button [tdMarkdownNavigatorWindow]="items" [disabled]="disabled">
      Open markdown navigator window
    </button>
  `,
  imports: [CovalentMarkdownNavigatorModule],
})
class TestComponent {
  items: IMarkdownNavigatorWindowConfig = { items: [] };
  disabled!: boolean;
}

describe('MarkdownNavigatorWindowDirective', () => {
  let overlayContainerElement: HTMLElement;

  async function wait(fixture: ComponentFixture<TestComponent>): Promise<void> {
    fixture.detectChanges();
    await fixture.whenStable();
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, TestComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
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
  }));

  it('should open and close markdown navigator window properly', waitForAsync(
    inject([TdMarkdownNavigatorWindowService], async () => {
      const fixture: ComponentFixture<TestComponent> =
        TestBed.createComponent(TestComponent);
      await wait(fixture);
      fixture.debugElement.query(By.css('button')).nativeElement.click();
      await wait(fixture);
      expect(
        overlayContainerElement.querySelector(`td-markdown-navigator`)
      ).toBeTruthy();
      // tslint:disable-next-line:no-useless-cast
      (<HTMLElement>(
        overlayContainerElement.querySelector(`[data-test="close-button"]`)
      )).click();
      await wait(fixture);
      expect(
        overlayContainerElement.querySelector(`td-markdown-navigator`)
      ).toBeFalsy();
    })
  ));
  it('should not open markdown navigator window if disabled', waitForAsync(
    inject([TdMarkdownNavigatorWindowService], async () => {
      const fixture: ComponentFixture<TestComponent> =
        TestBed.createComponent(TestComponent);
      fixture.componentInstance.disabled = true;
      await wait(fixture);
      fixture.debugElement.query(By.css('button')).nativeElement.click();
      await wait(fixture);
      expect(
        overlayContainerElement.querySelector(`td-markdown-navigator`)
      ).toBeFalsy();
    })
  ));
});

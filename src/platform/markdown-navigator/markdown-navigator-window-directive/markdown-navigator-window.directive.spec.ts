import { async, TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentMarkdownNavigatorModule } from '../markdown-navigator.module';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import {
  MarkdownNavigatorWindowService,
  IMarkdownNavigatorWindowConfig,
} from '../markdown-navigator-window-service/markdown-navigator-window.service';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'test-component',
  template: `
    <button [tdMarkdownNavigatorWindow]="items">Open markdown navigator window</button>
  `,
})
class TestComponent {
  items: IMarkdownNavigatorWindowConfig = { items: [] };
}

fdescribe('MarkdownNavigatorWindowDirective', () => {
  let overlayContainerElement: HTMLElement;

  async function wait(fixture: ComponentFixture<any>): Promise<void> {
    fixture.detectChanges();
    await fixture.whenStable();
  }

  beforeEach(async(() => {
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
  }));

  it('should open and close markdown navigator window properly', async(
    inject(
      [MarkdownNavigatorWindowService],
      async (_markdownNavigatorWindowService: MarkdownNavigatorWindowService) => {
        const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
        await wait(fixture);
        fixture.debugElement.query(By.css('button')).nativeElement.click();
        await wait(fixture);
        expect(overlayContainerElement.querySelector(`td-markdown-navigator`)).toBeTruthy();
      },
    ),
  ));
});

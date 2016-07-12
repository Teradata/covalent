import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MarkdownDemoComponent } from './markdown.component';

describe('Component: MarkdownDemoTestController', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MarkdownDemoComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it(
    'should inject the component',
    inject(
      [MarkdownDemoComponent],
      (component: MarkdownDemoComponent) => {
        expect(component).toBeTruthy();
      })
  );

  it(
    'should create the component',
    inject(
      [],
      () => {
        return builder.createAsync(MarkdownDemoTestControllerComponent)
          .then((fixture: ComponentFixture<any>) => {
            let query: DebugElement = fixture.debugElement.query(By.directive(MarkdownDemoComponent));
            expect(query).toBeTruthy();
            expect(query.componentInstance).toBeTruthy();
          });
      }
    )
  );
});

@Component({
  directives: [MarkdownDemoComponent],
  selector: 'td-test',
  template: `
    <td-markdown></td-markdown>
  `,
})
class MarkdownDemoTestControllerComponent {
}


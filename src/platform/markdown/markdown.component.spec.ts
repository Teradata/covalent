import {
  beforeEach,
  addProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TdMarkdownComponent } from './markdown.component';

describe('Component: TdMarkdown', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      TdMarkdownComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([TdMarkdownComponent], (component: TdMarkdownComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TdMarkdownTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(TdMarkdownComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [TdMarkdownComponent],
  selector: 'td-test',
  template: `
    <td-markdown></td-markdown>
  `,
})
class TdMarkdownTestControllerComponent {
}

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
import { HighlightDemoComponent } from './highlight.component';

describe('Component: HighlightDemo', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      HighlightDemoComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([HighlightDemoComponent], (component: HighlightDemoComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HighlightDemoTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(HighlightDemoComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [HighlightDemoComponent],
  selector: 'td-test',
  template: `
    <td-highlight-demo></td-highlight-demo>
  `,
})
class HighlightDemoTestControllerComponent {
}

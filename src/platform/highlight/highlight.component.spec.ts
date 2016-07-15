import {
  beforeEach,
  addProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, DebugElement, Renderer } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TdHighlightComponent } from './highlight.component';

describe('Component: TdHighlight', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      TdHighlightComponent,
      Renderer,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([TdHighlightComponent], (component: TdHighlightComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TdHighlightTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(TdHighlightComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [TdHighlightComponent],
  selector: 'td-test',
  template: `
    <td-highlight></td-highlight>
  `,
})
class TdHighlightTestControllerComponent {
}

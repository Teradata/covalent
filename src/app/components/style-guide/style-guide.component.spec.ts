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
import { StyleGuideComponent } from './style-guide.component';
import { TD_LAYOUT_PROVIDERS } from '../../../platform/core';

describe('Component: StyleGuide', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    StyleGuideComponent,
    TD_LAYOUT_PROVIDERS,
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([StyleGuideComponent], (component: StyleGuideComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(StyleGuideTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(StyleGuideComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [StyleGuideComponent],
  selector: 'td-test',
  template: `
    <td-style-guide></td-style-guide>
  `,
})
class StyleGuideTestControllerComponent {
}

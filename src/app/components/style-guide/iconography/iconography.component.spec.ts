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
import { IconographyComponent } from './iconography.component';

describe('Component: StyleGuideIconography', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [IconographyComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([IconographyComponent], (component: IconographyComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(IconographyTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(IconographyComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [IconographyComponent],
  selector: 'td-test',
  template: `
    <td-style-guide-iconography></td-style-guide-iconography>
  `,
})
class IconographyTestControllerComponent {
}

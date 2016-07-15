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
import { Angular2Component } from './angular-2.component';

describe('Component: Angular2', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [Angular2Component]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([Angular2Component], (component: Angular2Component) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(Angular2TestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(Angular2Component));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [Angular2Component],
  selector: 'td-test',
  template: `
    <td-docs-angular-2></td-docs-angular-2>
  `,
})
class Angular2TestControllerComponent {
}

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
import { LayoutsComponent } from './layouts.component';

describe('Component: Layouts', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      LayoutsComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([LayoutsComponent], (component: LayoutsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LayoutsTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(LayoutsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [LayoutsComponent],
  selector: 'td-test',
  template: `
    <td-layouts></td-layouts>
  `,
})
class LayoutsTestControllerComponent {
}

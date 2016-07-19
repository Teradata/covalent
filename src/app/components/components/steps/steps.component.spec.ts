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
import { StepsDemoComponent } from './steps.component';

describe('Component: StepsDemo', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      StepsDemoComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([StepsDemoComponent], (component: StepsDemoComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(StepsDemoTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(StepsDemoComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [StepsDemoComponent],
  selector: 'td-test',
  template: `
    <td-steps-demo></td-steps-demo>
  `,
})
class StepsDemoTestControllerComponent {
}

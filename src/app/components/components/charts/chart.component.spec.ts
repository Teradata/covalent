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
import { ChartDemoComponent } from './chart.component';

describe('Component: ChartDemoTestController', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      ChartDemoComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it(
    'should inject the component',
    inject(
      [ChartDemoComponent],
      (component: ChartDemoComponent) => {
        expect(component).toBeTruthy();
      })
  );

  it(
    'should create the component',
    inject(
      [],
      () => {
        return builder.createAsync(ChartDemoTestControllerComponent)
          .then((fixture: ComponentFixture<any>) => {
            let query: DebugElement = fixture.debugElement.query(By.directive(ChartDemoComponent));
            expect(query).toBeTruthy();
            expect(query.componentInstance).toBeTruthy();
          });
      }
    )
  );
});

@Component({
  directives: [ChartDemoComponent],
  selector: 'td-test',
  template: `
    <td-chart></td-chart>
  `,
})
class ChartDemoTestControllerComponent {
}

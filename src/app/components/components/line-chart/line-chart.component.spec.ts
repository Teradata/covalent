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
import { LineChartDemoComponent } from './line-chart.component';

describe('Component: LineChartDemoTestController', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      LineChartDemoComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it(
    'should inject the component',
    inject(
      [LineChartDemoComponent],
      (component: LineChartDemoComponent) => {
        expect(component).toBeTruthy();
      })
  );

  it(
    'should create the component',
    inject(
      [],
      () => {
        return builder.createAsync(LineChartDemoTestControllerComponent)
          .then((fixture: ComponentFixture<any>) => {
            let query: DebugElement = fixture.debugElement.query(By.directive(LineChartDemoComponent));
            expect(query).toBeTruthy();
            expect(query.componentInstance).toBeTruthy();
          });
      }
    )
  );
});

@Component({
  directives: [LineChartDemoComponent],
  selector: 'td-test',
  template: `
    <td-line-chart></td-line-chart>
  `,
})
class LineChartDemoTestControllerComponent {
}

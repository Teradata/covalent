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
import { BarChartDemoComponent } from './bar-chart.component';

describe('Component: BarChartDemoTestController', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      BarChartDemoComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it(
    'should inject the component',
    inject(
      [BarChartDemoComponent],
      (component: BarChartDemoComponent) => {
        expect(component).toBeTruthy();
      })
  );

  it(
    'should create the component',
    inject(
      [],
      () => {
        return builder.createAsync(BarChartDemoTestControllerComponent)
          .then((fixture: ComponentFixture<any>) => {
            let query: DebugElement = fixture.debugElement.query(By.directive(BarChartDemoComponent));
            expect(query).toBeTruthy();
            expect(query.componentInstance).toBeTruthy();
          });
      }
    )
  );
});

@Component({
  directives: [BarChartDemoComponent],
  selector: 'td-test',
  template: `
    <td-bar-chart></td-bar-chart>
  `,
})
class BarChartDemoTestControllerComponent {
}

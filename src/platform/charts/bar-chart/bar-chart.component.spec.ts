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
import { TdBarChartComponent } from './bar-chart.component';

describe('Component: TdBarChart', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      TdBarChartComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([TdBarChartComponent], (component: TdBarChartComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TdBarChartTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(TdBarChartComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [TdBarChartComponent],
  selector: 'td-test',
  template: `
    <td-bar-chart></td-bar-chart>
  `,
})
class TdBarChartTestControllerComponent {
}

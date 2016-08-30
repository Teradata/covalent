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
import { TdChartLineComponent } from './chart-line.component';

describe('Component: TdLineChart', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      TdChartLineComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([TdChartLineComponent], (component: TdChartLineComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TdChartLineTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(TdChartLineComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [TdChartLineComponent],
  selector: 'td-test',
  template: `
    <td-chart-line></td-chart-line>
  `,
})
class TdChartLineTestControllerComponent {
}

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
import { TdLineChartComponent } from './line-chart.component';

describe('Component: TdMarkdown', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      TdLineChartComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([TdLineChartComponent], (component: TdLineChartComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TdLineChartTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(TdLineChartComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [TdLineChartComponent],
  selector: 'td-test',
  template: `
    <td-line-chart></td-line-chart>
  `,
})
class TdLineChartTestControllerComponent {
}

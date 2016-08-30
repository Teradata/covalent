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
import { TdChartBarComponent } from './bar-chart.component';

describe('Component: TdChartBar', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      TdChartBarComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([TdChartBarComponent], (component: TdChartBarComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TdChartBarTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(TdChartBarComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [TdChartBarComponent],
  selector: 'td-test',
  template: `
    <td-chart-bar></td-chart-bar>
  `,
})
class TdChartBarTestControllerComponent {
}

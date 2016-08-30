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
import { ChartsDemoComponent } from './charts.component';

describe('Component: ChartsDemoTestController', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      ChartsDemoComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it(
    'should inject the component',
    inject(
      [ChartsDemoComponent],
      (component: ChartsDemoComponent) => {
        expect(component).toBeTruthy();
      })
  );

  it(
    'should create the component',
    inject(
      [],
      () => {
        return builder.createAsync(ChartsDemoTestControllerComponent)
          .then((fixture: ComponentFixture<any>) => {
            let query: DebugElement = fixture.debugElement.query(By.directive(ChartsDemoComponent));
            expect(query).toBeTruthy();
            expect(query.componentInstance).toBeTruthy();
          });
      }
    )
  );
});

@Component({
  directives: [ChartsDemoComponent],
  selector: 'td-test',
  template: `
    <td-charts></td-charts>
  `,
})
class ChartsDemoTestControllerComponent {
}

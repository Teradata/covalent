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
import { ChipsDemoComponent } from './chips.component';

describe('Component: ChipsDemo', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      ChipsDemoComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([ChipsDemoComponent], (component: ChipsDemoComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ChipsDemoTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(ChipsDemoComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [ChipsDemoComponent],
  selector: 'td-test',
  template: `
    <td-chips-demo></td-chips-demo>
  `,
})
class ChipsDemoTestControllerComponent {
}

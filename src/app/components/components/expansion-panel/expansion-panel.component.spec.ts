import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ExpansionPanelDemoComponent } from './expansion-panel.component';

describe('Component: ExpansionPanelDemo', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ExpansionPanelDemoComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([ExpansionPanelDemoComponent], (component: ExpansionPanelDemoComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ExpansionPanelDemoTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(ExpansionPanelDemoComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [ExpansionPanelDemoComponent],
  selector: 'td-test',
  template: `
    <td-expansion-panel-demo></td-expansion-panel-demo>
  `,
})
class ExpansionPanelDemoTestControllerComponent {
}


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
import { TdExpansionPanelComponent } from './expansion-panel.component';

describe('Component: Button', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      TdExpansionPanelComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([TdExpansionPanelComponent], (component: TdExpansionPanelComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TdExpansionTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(TdExpansionPanelComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [TdExpansionPanelComponent],
  selector: 'td-test',
  template: `
    <td-expansion-panel></td-expansion-panel>
  `,
})
class TdExpansionTestControllerComponent {
}

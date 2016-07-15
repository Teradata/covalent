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
import { ComponentsComponent } from './components.component';
import { TD_LAYOUT_PROVIDERS } from '../../../platform/core';

describe('Component: Components', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    ComponentsComponent,
    TD_LAYOUT_PROVIDERS,
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([ComponentsComponent], (component: ComponentsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ComponentsTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(ComponentsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [ComponentsComponent],
  selector: 'td-test',
  template: `
    <td-components></td-components>
  `,
})
class ComponentsTestControllerComponent {
}

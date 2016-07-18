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
import { NavViewComponent } from './nav-view.component';
import { TD_LAYOUT_PROVIDERS } from '../../../../platform/core';

describe('Component: NavView', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      NavViewComponent,
      TD_LAYOUT_PROVIDERS,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([NavViewComponent], (component: NavViewComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(NavViewTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(NavViewComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [NavViewComponent],
  selector: 'td-test',
  template: `
    <td-layouts-nav-view></td-layouts-nav-view>
  `,
})
class NavViewTestControllerComponent {
}

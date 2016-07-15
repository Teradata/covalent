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
import { NavListComponent } from './nav-list.component';
import { TD_LAYOUT_PROVIDERS } from '../../../../platform/core';

describe('Component: NavList', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    NavListComponent,
    TD_LAYOUT_PROVIDERS,
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([NavListComponent], (component: NavListComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(NavListTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(NavListComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [NavListComponent],
  selector: 'td-test',
  template: `
    <td-layouts-nav-list></td-layouts-nav-list>
  `,
})
class NavListTestControllerComponent {
}

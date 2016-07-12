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
import { HomeComponent } from './home.component';
import { TD_LAYOUT_PROVIDERS } from '../../../platform/core';

describe('Component: Home', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    HomeComponent,
    TD_LAYOUT_PROVIDERS,
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([HomeComponent], (component: HomeComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HomeTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(HomeComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [HomeComponent],
  selector: 'td-test',
  template: `
    <td-home></td-home>
  `,
})
class HomeTestControllerComponent {
}


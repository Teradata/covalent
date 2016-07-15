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
import { UtilityStylesComponent } from './utility-styles.component';

describe('Component: UtilityStyles', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      UtilityStylesComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([UtilityStylesComponent], (component: UtilityStylesComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(UtilityStylesTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(UtilityStylesComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [UtilityStylesComponent],
  selector: 'td-test',
  template: `
    <td-utility-styles></td-utility-styles>
  `,
})
class UtilityStylesTestControllerComponent {
}

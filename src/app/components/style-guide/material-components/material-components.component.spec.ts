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
import { MaterialComponentsComponent } from './material-components.component';

describe('Component: MaterialComponents', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      MaterialComponentsComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([MaterialComponentsComponent], (component: MaterialComponentsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MaterialComponentsTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(MaterialComponentsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [MaterialComponentsComponent],
  selector: 'td-test',
  template: `
    <td-design-patterns-material-components></td-design-patterns-material-components>
  `,
})
class MaterialComponentsTestControllerComponent {
}

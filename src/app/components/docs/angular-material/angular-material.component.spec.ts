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
import { AngularMaterialComponent } from './angular-material.component';

describe('Component: AngularMaterial', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [AngularMaterialComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([AngularMaterialComponent], (component: AngularMaterialComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(AngularMaterialTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(AngularMaterialComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [AngularMaterialComponent],
  selector: 'td-test',
  template: `
    <td-docs-angular-material></td-docs-angular-material>
  `,
})
class AngularMaterialTestControllerComponent {
}

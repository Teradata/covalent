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
import { DeploymentComponent } from './deployment.component';

describe('Component: Deployment', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      DeploymentComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([DeploymentComponent], (component: DeploymentComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DeploymentTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(DeploymentComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [DeploymentComponent],
  selector: 'td-test',
  template: `
    <td-docs-deployment></td-docs-deployment>
  `,
})
class DeploymentTestControllerComponent {
}

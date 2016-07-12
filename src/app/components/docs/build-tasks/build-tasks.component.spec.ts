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
import { BuildTasksComponent } from './build-tasks.component';

describe('Component: BuildTasks', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [BuildTasksComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([BuildTasksComponent], (component: BuildTasksComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(BuildTasksTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(BuildTasksComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [BuildTasksComponent],
  selector: 'td-test',
  template: `
    <td-docs-build-tasks></td-docs-build-tasks>
  `,
})
class BuildTasksTestControllerComponent {
}


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
import { DocsComponent } from './docs.component';
import { TD_LAYOUT_PROVIDERS } from '../../../platform/core';

describe('Component: Docs', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      DocsComponent,
      TD_LAYOUT_PROVIDERS,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([DocsComponent], (component: DocsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DocsTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(DocsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [DocsComponent],
  selector: 'td-test',
  template: `
    <td-docs></td-docs>
  `,
})
class DocsTestControllerComponent {
}

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
import { ManageListComponent } from './manage-list.component';
import { TD_LAYOUT_PROVIDERS } from '../../../../platform/core';

describe('Component: ManageList', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      ManageListComponent,
      TD_LAYOUT_PROVIDERS,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([ManageListComponent], (component: ManageListComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ManageListTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(ManageListComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [ManageListComponent],
  selector: 'td-test',
  template: `
    <td-layouts-manage-list></td-layouts-manage-list>
  `,
})
class ManageListTestControllerComponent {
}

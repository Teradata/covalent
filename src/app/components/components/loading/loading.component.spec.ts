import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, DebugElement, ViewContainerRef, ApplicationRef, provide } from '@angular/core';
import { MockApplicationRef } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoadingDemoComponent } from './loading.component';
import { TdLoadingService } from '../../../../platform/core';

describe('Component: LoadingDemo', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    LoadingDemoComponent,
    ViewContainerRef,
    provide(ApplicationRef, { useClass: MockApplicationRef }),
    TdLoadingService,
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([LoadingDemoComponent], (component: LoadingDemoComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LoadingDemoTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(LoadingDemoComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [LoadingDemoComponent],
  selector: 'td-test',
  template: `
    <td-loading-demo></td-loading-demo>
  `,
})
class LoadingDemoTestControllerComponent {
}

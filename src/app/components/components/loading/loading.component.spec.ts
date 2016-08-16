import {
  beforeEach,
  addProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, DebugElement, ViewContainerRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LoadingDemoComponent } from './loading.component';
import { TdLoadingService, TD_LOADING_ENTRY_COMPONENTS } from '../../../../platform/core';

describe('Component: LoadingDemo', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      LoadingDemoComponent,
      Injector,
      ViewContainerRef,
      TdLoadingService,
      { provide: ComponentFactoryResolver, useValue: {resolveComponentFactory: function(): any{
        return {create: function(): any{
          return {instance: {}};
        }};
      }}},
    ]);
  });

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
  precompile: [ TD_LOADING_ENTRY_COMPONENTS ],
})
class LoadingDemoTestControllerComponent {
}

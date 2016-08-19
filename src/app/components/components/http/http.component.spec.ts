import {
  beforeEach,
  addProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { HttpDemoComponent } from './http.component';

describe('Component: MediaDemo', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      HttpDemoComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([HttpDemoComponent], (component: HttpDemoComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HttpDemoComponent)
      .then((fixture: ComponentFixture<any>) => {
        let httpDemoComp: HttpDemoComponent = fixture.componentInstance;
        expect(httpDemoComp).toBeTruthy();
      });
  }));
});

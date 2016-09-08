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
import { JsonFormatterDemoComponent } from './json-formatter.component';

describe('Component: JsonFormatterDemo', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      JsonFormatterDemoComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([JsonFormatterDemoComponent], (component: JsonFormatterDemoComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(JsonFormatterDemoTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(JsonFormatterDemoComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [JsonFormatterDemoComponent],
  selector: 'td-test',
  template: `
    <td-json-formatter-demo></td-json-formatter-demo>
  `,
})
class JsonFormatterDemoTestControllerComponent {
}

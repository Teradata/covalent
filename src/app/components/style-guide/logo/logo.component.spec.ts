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
import { LogoComponent } from './logo.component';
import { TD_LAYOUT_PROVIDERS } from '../../../../platform/core';

describe('Component: StyleGuideLogo', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      LogoComponent,
      TD_LAYOUT_PROVIDERS,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([LogoComponent], (component: LogoComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LogoTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(LogoComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [LogoComponent],
  selector: 'td-test',
  template: `
    <td-style-guide-logo></td-style-guide-logo>
  `,
})
class LogoTestControllerComponent {
}

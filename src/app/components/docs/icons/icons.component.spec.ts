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
import { IconsComponent } from './icons.component';
import { Router, ActivatedRoute } from '@angular/router';

describe('Component: Icons', () => {
  let builder: TestComponentBuilder;
  class Mock {}

  beforeEachProviders(() => [
    IconsComponent,
    {provide: Router, useClass: Mock},
    {provide: ActivatedRoute, useClass: Mock},
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([IconsComponent], (component: IconsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(IconsTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(IconsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [IconsComponent],
  selector: 'td-test',
  template: `
    <td-docs-icons></td-docs-icons>
  `,

})
class IconsTestControllerComponent {
}


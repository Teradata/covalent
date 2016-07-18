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
import { CardOverComponent } from './card-over.component';
import { TD_LAYOUT_PROVIDERS } from '../../../../platform/core';

describe('Component: CardOver', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      CardOverComponent,
      TD_LAYOUT_PROVIDERS,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([CardOverComponent], (component: CardOverComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(CardOverTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(CardOverComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [CardOverComponent],
  selector: 'td-test',
  template: `
    <td-layouts-card-over></td-layouts-card-over>
  `,
})
class CardOverTestControllerComponent {
}

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
import { ProductIconsComponent } from './product-icons.component';

describe('Component: StyleGuideProductIcons', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ProductIconsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([ProductIconsComponent], (component: ProductIconsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ProductIconsTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(ProductIconsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [ProductIconsComponent],
  selector: 'td-test',
  template: `
    <td-style-guide-product-icons></td-style-guide-product-icons>
  `,
})
class ProductIconsTestControllerComponent {
}

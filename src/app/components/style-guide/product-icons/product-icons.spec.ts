import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder } from '@angular/core/testing';

import { ProductIconsComponent } from './product-icons.component';

describe('Component: ProductIcons', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      ProductIconsComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ProductIconsComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: ProductIconsComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

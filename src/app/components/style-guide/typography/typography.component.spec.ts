import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder } from '@angular/core/testing';

import { TypographyComponent } from './typography.component';

describe('Component: UtilityStyles', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      TypographyComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TypographyComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: TypographyComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

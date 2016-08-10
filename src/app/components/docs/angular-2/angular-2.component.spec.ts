import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { Angular2Component } from './angular-2.component';

describe('Component: Angular2', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      Angular2Component,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(Angular2Component)
      .then((fixture: ComponentFixture<any>) => {
        let component: Angular2Component = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

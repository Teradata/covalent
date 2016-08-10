import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/core/testing';

import { TestingComponent } from './testing.component';

describe('Component: Testing', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      TestingComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TestingComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: TestingComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

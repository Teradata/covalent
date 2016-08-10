import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/core/testing';

import { CardsComponent } from './cards.component';

describe('Component: Cards', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      CardsComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(CardsComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: CardsComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('Component: Home', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      HomeComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HomeComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: HomeComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

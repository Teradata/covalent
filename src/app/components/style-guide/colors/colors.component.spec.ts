import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/core/testing';

import { ColorsComponent } from './colors.component';

describe('Component: Colors', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      ColorsComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ColorsComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: ColorsComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

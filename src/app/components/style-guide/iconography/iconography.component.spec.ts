import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/core/testing';

import { IconographyComponent } from './iconography.component';

describe('Component: Iconography', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      IconographyComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(IconographyComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: IconographyComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

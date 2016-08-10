import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/core/testing';

import { UtilityStylesComponent } from './utility-styles.component';

describe('Component: UtilityStyles', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      UtilityStylesComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(UtilityStylesComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: UtilityStylesComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

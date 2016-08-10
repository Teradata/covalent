import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/core/testing';

import { NavViewComponent } from './nav-view.component';

describe('Component: NavView', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      NavViewComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(NavViewComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: NavViewComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

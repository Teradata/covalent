import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { NavListComponent } from './nav-list.component';

describe('Component: NavList', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      NavListComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(NavListComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: NavListComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { LayoutsComponent } from './layouts.component';

describe('Component: Layouts', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      LayoutsComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LayoutsComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: LayoutsComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

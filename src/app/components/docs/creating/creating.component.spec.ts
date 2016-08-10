import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { CreatingComponent } from './creating.component';

describe('Component: Creating', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      CreatingComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(CreatingComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: CreatingComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

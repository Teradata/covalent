import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { PipesComponent } from './pipes.component';

describe('Component: Pipes', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      PipesComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PipesComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: PipesComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

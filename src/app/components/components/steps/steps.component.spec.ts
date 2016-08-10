import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { StepsDemoComponent } from './steps.component';

describe('Component: StepsDemo', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      StepsDemoComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(StepsDemoComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: StepsDemoComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

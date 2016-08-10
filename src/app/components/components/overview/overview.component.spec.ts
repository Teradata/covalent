import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { ComponentsOverviewComponent } from './overview.component';

describe('Component: ComponentsOverview', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      ComponentsOverviewComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ComponentsOverviewComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: ComponentsOverviewComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});

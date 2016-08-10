import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { LayoutsOverviewComponent } from './overview.component';

describe('Component: LayoutsOverview', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      LayoutsOverviewComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LayoutsOverviewComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: LayoutsOverviewComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
